/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


// your code here
function range(start, end){
  if(end <= start){
    return []
  }

  return [start, ...range(start + 1, end)]
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
