"use strict";

const date = new Date();

console.log(new Intl.DateTimeFormat("en-US").format(date));

const option1 = {
  hour: "numeric",
  minute: "numeric",
  month: "short",
  weekday: "long",
  year: "numeric",
};

console.log(new Intl.DateTimeFormat(navigator.language, option1).format(date));
