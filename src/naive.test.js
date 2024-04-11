import { getEvents } from './naive.js';
import { Test1, Test2, Test3, Test4, Test5, Test6, Test7 } from './testing/icals/google.js';
import { assertEquals } from "./deps/assert.js";

Deno.test('should work for a non-recurring event', () => {
  const start = new Date('2023-04-28T00:00:00.000-06:00'); // 4/28/2023, 12:00:00 AM MDT
  const end = new Date('2023-05-05T00:00:00.000-06:00'); // 5/5/2023, 12:00:00 AM MDT
  const events = getEvents(Test1, start, end);

  assertEquals(events, [
    {
      // DO NOT CHANGE uid PROPERTIES IN TESTS. They have to remain stable for backwards compatibility
      uid: '2avlqu0j1i0osmdibk9qj85deg%40google.com/',
      summary: 'Once at 2pm',
      start: new Date('2023-04-29T14:00:00.000-06:00'),
      end: new Date('2023-04-29T15:00:00.000-06:00'),
    },
  ]);
});

// DO NOT CHANGE uid PROPERTIES IN TESTS. They have to remain stable for backwards compatibility.
// This one is used in multiple tests to show that changing an occurrence doesn't change its uid.
const ChangedOcurrenceId =
  '2avlqu0j1i0osmdibk9qj85deg%40google.com/1682949600';

Deno.test('should work for a basic recurring event', () => {
  const start = new Date('2023-04-28T00:00:00.000-06:00'); // 4/28/2023, 12:00:00 AM MDT
  const end = new Date('2023-05-02T00:00:00.000-06:00'); // 5/2/2023, 12:00:00 AM MDT
  const events = getEvents(Test2, start, end);

  assertEquals(events, [
    {
      // DO NOT CHANGE uid PROPERTIES IN TESTS. They have to remain stable for backwards compatibility
      uid: '2avlqu0j1i0osmdibk9qj85deg%40google.com/1682776800',
      summary: 'Daily at 2pm',
      start: new Date('2023-04-29T14:00:00.000-06:00'),
      end: new Date('2023-04-29T15:00:00.000-06:00'),
    },
    {
      uid: '2avlqu0j1i0osmdibk9qj85deg%40google.com/1682863200',
      summary: 'Daily at 2pm',
      start: new Date('2023-04-30T14:00:00.000-06:00'),
      end: new Date('2023-04-30T15:00:00.000-06:00'),
    },
    {
      uid: ChangedOcurrenceId,
      summary: 'Daily at 2pm',
      start: new Date('2023-05-01T14:00:00.000-06:00'),
      end: new Date('2023-05-01T15:00:00.000-06:00'),
    },
  ]);
});

Deno.test('should work with one ocurrence changed', () => {
  const start = new Date('2023-04-28T00:00:00.000-06:00'); // 4/28/2023, 12:00:00 AM MDT
  const end = new Date('2023-05-04T00:00:00.000-06:00'); // 5/4/2023, 12:00:00 AM MDT
  const events = getEvents(Test3, start, end);

  assertEquals(events, [
    {
      // DO NOT CHANGE uid PROPERTIES IN TESTS. They have to remain stable for backwards compatibility
      uid: '2avlqu0j1i0osmdibk9qj85deg%40google.com/1682776800',
      summary: 'Daily at 2pm',
      start: new Date('2023-04-29T14:00:00.000-06:00'),
      end: new Date('2023-04-29T15:00:00.000-06:00'),
    },
    {
      uid: '2avlqu0j1i0osmdibk9qj85deg%40google.com/1682863200',
      summary: 'Daily at 2pm',
      start: new Date('2023-04-30T14:00:00.000-06:00'),
      end: new Date('2023-04-30T15:00:00.000-06:00'),
    },
    {
      // This one is changed (NOTE uid is the same as above)
      uid: ChangedOcurrenceId,
      summary: "I'm different! Good job!",
      start: new Date('2023-05-01T16:00:00.000-06:00'),
      end: new Date('2023-05-01T17:00:00.000-06:00'),
    },
    {
      uid: '2avlqu0j1i0osmdibk9qj85deg%40google.com/1683036000',
      summary: 'Daily at 2pm',
      start: new Date('2023-05-02T14:00:00.000-06:00'),
      end: new Date('2023-05-02T15:00:00.000-06:00'),
    },
    {
      uid: '2avlqu0j1i0osmdibk9qj85deg%40google.com/1683122400',
      summary: 'Daily at 2pm',
      start: new Date('2023-05-03T14:00:00.000-06:00'),
      end: new Date('2023-05-03T15:00:00.000-06:00'),
    },
  ]);
});

Deno.test('should work with one ocurrence deleted', () => {
  const start = new Date('2023-04-28T00:00:00.000-06:00'); // 4/28/2023, 12:00:00 AM MDT
  const end = new Date('2023-05-04T00:00:00.000-06:00'); // 5/4/2023, 12:00:00 AM MDT
  const events = getEvents(Test4, start, end);

  assertEquals(events, [
    {
      // DO NOT CHANGE uid PROPERTIES IN TESTS. They have to remain stable for backwards compatibility
      uid: '2avlqu0j1i0osmdibk9qj85deg%40google.com/1682776800',
      summary: 'Daily at 2pm',
      start: new Date('2023-04-29T14:00:00.000-06:00'),
      end: new Date('2023-04-29T15:00:00.000-06:00'),
    },
    {
      uid: '2avlqu0j1i0osmdibk9qj85deg%40google.com/1682863200',
      summary: 'Daily at 2pm',
      start: new Date('2023-04-30T14:00:00.000-06:00'),
      end: new Date('2023-04-30T15:00:00.000-06:00'),
    },
    // 5/1/23 is deleted
    {
      uid: '2avlqu0j1i0osmdibk9qj85deg%40google.com/1683036000',
      summary: 'Daily at 2pm',
      start: new Date('2023-05-02T14:00:00.000-06:00'),
      end: new Date('2023-05-02T15:00:00.000-06:00'),
    },
    {
      uid: '2avlqu0j1i0osmdibk9qj85deg%40google.com/1683122400',
      summary: 'Daily at 2pm',
      start: new Date('2023-05-03T14:00:00.000-06:00'),
      end: new Date('2023-05-03T15:00:00.000-06:00'),
    },
  ]);
});

Deno.test('should work with a "this and following events" change', () => {
  const start = new Date('2023-04-28T00:00:00.000-06:00'); // 4/28/2023, 12:00:00 AM MDT
  const end = new Date('2023-05-04T00:00:00.000-06:00'); // 5/4/2023, 12:00:00 AM MDT
  const events = getEvents(Test5, start, end);

  // NOTE: the uids in this test are different - apparently, making this kind of change in
  // Google Calendar resets the event IDs :(

  assertEquals(events, [
    {
      // DO NOT CHANGE uid PROPERTIES IN TESTS. They have to remain stable for backwards compatibility
      uid: '2jfl27ga08rd5rs8k5iq273c08%40google.com/1682776800',
      summary: 'Daily at 2pm',
      start: new Date('2023-04-29T14:00:00.000-06:00'),
      end: new Date('2023-04-29T15:00:00.000-06:00'),
    },
    {
      uid: '2jfl27ga08rd5rs8k5iq273c08%40google.com/1682863200',
      summary: 'Daily at 2pm',
      start: new Date('2023-04-30T14:00:00.000-06:00'),
      end: new Date('2023-04-30T15:00:00.000-06:00'),
    },
    {
      // This one and following events are changed
      uid: '4knq7n8fbccac5vcp2k7iq0gek%40google.com/1682956800',
      summary: 'Daily at 2pm',
      start: new Date('2023-05-01T16:00:00.000-06:00'),
      end: new Date('2023-05-01T17:00:00.000-06:00'),
    },
    {
      uid: '4knq7n8fbccac5vcp2k7iq0gek%40google.com/1683043200',
      summary: 'Daily at 2pm',
      start: new Date('2023-05-02T16:00:00.000-06:00'),
      end: new Date('2023-05-02T17:00:00.000-06:00'),
    },
    {
      uid: '4knq7n8fbccac5vcp2k7iq0gek%40google.com/1683129600',
      summary: 'Daily at 2pm',
      start: new Date('2023-05-03T16:00:00.000-06:00'),
      end: new Date('2023-05-03T17:00:00.000-06:00'),
    },
  ]);
});

Deno.test('should work with events moved earlier into the range', () => {
  const start = new Date('2023-04-28T00:00:00.000-06:00'); // 4/28/2023, 12:00:00 AM MDT
  const end = new Date('2023-05-03T00:00:00.000-06:00'); // 5/4/2023, 12:00:00 AM MDT
  const events = getEvents(Test6, start, end);

  assertEquals(events, [
    {
      uid: '6ep81fak4llpb06s1i16u55qq7%40google.com/1682776800',
      summary: 'Daily at 2pm',
      start: new Date('2023-04-29T14:00:00.000-06:00'),
      end: new Date('2023-04-29T15:00:00.000-06:00'),
    },
    {
      uid: '6ep81fak4llpb06s1i16u55qq7%40google.com/1682863200',
      summary: 'Daily at 2pm',
      start: new Date('2023-04-30T14:00:00.000-06:00'),
      end: new Date('2023-04-30T15:00:00.000-06:00'),
    },
    // These are all squished onto the same day, 5/1/23
    {
      uid: '6ep81fak4llpb06s1i16u55qq7_R20230501T200000%40google.com/1682949600',
      summary: 'Squished',
      start: new Date('2023-05-01T14:00:00.000-06:00'),
      end: new Date('2023-05-01T15:00:00.000-06:00'),
    },
    {
      uid: '6ep81fak4llpb06s1i16u55qq7_R20230501T200000%40google.com/1683036000',
      summary: 'Squished',
      start: new Date('2023-05-01T15:00:00.000-06:00'),
      end: new Date('2023-05-01T16:00:00.000-06:00'),
    },
    {
      // These correctly show up, even though their original recurrence times were outside the range
      uid: '6ep81fak4llpb06s1i16u55qq7_R20230501T200000%40google.com/1683122400',
      summary: 'Squished',
      start: new Date('2023-05-01T16:00:00.000-06:00'),
      end: new Date('2023-05-01T17:00:00.000-06:00'),
    },
    {
      uid: '6ep81fak4llpb06s1i16u55qq7_R20230501T200000%40google.com/1683208800',
      summary: 'Squished',
      start: new Date('2023-05-01T17:00:00.000-06:00'),
      end: new Date('2023-05-01T18:00:00.000-06:00'),
    },
  ]);
});

Deno.test('should work with events moved later into the range', () => {
  const start = new Date('2024-04-11T00:00:00.000-06:00'); // 4/11/2024, 12:00:00 AM MDT
  const end = new Date('2024-04-12T00:00:00.000-06:00'); // 4/12/2024, 12:00:00 AM MDT

  const events = getEvents(Test7, start, end);

  assertEquals(events, [
    {
      uid: '038drku84heh8k11r8ssuobqkt%40google.com/1712476800',
      summary: 'Every Sunday (but moved to Thursday)',
      start: new Date('2024-04-11T08:00:00.000-06:00'),
      end: new Date('2024-04-11T09:00:00.000-06:00'),
    },
  ]);
});
