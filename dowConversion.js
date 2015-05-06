/* Nathan Samano
 * CMP237
 * #7 dowConversion.js
 * run with Node
 */

var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"];

function dayConvert(arg) {
  for (var i = 0; i < days.length; i++) {
    // arg is day of the week, print index value
    if (arg === days[i]) {
      return days.indexOf(arg);
    }
    // arg is an index value, print day
    else if (arg === i) {
      return days[i];
    }
  }
  return "invalid argument";
}

console.log(dayConvert(5));
// "Friday"

console.log(dayConvert("Tuesday"));
// 2
