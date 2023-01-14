/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
function flatten(array) {
  let flattened = [];

  for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
          flattened = flattened.concat(flatten(array[i]));
      } else {
          flattened.push(array[i]);
      }
  }

  return flattened;
}

// function flatten(array){
//   if(array.length <= 0){
//     return []
//   }
//   if(Array.isArray(array[0])){
//     return flatten(...array)
//   }
//   // flatten([[2,[3]]])  =>  flatten([2,[3]])
//   return [array[0], ...flatten(array.slice(1))]

// }
console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
                  // [1, [2, [3]]]  => 2 indices
                    // [[2,[3]]]  => 1 indices
                      // [[3]]  => 1 index
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
