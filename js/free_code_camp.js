"use strict";

(function () {

    /*

Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

["Chocolate Bar", 15]

There should be at least 5 sub-arrays in the list.
*/

    // var myList = [["bread", 4], ["eggs", 5], ["cheese", 3], ["salsa", 1], ["arugala", 1]];




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


    //
    // function myLocalScope() {
    //
    //     // Only change code below this line
    //
    //     console.log('inside myLocalScope', myVar);
    // }
    // myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//     console.log('outside myLocalScope', myVar);



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

    // var count = 0;
    //
    // function cc(card) {
    //     // Only change code below this line
    //     switch (card) {
    //         case 2:
    //         case 3:
    //         case 4:
    //         case 5:
    //         case 6:
    //             count++;
    //             break;
    //         case 10:
    //         case "J":
    //         case "Q":
    //         case "K":
    //         case "A":
    //             count--;
    //             break;
    //     }
    //     if (count > 0) {
    //         return count + " Bet";
    //     } else {
    //         return count + " Hold";
    //     }
    //
    //     return "Change Me";
    //     // Only change code above this line
    // }
    //
    // cc(2); cc(3); cc(7); cc('K'); cc('A');





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

    //
    // function checkObj(obj, checkProp) {
    //     // Only change code below this line
    //     if(obj.hasOwnProperty(checkProp)) {
    //         return obj[checkProp];
    //     } else {
    //         return "Not Found";
    //     }
    //     // Only change code above this line
    // }


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

    // var myMusic = [
    //     {
    //         "artist": "Billy Joel",
    //         "title": "Piano Man",
    //         "release_year": 1973,
    //         "formats": [
    //             "CD",
    //             "8T",
    //             "LP"
    //         ],
    //         "gold": true
    //     }
    //     // Add a record here
    // ];


/*


The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

Here is a nested object:

var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"

Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

 */

// // Setup
//     var myStorage = {
//         "car": {
//             "inside": {
//                 "glove box": "maps",
//                 "passenger seat": "crumbs"
//             },
//             "outside": {
//                 "trunk": "jack"
//             }
//         }
//     };
//
//     var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line


/*


As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"

Retrieve the second tree from the variable myPlants using object dot and array bracket notation.

 */

// Setup
//     var myPlants = [
//         {
//             type: "flowers",
//             list: [
//                 "rose",
//                 "tulip",
//                 "dandelion"
//             ]
//         },
//         {
//             type: "trees",
//             list: [
//                 "fir",
//                 "pine",
//                 "birch"
//             ]
//         }
//     ];
//
// // Only change code below this line
//
//     var secondTree = myPlants[1].list[1]; // Change this line

/*


You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

    Your function must always return the entire object.
    If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
    If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
    If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
    If value is an empty string, delete the given prop property from the album.

Note: A copy of the collection object is used for the tests.

 */

// Setup
//     var collection = {
//         2548: {
//             albumTitle: 'Slippery When Wet',
//             artist: 'Bon Jovi',
//             tracks: ['Let It Rock', 'You Give Love a Bad Name']
//         },
//         2468: {
//             albumTitle: '1999',
//             artist: 'Prince',
//             tracks: ['1999', 'Little Red Corvette']
//         },
//         1245: {
//             artist: 'Robert Palmer',
//             tracks: []
//         },
//         5439: {
//             albumTitle: 'ABBA Gold'
//         }
//     };

// Only change code below this line
//     function updateRecords(object, id, prop, value) {
//         //     if (prop !== 'tracks' && value !== "") {
//         //         object[id][prop] = value;
//         //     } else if (prop === "tracks" && !object[id].hasOwnProperty("tracks")) {
//         //         object[id][prop] = [value];
//         //     } else if (prop === "tracks" && value !== "") {
//         //         object[id][prop].push(value);
//         //     } else if (value === "") {
//         //         delete object[id][prop];
//         //     }
//         //     return object;
//         // }
//
//         // Or this (explanation is below!)
//
//         if (value === '') delete object[id][prop];
//         else if (prop === 'tracks') {
//             object[id][prop] = object[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
//             object[id][prop].push(value);
//         } else {
//             object[id][prop] = value;
//         }
//         return object;
//     }
//
//     updateRecords(collection, 5439, 'artist', 'ABBA');

    // Code Explanation
    //
    // First checks if value is a blank string. If so, then the key (prop) is removed from the object.
    //     If that first check doesn’t pass, it next checks if prop is equal to tracks. The tracks array is initialized if it does not exist, and then value is pushed into the tracks array. (This step uses shortcircuit evaluation)
    // If both these checks fail (meaning value is not an empty string and prop is not tracks), then either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists.

/*


If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.

Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

 */

    //
    // function multiplyAll(arr) {
    //     var product = 1;
    //     // Only change code below this line
    //     for (var i = 0; i < arr.length; i++) {
    //         for (var j = 0; j < arr[i].length; j++) {
    //             product = product * arr[i][j];
    //         }
    //     }
    //     // Only change code above this line
    //     return product;
    // }
    //
    // multiplyAll([[1,2],[3,4],[5,6,7]]);

/*


Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first n elements of an array to create the product of those elements. Using a for loop, you could do this:

  function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }

However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. That means you can rewrite multiply in terms of itself and never need to use a loop.

  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

 */


    // function sum(arr, n) {
    //     // Only change code below this line
    //     if (n <= 0) {
    //         return 0;
    //     } else {
    //         return sum(arr, n - 1) + arr[n - 1];
    //     }
    //     // Only change code above this line
    // }

/*


We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return "No such contact".

If prop does not correspond to any valid properties of a contact found to match name then return "No such property".

 */


    // Setup
    var contacts = [
        {
            "firstName": "Akira",
            "lastName": "Laine",
            "number": "0543236543",
            "likes": ["Pizza", "Coding", "Brownie Points"]
        },
        {
            "firstName": "Harry",
            "lastName": "Potter",
            "number": "0994372684",
            "likes": ["Hogwarts", "Magic", "Hagrid"]
        },
        {
            "firstName": "Sherlock",
            "lastName": "Holmes",
            "number": "0487345643",
            "likes": ["Intriguing Cases", "Violin"]
        },
        {
            "firstName": "Kristian",
            "lastName": "Vos",
            "number": "unknown",
            "likes": ["JavaScript", "Gaming", "Foxes"]
        }
    ];


    function lookUpProfile(name, prop){
// Only change code below this line
        for (var x = 0; x < contacts.length; x++) {
            if (contacts[x].firstName === name) {
                if (contacts[x].hasOwnProperty(prop)) {
                    return contacts[x][prop];
                } else {
                    return "No such property";
                }
            }
        }
        return "No such contact";

// Only change code above this line
    }

    // Code Explanation ^^
    //
    // The for loop runs, starting at the first object in the contacts list.
    //     If the firstName parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes.
    //     Then, we use .hasOwnProperty() method (checks if there’s a given property and returns a boolean) with prop as an argument. If it’s true, the value of prop is returned.
    //     If the second if statement fails, No such property is returned.
    //     If the first if statement fails, the for loop continues on to the next object in the contacts list.
    //     If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned.

    // function lookUpProfile(name, prop) {
    //     for (var i = 0; i < contacts.length; i++) {
    //         if (contacts[i].firstName === name) {
    //             if (prop in contacts[i]) {
    //                 return contacts[i][prop];
    //             } else return "No such property";
    //         }
    //     }
    //     return "No such contact";
    // }
    //
    // Code Explanation
    //
    // This works as the last example but uses the in operator to look for prop instead of the hasOwnProperty() method.
    //
    //
    // lookUpProfile("Akira", "likes");



    // In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.
    //
    // As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.
    //
    //     For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:
    //
    //     function countup(n) {
    //         if (n < 1) {
    //             return [];
    //         } else {
    //             const countArray = countup(n - 1);
    //             countArray.push(n);
    //             return countArray;
    //         }
    //     }
    // console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]
    //
    // At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].
    //
    // We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.


    // Only change code below this line
    function countdown(n){
        if (n < 1) {
            return [];
        } else {
            var countArr = countdown(n - 1);
            countArr.unshift(n);
            return countArr;
        }
    }
// Only change code above this line




    // Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.
    //
    //     We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.

    function rangeOfNumbers(startNum, endNum) {
        if (endNum - startNum === 0) {
            return [startNum];
        } else {
            var numbers = rangeOfNumbers(startNum, endNum - 1);
            numbers.push(endNum);
            return numbers;
        }
    }



    // In order to help us create more flexible functions, ES6 introduces the rest parameter for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
    //
    // Check out this code:
    //
    //     function howMany(...args) {
    //         return "You have passed " + args.length + " arguments.";
    //     }
    // console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
    // console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.
    //
    // The rest parameter eliminates the need to check the args array and allows us to apply map(), filter() and reduce() on the parameters array.
    //
    //     Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

    const sum = (...args) => {
        return args.reduce((a, b) => a + b, 0);
    }





})();