export const Test1 = `
BEGIN:VCALENDAR
PRODID:-//Google Inc//Google Calendar 70.9054//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Test Cal 2
X-WR-TIMEZONE:America/Denver
BEGIN:VEVENT
DTSTART:20230429T200000Z
DTEND:20230429T210000Z
DTSTAMP:20230429T033543Z
UID:2avlqu0j1i0osmdibk9qj85deg@google.com
CREATED:20230429T033452Z
DESCRIPTION:
LAST-MODIFIED:20230429T033522Z
LOCATION:
SEQUENCE:2
STATUS:CONFIRMED
SUMMARY:Once at 2pm
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR
`;

export const Test2 = `
BEGIN:VCALENDAR
PRODID:-//Google Inc//Google Calendar 70.9054//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Test Cal 2
X-WR-TIMEZONE:America/Denver
BEGIN:VTIMEZONE
TZID:America/Denver
X-LIC-LOCATION:America/Denver
BEGIN:DAYLIGHT
TZOFFSETFROM:-0700
TZOFFSETTO:-0600
TZNAME:MDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0600
TZOFFSETTO:-0700
TZNAME:MST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230429T140000
DTEND;TZID=America/Denver:20230429T150000
RRULE:FREQ=DAILY
DTSTAMP:20230429T034258Z
UID:2avlqu0j1i0osmdibk9qj85deg@google.com
CREATED:20230429T033452Z
DESCRIPTION:
LAST-MODIFIED:20230429T034253Z
LOCATION:
SEQUENCE:3
STATUS:CONFIRMED
SUMMARY:Daily at 2pm
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR
`;

export const Test3 = `
BEGIN:VCALENDAR
PRODID:-//Google Inc//Google Calendar 70.9054//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Test Cal 2
X-WR-TIMEZONE:America/Denver
BEGIN:VTIMEZONE
TZID:America/Denver
X-LIC-LOCATION:America/Denver
BEGIN:DAYLIGHT
TZOFFSETFROM:-0700
TZOFFSETTO:-0600
TZNAME:MDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0600
TZOFFSETTO:-0700
TZNAME:MST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230501T160000
DTEND;TZID=America/Denver:20230501T170000
DTSTAMP:20230429T035931Z
UID:2avlqu0j1i0osmdibk9qj85deg@google.com
RECURRENCE-ID;TZID=America/Denver:20230501T140000
CREATED:20230429T033452Z
DESCRIPTION:
LAST-MODIFIED:20230429T035926Z
LOCATION:
SEQUENCE:4
STATUS:CONFIRMED
SUMMARY:I'm different! Good job!
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230429T140000
DTEND;TZID=America/Denver:20230429T150000
RRULE:FREQ=DAILY
DTSTAMP:20230429T035931Z
UID:2avlqu0j1i0osmdibk9qj85deg@google.com
CREATED:20230429T033452Z
DESCRIPTION:
LAST-MODIFIED:20230429T034253Z
LOCATION:
SEQUENCE:3
STATUS:CONFIRMED
SUMMARY:Daily at 2pm
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR
`;

export const Test4 = `
BEGIN:VCALENDAR
PRODID:-//Google Inc//Google Calendar 70.9054//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Test Cal 2
X-WR-TIMEZONE:America/Denver
BEGIN:VTIMEZONE
TZID:America/Denver
X-LIC-LOCATION:America/Denver
BEGIN:DAYLIGHT
TZOFFSETFROM:-0700
TZOFFSETTO:-0600
TZNAME:MDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0600
TZOFFSETTO:-0700
TZNAME:MST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230429T140000
DTEND;TZID=America/Denver:20230429T150000
RRULE:FREQ=DAILY
EXDATE;TZID=America/Denver:20230501T140000
DTSTAMP:20230429T040530Z
UID:2avlqu0j1i0osmdibk9qj85deg@google.com
CREATED:20230429T033452Z
DESCRIPTION:
LAST-MODIFIED:20230429T034253Z
LOCATION:
SEQUENCE:3
STATUS:CONFIRMED
SUMMARY:Daily at 2pm
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR
`;

export const Test5 = `
BEGIN:VCALENDAR
PRODID:-//Google Inc//Google Calendar 70.9054//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Test Cal 2
X-WR-TIMEZONE:America/Denver
BEGIN:VTIMEZONE
TZID:America/Denver
X-LIC-LOCATION:America/Denver
BEGIN:DAYLIGHT
TZOFFSETFROM:-0700
TZOFFSETTO:-0600
TZNAME:MDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0600
TZOFFSETTO:-0700
TZNAME:MST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230501T160000
DTEND;TZID=America/Denver:20230501T170000
RRULE:FREQ=DAILY
DTSTAMP:20230429T041156Z
UID:4knq7n8fbccac5vcp2k7iq0gek@google.com
CREATED:20230429T041008Z
DESCRIPTION:
LAST-MODIFIED:20230429T041031Z
LOCATION:
SEQUENCE:2
STATUS:CONFIRMED
SUMMARY:Daily at 2pm
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230429T140000
DTEND;TZID=America/Denver:20230429T150000
RRULE:FREQ=DAILY;UNTIL=20230501T055959Z
DTSTAMP:20230429T041156Z
UID:2jfl27ga08rd5rs8k5iq273c08@google.com
CREATED:20230429T041008Z
DESCRIPTION:
LAST-MODIFIED:20230429T041031Z
LOCATION:
SEQUENCE:1
STATUS:CONFIRMED
SUMMARY:Daily at 2pm
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR
`;

export const Test6 = `
BEGIN:VCALENDAR
PRODID:-//Google Inc//Google Calendar 70.9054//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Test Cal 2
X-WR-TIMEZONE:America/Denver
BEGIN:VTIMEZONE
TZID:America/Denver
X-LIC-LOCATION:America/Denver
BEGIN:DAYLIGHT
TZOFFSETFROM:-0700
TZOFFSETTO:-0600
TZNAME:MDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0600
TZOFFSETTO:-0700
TZNAME:MST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230501T170000
DTEND;TZID=America/Denver:20230501T180000
DTSTAMP:20230429T042304Z
UID:6ep81fak4llpb06s1i16u55qq7_R20230501T200000@google.com
RECURRENCE-ID;TZID=America/Denver:20230504T140000
CREATED:20230429T042206Z
DESCRIPTION:
LAST-MODIFIED:20230429T042247Z
LOCATION:
SEQUENCE:2
STATUS:CONFIRMED
SUMMARY:Squished
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230501T160000
DTEND;TZID=America/Denver:20230501T170000
DTSTAMP:20230429T042304Z
UID:6ep81fak4llpb06s1i16u55qq7_R20230501T200000@google.com
RECURRENCE-ID;TZID=America/Denver:20230503T140000
CREATED:20230429T042206Z
DESCRIPTION:
LAST-MODIFIED:20230429T042243Z
LOCATION:
SEQUENCE:2
STATUS:CONFIRMED
SUMMARY:Squished
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230501T150000
DTEND;TZID=America/Denver:20230501T160000
DTSTAMP:20230429T042304Z
UID:6ep81fak4llpb06s1i16u55qq7_R20230501T200000@google.com
RECURRENCE-ID;TZID=America/Denver:20230502T140000
CREATED:20230429T042206Z
DESCRIPTION:
LAST-MODIFIED:20230429T042238Z
LOCATION:
SEQUENCE:2
STATUS:CONFIRMED
SUMMARY:Squished
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230501T140000
DTEND;TZID=America/Denver:20230501T150000
RRULE:FREQ=DAILY
DTSTAMP:20230429T042304Z
UID:6ep81fak4llpb06s1i16u55qq7_R20230501T200000@google.com
CREATED:20230429T042206Z
DESCRIPTION:
LAST-MODIFIED:20230429T042227Z
LOCATION:
SEQUENCE:1
STATUS:CONFIRMED
SUMMARY:Squished
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20230429T140000
DTEND;TZID=America/Denver:20230429T150000
RRULE:FREQ=DAILY;UNTIL=20230501T055959Z
DTSTAMP:20230429T042304Z
UID:6ep81fak4llpb06s1i16u55qq7@google.com
CREATED:20230429T042206Z
DESCRIPTION:
LAST-MODIFIED:20230429T042227Z
LOCATION:
SEQUENCE:1
STATUS:CONFIRMED
SUMMARY:Daily at 2pm
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR
`;

export const Test7 = `
BEGIN:VCALENDAR
PRODID:-//Google Inc//Google Calendar 70.9054//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Test Calendar
X-WR-TIMEZONE:America/Denver
BEGIN:VTIMEZONE
TZID:America/Denver
X-LIC-LOCATION:America/Denver
BEGIN:DAYLIGHT
TZOFFSETFROM:-0700
TZOFFSETTO:-0600
TZNAME:MDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0600
TZOFFSETTO:-0700
TZNAME:MST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20240331T080000
DTEND;TZID=America/Denver:20240331T090000
RRULE:FREQ=WEEKLY;BYDAY=SU
DTSTAMP:20240410T233103Z
UID:038drku84heh8k11r8ssuobqkt@google.com
CREATED:20240410T232808Z
LAST-MODIFIED:20240410T232808Z
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:Every Sunday
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART;TZID=America/Denver:20240411T080000
DTEND;TZID=America/Denver:20240411T090000
DTSTAMP:20240410T233103Z
UID:038drku84heh8k11r8ssuobqkt@google.com
RECURRENCE-ID;TZID=America/Denver:20240407T080000
CREATED:20240410T232808Z
LAST-MODIFIED:20240410T233059Z
SEQUENCE:1
STATUS:CONFIRMED
SUMMARY:Every Sunday (but moved to Thursday)
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR
`;
