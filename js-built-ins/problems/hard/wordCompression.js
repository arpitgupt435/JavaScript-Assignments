/*
  Write a function `compressWords` which takes an array of strings as input and returns a new array with consecutive duplicate elements compressed. If an element appears consecutively, it is replaced by the element followed by the count of its occurrences.

  Example:
  - Input: ["apple", "apple", "banana", "banana", "banana", "cherry", "apple", "apple"]
  - Output: ["apple2", "banana3", "cherry", "apple2"]

  - Input: ["cat", "dog", "dog", "dog", "cat"]
  - Output: ["cat", "dog3", "cat"]

  - Input: ["one", "two", "three"]
  - Output: ["one", "two", "three"]

  - Input: []
  - Output: []

  Note:
  - The function should handle empty arrays and arrays with no consecutive duplicates.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressWord`
*/


function compressWords(arr) {
  // Your code here

  let ans=[];
  let i=0;
  while(i<arr.length){
    let str=arr[i];
    let count=0;
    while(i<arr.length&&arr[i]==str){
      i++;
      count++;
    }
    if(count>1){
      str+=count;
    }
    ans.push(str);
  }
  return ans;
}
module.exports = compressWords;
