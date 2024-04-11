import { toTransformStream } from "./deps/streams.js";
import { ICAL } from "./deps/ical.js";
import { parseEvent } from "./shared.js";

/**
 * Returns a TransformStream that parses IcalEvents from a stream of lines.
 * @returns {TransformStream<string, import('./deps/ical.js').ICAL.Event>}
 */
export function icalEventsTransformStream() {
  return toTransformStream(async function* (linesStream) {
    const calendarLines = [];
    let inEvent = false;
    const eventLines = [];
    for await (const line of linesStream) {
      if (!inEvent) {
        if (line == 'BEGIN:VEVENT') {
          inEvent = true;
          eventLines.push(line);
        } else {
          // accumulate calendar lines
          calendarLines.push(line);
        }
      } else {
        if (line == 'END:VEVENT') {
          inEvent = false;
          // TODO optimize - parse calendar once, instead of each time
          const icalText = [
            ...calendarLines,
            ...eventLines,
            line,
            'END:VCALENDAR',
          ].join('\n');
          console.log(icalText);
          const parsed = ICAL.parse(icalText);
          const calendar = new ICAL.Component(parsed);
          // guaranteed to only be one event, because we only put one in:
          const event = new ICAL.Event(calendar.getAllSubcomponents('vevent')[0]);
          yield parseEvent(event);
          eventLines.length = 0;
        } else {
          // accumulate event lines
          eventLines.push(line);
        }
      }
    }
  })
}
