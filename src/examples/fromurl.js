import { cachedPrompt } from "./exampleutils.js";

const url = cachedPrompt('examples.fromurl.icalurl', 'Enter an ical URL:');

const res = await fetch(url);

// TODO parse response and display next 24 hours of events

// print all response headers
console.log(`Status: ${res.status}`);
res.headers.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
