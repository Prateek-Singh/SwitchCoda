//object to hold weekDays
var weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
]

function Dow() {}

Dow.dayOfWeek = function (day) {
  let dow = "Error"
  dow = weekDays[day] || dow
  return dow
}

module.exports = {
  Dow
}