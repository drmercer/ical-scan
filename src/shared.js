/**
 * @typedef {Object} IcalEvent
 * @property {string} uid - Unique identifier for the event
 * @property {string} summary - The event summary
 * @property {Date} start - The event start timestamp
 * @property {Date} end - The event end timestamp
 */

/**
 *
 * @param {ICAL.Event} icalEvent ICal.Event (https://kewisch.github.io/ical.js/api/ICAL.Event.html)
 * @param overrides occurrenceDetails object (https://kewisch.github.io/ical.js/api/ICAL.Event.html#.occurrenceDetails)
 * @returns {IcalEvent}
 */
export function parseEvent(icalEvent, overrides) {
  return {
    uid: `${encodeURIComponent(icalEvent.uid)}/${encodeURIComponent(
      overrides?.recurrenceId?.toUnixTime() ?? '',
    )}`,
    summary:
      overrides?.item?.summary ?? overrides?.summary ?? icalEvent.summary,
    start: overrides?.startDate?.toJSDate() ?? icalEvent.startDate.toJSDate(),
    end: overrides?.endDate?.toJSDate() ?? icalEvent.endDate.toJSDate(),
  };
}
