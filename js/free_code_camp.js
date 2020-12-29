"use strict";

(function () {

    /*

Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15]

There should be at least 5 sub-arrays in the list.
*/

    var myList = [["bread", 4], ["eggs", 5], ["cheese", 3], ["salsa", 1], ["arugala", 1]];




    /*


Variables which are declared within a function, as well as the function parameters have local scope. That means, they are only visible within that function.

Here is a function myTest with a local variable called loc.

function myTest() {
  var loc = "foo";
  console.log(loc);
}
myTest(); // logs "foo"
console.log(loc); // loc is not defined

loc is not defined outside of the function.

The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still have 'ReferenceError: myVar is not defined', but this will not cause the tests to fail.

     */



    function myLocalScope() {

        // Only change code below this line

        console.log('inside myLocalScope', myVar);
    }
    myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
    console.log('outside myLocalScope', myVar);













})();