"use strict";

const messages = ["Hello", "World"];
const timer = setTimeout(
  (msg1, msg2) => {
    console.log(msg1, msg2);
  },
  3000,
  ...messages
);
// clearTimeout(timer);
