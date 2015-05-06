/* Nathan Samano
 * CMP 237
 * #9 max.js
 * run with Node
 */

var BEATLES = [
  {name: "Paul McCartney",  birth_year: 1942},
  {name: "John Lennon",     birth_year: 1940},
  {name: "Ringo Starr",     birth_year: 1940},
  {name: "George Harrison", birth_year: 1943}
];

var born_latest = BEATLES.reduce(function(max, cur) {
  return (cur.birth_year > max.birth_year) ? cur : max;
});

console.log(born_latest.name, "was born the latest in", born_latest.birth_year);
