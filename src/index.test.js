import { helloWorld } from "./index.js";
import { assertEquals } from "https://deno.land/std@0.220.0/assert/mod.ts";

Deno.test('helloWorld', () => {
  assertEquals(helloWorld(), 'Hello World!');
});
