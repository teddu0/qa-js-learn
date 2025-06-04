"use strict";

const interval = setInterval(() => {
  console.log(new Date());
}, 1000);

const timer = setTimeout(() => {
  clearInterval(interval);
}, 4000);
