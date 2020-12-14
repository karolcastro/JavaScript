const moment = require("moment");

// const today = moment();
// console.log(today);

// const newYear = moment('2021-01-01');

// console.log(newYear.diff(today, 'hour'));
// console.log(newYear.diff(today, 'minut'));
// console.log(newYear.isBefore(today));
// console.log(newYear.isAfter(today));
// console.log(newYear.diff(today));


// let d;

// d = new Date();
// d = new Date(2020, 10, 2, 11, 30, 27, 0)
// console.log(d.toString());
// console.log(d.getFullYear());
// console.log(d.getDay());
// console.log(d.getMonth());

// d.setMinutes(10);
// d.setDate(5);
// d.setUTCHours(4)
// console.log(d.toString());

// console.log(d.toISOString());
// console.log(d.toLocaleString('en-AU', {
//     timeZone: 'America/Los_Angeles'
// }));
// console.log(d.toLocaleString('en-US'));
// console.log(JSON.stringify({
//     myDate: d
// }));

///_____getter and setter

const m = moment();

console.log(m.toString());

// getting units
console.log(m.minutes());
console.log(m.hours());
console.log(m.week());
console.log(m.get('quarter'))

// setting units
m.minutes(44)
m.hours(14);
m.week(14);
m.set('day', 8)


console.log(m.toString());

const differentMoment = moment('2019-12-14');
console.log(moment.min(m, differentMoment).toString())