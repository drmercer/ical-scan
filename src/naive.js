import { ICAL } from './deps/ical.js';
import { parseEvent } from "./shared.js";

/**
 * @module a naive implementation that requires the full ical data to be loaded in memory
 */

const OneMonthInMillis = 30 * 24 * 60 * 60 * 1000;

/**
 * Parses the given ical event data and returns the events that START in the given range
 *
 * @param {string} icalData The ical data
 * @param {Date} start The start of the range
 * @param {Date} end The end of the range
 */
export function getEvents(
  icalData,
  start,
  end,
) {
  function matchesQuery(event) {
    const eStart = event.startDate.toJSDate();
    return eStart >= start && eStart <= end;
  }

  const calendar = new ICAL.Component(ICAL.parse(icalData));

  const events = calendar.getAllSubcomponents('vevent');

  return events
    .flatMap((rawEvent) => {
      const event = new ICAL.Event(rawEvent);

      if (event.isRecurring()) {
        const recur = event.iterator();
        let time;
        /** @type {IcalEvent[]} recurrences */
        const recurrences = [];
        const endPlusBuffer = new Date(end.getTime() + OneMonthInMillis);
        while ((time = recur.next()) && time.toJSDate() < endPlusBuffer) {
          const recurrence = event.getOccurrenceDetails(time);
          if (recurrence && matchesQuery(recurrence)) {
            recurrences.push(parseEvent(event, recurrence));
          }
        }
        return recurrences;
      } else if (matchesQuery(event) && !event.isRecurrenceException()) {
        const icale = parseEvent(event);
        return [icale];
      } else {
        return [];
      }
    })
    .sort((a, b) => a.start.getTime() - b.start.getTime());
}
