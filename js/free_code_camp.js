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



/*


In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'

You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Output
-3 Hold
5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

 */

    var count = 0;

    function cc(card) {
        // Only change code below this line
        switch (card) {
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count++;
                break;
            case 10:
            case "J":
            case "Q":
            case "K":
            case "A":
                count--;
                break;
        }
        if (count > 0) {
            return count + " Bet";
        } else {
            return count + " Hold";
        }

        return "Change Me";
        // Only change code above this line
    }

    cc(2); cc(3); cc(7); cc('K'); cc('A');





    // Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
    //
    //     Example
    //
    // var myObj = {
    //     top: "hat",
    //     bottom: "pants"
    // };
    // myObj.hasOwnProperty("top");    // true
    // myObj.hasOwnProperty("middle"); // false
    //
    // Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".


    function checkObj(obj, checkProp) {
        // Only change code below this line
        if(obj.hasOwnProperty(checkProp)) {
            return obj[checkProp];
        } else {
            return "Not Found";
        }
        // Only change code above this line
    }


    /*

    Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

        Here's an example of a complex data structure:

    var ourMusic = [
        {
            "artist": "Daft Punk",
            "title": "Homework",
            "release_year": 1997,
            "formats": [
                "CD",
                "Cassette",
                "LP"
            ],
            "gold": true
        }
    ];

    This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested "formats" array. If you want to add more album records, you can do this by adding records to the top level array. Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk". JavaScript Object Notation or JSON is a related data interchange format used to store data.

    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [
        "CD",
        "Cassette",
        "LP"
    ],
        "gold": true
    }

    Note
    You will need to place a comma after every object in the array, unless it is the last object in the array.

        Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.
*/

    var myMusic = [
        {
            "artist": "Billy Joel",
            "title": "Piano Man",
            "release_year": 1973,
            "formats": [
                "CD",
                "8T",
                "LP"
            ],
            "gold": true
        }
        // Add a record here
    ];



})();