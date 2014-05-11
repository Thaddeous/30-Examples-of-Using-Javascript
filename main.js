var pens = [
{
	color: "black",
	clip: true,
	eraser: false,
	inkColor: "black",
	grip: true,
	size: 5,
	ledType: 2,
	diameter: 1,
	make: "bic",
	model: "g2"
},
{
	color: "pink",
	clip: false,
	eraser: true,
	inkColor: "black",
	grip: false,
	size: 2,
	ledType: 4,
	diameter: 1.5,
	make: "bic",
	model: "girly"
},
{
	color: "green",
	clip: true,
	eraser: false,
	inkColor: "blue",
	grip: true,
	size: 10,
	ledType: 5,
	diameter: 0.4,
	make: "luxor",
	model: "goblin"
},
{
	color: "red",
	clip: true,
	eraser: false,
	inkColor: "red",
	grip: true,
	size: 4,
	ledType: 1,
	diameter:0.6,
	make: "monami",
	model: "devil"
}
]

console.log("================ .map Starts ================")

// Examples of .map =================================
// map 1
var penColorMapArray = pens.map(function(co) {
	return co.color;
})
console.log("penColorMapArray = " + penColorMapArray)


// map 2
var penClipMapArray = pens.map(function(cl) {
	return cl.clip;
})
console.log("penClipMapArray = " + penClipMapArray)


// map 3
var penEraserMapArray = pens.map(function(er) {
	return er.eraser
})
console.log("penEraserMapArray = " + penEraserMapArray) 


// map 4
var penInkColorMapArray = pens.map(function(ic) {
	return ic.inkColor;
})
console.log("penInkColorMapArray = " + penInkColorMapArray)


// map 5
var penGripMapArray = pens.map(function(gp) {
	return gp.grip;
})
console.log("penGripMapArray = " + penGripMapArray)


// map 6
var penSizeMapArray = pens.map(function(sz) {
	return sz.size;
})
console.log("penSizeMapArray = " + penSizeMapArray)


// map 7
var penLedTypeMapArray = pens.map(function(lt) {
	return lt.ledType
})
console.log("penLedTypeMapArray = " + penLedTypeMapArray)


// map 8
var penDiameterMapArray = pens.map(function(dm) {
	return dm.diameter
})
console.log("penDiameterMapArray = " + penDiameterMapArray)


// map 9
var penMakeMapArray = pens.map(function(mk) {
	return mk.make
})
console.log("penMakeMapArray = " + penMakeMapArray)


// map 10
var penModelMapArray = pens.map(function(md) {
	return md.model
})
console.log("penModelMapArray = " + penModelMapArray)


console.log("================ .reduce Starts ================")


// Examples of .reduce =====================================================
// reduce 1
var penColorReduceArray = penColorMapArray.reduce(function(a, b) {
	return a + b;
})
console.log("penColorReduceArray = " + penColorReduceArray)


// reduce 2
var penClipReduceArray = penClipMapArray.reduce(function(a, b) {
	return a + b;
})
console.log("penClipReduceArray = " + penClipReduceArray)


// reduce 3
var penEraserReduceArray = penEraserMapArray.reduce(function(a, b) {
	return a + b;
})
console.log("penEraserReduceArray = " + penEraserReduceArray)


// reduce 4
var penInkColorReduceArray = penInkColorMapArray.reduce(function(a, b) {
	return a + b;
})
console.log("penInkColorReduceArray = " + penInkColorReduceArray)


// reduce 5
var penGripReduceArray = penGripMapArray.reduce(function(a, b) {
	return a + b;
})
console.log("penGripReduceArray = " + penGripReduceArray)


// reduce 6
var penSizeReduceArray = penSizeMapArray.reduce(function(a, b) {
	return a + b;
})
console.log("penSizeReduceArray = " + penSizeReduceArray)


// reduce 7
var penLedTypeReduceArray = penLedTypeMapArray.reduce(function(a, b) {
	return a + b;
})
console.log("penLedTypeReduceArray = " + penLedTypeReduceArray)


// reduce 8
var penDiameterReduceArray = penDiameterMapArray.reduce(function(a, b) {
	return a + b;
})
console.log("penDiameterReduceArray = " + penDiameterReduceArray)


// reduce 9
var penMakeReduceArray = penMakeMapArray.reduce(function(a, b) {
	return a + b;
})
console.log("penMakeReduceArray = " + penMakeReduceArray)


// reduce 10
var penModelReduceArray = penModelMapArray.reduce(function(a, b) {
	return a + b;
})
console.log("penModelReduceArray = " + penModelReduceArray)


console.log("================ .forEach Starts ================")







// work done with on average
// (function(x, y) {
// 	return x / y.length
// }

















// function average (size) {
// 	var total = size.reduce(function(a, b){
// 	return a + b
// 	})
// return total / size.length;
// }











// // var pens.reduce = function() {	
// // }

// // var pens.forEach = function() {	
// // }

// var square = function(x) {
// 	return x * x;
// };

// console.log([1,2,3,4,5].map(function(x) { return x * x }))
// console.log([1,2,3,4,5].reduce(function(x, y) { return x + y }))

// function logArrayElements(elementPosition, indexPosition, z) {
//     console.log("this is text showing position:" + ["indexPosition"] + "elementPosition");
// }
// [1,2,3,4,5].forEach(logArrayElements);





// var myArray = ["first element", "second element", "third element", "fourth element"];
// console.log(myArray[0]); // prints "first element"
// console.log(myArray[1]); // prints "second element"
// console.log(myArray[myArray.length - 1]); // prints "fourth element" in 3rd position

// var Names = ["Jimmy", "Joe", "Jim", "Bob"]
// console.log(Names);
// console.log(Names[3]);

// var Ages = [14, 56, 89, 304]
// console.log(Ages)
// console.log(Ages[2] * Ages[3])

// var Makes = ["ford", "dodge", "chevy", "chrysler", "jeep", "buick"]
// var Models = ["f50", "nitro", "nova", "crossfire", "wrangler", "lesabre"]
// console.log(Makes[5] + Models[5])

// var baby = {
// 	firstname: "tad",
// 	lastname: "heigel",
// 	age: 2,
// 	weight: 7,
// 	size: 20,
// };
// var baby2 = {
// 	firstname: "amelia",
// 	lastname: "henderson",
// 	age: 10,
// 	weight: 3,
// 	size: 25,
// }

// function futureWeight (x) {
// 	return baby.weight * 1.7;
// };
// console.log(futureWeight(baby.weight))


// function futureSize (x) {
// 	return baby.size * 1.5;
// };
// console.log(futureSize(baby.size))


// function futureName(x) {
// 	return baby2.firstname + baby.lastname;
// };
// console.log(futureName(baby.name))










// // var babies = [
// // {
// // firstname: "tad",
// // lastname: "heigel",
// // age: 2,
// // weight: 7,
// // size: 20,
// // },

// // {
// // firstname: "amelia",
// // lastname: "henderson",
// // age: 5,
// // weight: 10,
// // size: 25,
// // }]


// // var vehicles = [
// // {
// // make: "ford",
// // model: "f150",
// // year: 1999,
// // tires: 4,
// // height: 5,
// // },

// // {
// // make: "chevy",
// // model: "nova",
// // year: 1969,
// // tires: 4,
// // height: 5,
// // },

// // {
// // make: "harley",
// // model: "sportster",
// // year: 1987,
// // tires: 2,
// // height: 3,
// // }]




// // //-----------------------------------------------------------------------
// // // A Us Object with 2 properties ----------------------------------------
// // //-----------------------------------------------------------------------
// // var US = {
// // 	cities: 30000,
// // 	residents: 100000,
// // };


// // //-----------------------------------------------------------------------
// // // A specific *perCapita function being logged to the console -----------
// // //-----------------------------------------------------------------------
// // function perCapita (x, y) {
// // 	return US.cities / US.residents;
// // };
// // console.log(perCapita())


// // //-----------------------------------------------------------------------
// // // An object with two properties ----------------------------------------
// // //-----------------------------------------------------------------------
// // var classmates = {
// // 	women: 3,
// // 	men: 14, 
// // };


// // //-----------------------------------------------------------------------
// // // A specific *percentage function being logged to the console.----------
// // //-----------------------------------------------------------------------
// // function percentage (x, y) {
// // 	return classmates.women / (classmates.women + classmates.men) * 100
// // }; 
// // console.log(percentage())



// //=======================================================================
// // .forEach examples ====================================================
// // SYNTAX  arr.forEach(callback[, thisArg]) =============================
// // Parameter1 - callback (Function to execute for each element)==========
// // Parameter2 - thisArg (Value to use as this when executing callback.)==
// //=======================================================================

// // function logArrayElements(element, index, array, robert, marry) {
// //     console.log("a[" + index + "] = " + element);
// // }
// // [2, 5, 9].forEach(logArrayElements);
// // // logs:
// // // a[0] = 2
// // // a[1] = 5
// // // a[2] = 9

// // function myUniqueArray (jimmy, joe, bob) {
// // 	console.log("lotto numbers[" + bob + "] = " + jimmy);
// // }
// // [10, 3, 5, 12, 2, 7].forEach(myUniqueArray);


// // function classTime (semester1, semester2) {
// // 	console.log("Class time starts at: [" + semester1 + "] = " + semester2);
// // }
// // ["6am", "9pm"].forEach(classTime);


// // function classTime (name1, name2) {
// // 	console.log("Class time starts at: " name1 + name2);
// // }
// // ["9am", "6pm"].forEach(classTime);




// // var people = ["Bob", "Jorg", "Emily"]
// // people.forEach( function(person)) {  
// // 	$('body').prepend('<h1>' + person + '</h1>');
// // })






// // //=======================================================================
// // // reduce examples ======================================================
// // //=======================================================================
// // function average (array) {
// // 	var total = array.reduce(function(first, second){
// // 		return first + second
// // 	})

// // 	return total / array.length;
// // }

// // // map - performs an operation on each item in the array and create a new array of what was returned in the function
// // ["Washington", "Abe", "Obama"].map( function(prez){
// // 	return "Mr." + prez;	

// // //array
// // [1,2,3,4,5,6,700].slice(0,3)
// // [1,2,3,4,5,6,700].slice(-3)
// // "cool".slice(-1)



// // Slice  
// // console.log('first three presidents',["Washington", "Abe", "Obama", "Bush", "Clinton"].slice(0,3))

// // //Writing a simple Modulo function
// // function modulo (x) {
// // 	return x % 2 === 1;
// // }


// // //if statement
// // var speed = 65;

// // if (speed > 80)
// // {
// //     console.log("Slow down")
// // }
// // else
// // {
// //     console.log("Drive safe")
// // }



// // //function
// // var greeting = function(name) {
// //     console.log("Great to see you" + " " + name);
// // };

// // greeting("Emily"); // would show "Great to see you Emily" 


// // // Write your foodDemand function below.
// // // Last hint: In your reusable block of code, end each line
// // // with a semicolon (;)

// // var foodDemand = function(food) {
// //     console.log("I want to eat" + " " + food);
// // };

// // foodDemand("mac n cheese")


// // // another greeting function
// // var greeting = function(name) {
// //     console.log("what is up," + " " + name);
// // }; 

// // greeting("jeremiah")



// // // two variables with a function
// // var timesTwo = function(number) {
// //     return number * 2;
// // };

// // // Call timesTwo here!
// // var newNumber = timesTwo(9)
// // console.log(newNumber);

// // // another if statement with functions and quarters
// // var quarter = function(number) {
// //    return number / 4; 
// // }

// // if (quarter(12) % 3 === 0 ) {
// //   console.log("The statement is true");
// // } else {
// //   console.log("The statement is false");
// // }




// // // creating a rectangle box function
// // var perimeterBox = function(length, width) {
// //     return(length * 2) + (width * 2);
// // };

// // console.log(perimeterBox(12, 8))



// // // checking if numbers via a function are greater than or equal to 8

// // var sleepCheck = function(numhours) {
// //     if (numhours >= 8) {
// //         return "You're getting plenty of sleep! Maybe even too much!";
// //     }
// //     else {
// //         return "Get some more shut eye!";
// //     }
// // }

// // sleepCheck(10)

// // sleepCheck(5)

// // sleepCheck(8)


// // //for loop increasing by 5
// // for (var i = 5; i < 51; i += 5) {
// // 	console.log(i);
// // }

// // //for loop decreased by  10 to 0
// // for (var i = 100 ; i > -1; i -= 10) {
// // console.log(i);
// // }

// // //an array with a loop
// // var cities = ["Melbourne", "Boston", "Amman", "Seatle", "Helsinki", "NYC"];

// // for (var i = 0; i < cities.length; i++) {
// //     console.log("I would like to visit " + cities[i]);
// // }

// // // an array with a for loop in it
// // var names = ["Seatle", "Boston", "New York", "Sydney", "Sunday"]
// // for (var i = 0 ; i < names.length; i +=1)
// // console.log("I know someone called " + names[i])






























