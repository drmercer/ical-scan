import { assertEquals } from "./deps/assert.js";
import { icalEventsTransformStream } from "./index.js";
import { Test2 } from "./testing/icals/google.js";
import { collect } from "./utils/streams.js";

Deno.test('icalEventsTransformStream', async () => {
  const lines = ReadableStream.from(Test2.split('\n'));
  const events = lines.pipeThrough(icalEventsTransformStream());

  const collected = await collect(events);

  assertEquals(collected.length, 1);
});
