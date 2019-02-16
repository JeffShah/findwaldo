function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  var predict = 0;

  return function() {
    /* your code here */
    for (var i = predict; i < list.length; i++) {
      predict += 1;
      return 'list item: ' + list[i];
    }
}

var rollLoadedDie = makeLoadedDie(); // () means could be any number

console.log(rollLoadedDie());  // 1
console.log(rollLoadedDie());  // 2
console.log(rollLoadedDie());  // 3
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 6