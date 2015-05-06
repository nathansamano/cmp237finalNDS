/* Nathan Samano
 * CMP 237
 * #4 array.js
 * run with Node
 */

var BEATLES = [
  {name: "Paul McCartney",  birth_year: 1942},
  {name: "John Lennon",     birth_year: 1940},
  {name: "Ringo Starr",     birth_year: 1940},
  {name: "George Harrison", birth_year: 1943}
];

console.log(BEATLES.filter(function(beatle) {
  return beatle.birth_year == 1940;
}));
