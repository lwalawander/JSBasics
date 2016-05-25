//This is a general practice file for JavaScript Basics. Please follow the instructions thoughout the sheet. Do not uncomment the commented out spaces.

//Arrays

//1. Create the variable arr and assign it an array with the following list of numbers 12, 42, 36, 51, 96
var arr = [12, 42, 36, 51, 96];
console.log(arr);


//2. Create a function called findTwo that takes in the arr array and returns the value at index 2.
function findTwo(arr) {
  return arr[2];
}

console.log(findTwo([4,5,36]))

// Purpose: 
// Parameters: 
// Preconditions:
// Postconditions:
// Produces:

//3. Create a function called pusher that takes in an array and a number and positions the number at the end of the array. Return the new array.
var arr = [1, 2, 3];

function pusher(numb) {
arr.push(numb);
return arr;
}
console.log(pusher(4));

// Purpose: 
// Parameters: 
// Preconditions:
// Postconditions:
// Produces:

//4. Create a function called upFront that takes in an array and a number and positions the number in beginning of the array. Return the new array.

var upFront = function(arr, numb) {
arr.push(numb);
return arr;
}
console.log(pusher([7,2],1))

// Purpose: Pushes a number to the beginning of an array and returns the new array.
// Parameters: An array and a number.
// Preconditions: None.
// Postconditions: Numb is added to the front of the array.
// Produces: Produces the new array. [1, 7, 2]

//5. Create a function called remover that takes in an array and removes the value at the end of the array. Return the new array.

var remover = function(arr, numb) {
	arr.pop(numb);
	return arr;
}
console.log(remover([2,6,3]));

// Purpose: Removes value from end of the array and returns new array.
// Parameters: An array.
// Preconditions: None.
// Postconditions: Numb is removed from back of the array.
// Produces: Produces the new array. [2,6]

//6. Create a function called noMore that takes in an array and a number and positions the number in beginning of the array. Return the new array.

var noMore = function(arr, numb) {
	arr.unshift(numb);
	return arr;
}
console.log(noMore([1,2],3));

// Purpose: Positions value to the beginning of the array and returns new array.
// Parameters: Array and new value.
// Preconditions: None.
// Postconditions: New numb is added to beginning of the array. [3]
// Produces: Produces the new array. [3,2,1]


//7. Create a function called copyCat that takes in an array, copies, and returns the second and third index values.

var copyCat = function(arr, numb) {
	return arr.slice(1,3);
}
console.log(copyCat([4,5,6,7]));

// Purpose: Copy an array. Then, return the second and third value into a new array.
// Parameters: The array.
// Preconditions: None.
// Postconditions: Second and third values in the array. 
// Produces: Produces the new array. [5,6]

//8. Create a function called chopIt that takes in an array and two numbers, then inserts the two numbers into the array after the second index value and deletes the original third index value.

var chopIt = function(arr, numb1, numb2) {
	arr.splice(3, 4) 
	arr.shift(6);
	return newArr;
}
console.log(chopIt());

// Purpose: 
// Parameters: 
// Preconditions:
// Postconditions:
// Produces:


//9. Create a function called sumIt that takes in the array and returns the sum of each of the values in the array.
var numbers = [1, 2, 3];

function sumIt(total, num) {
    return total + num;
}
function myFunction(item) {
    document.getElementById().innerHTML = numbers.reduce(sumIt);
}
console.log(sumIt());

//* need to check

//10. Create a function called evenOdd that takes in the array and pushes into a new array "even" or "odd" for every value in the array, depending upon whether they are even or odd number values.
//Hint: Use the modulus operator

// Purpose: 
// Parameters: 
// Preconditions:
// Postconditions:
// Produces:

//11. Create a function called timesTen that takes in an array and multiplies each value by 10 and returns the new array.
//Hint: Use the map method

// Purpose: 
// Parameters: 
// Preconditions:
// Postconditions:
// Produces:

//Objects

//1. Create an object called animal. Make sure the animal has the following keys. (species, name, age, gender, favoriteFood) Also, give the animal a method of speech that returns a string that displays what the animal says.

var animal = { 
name: 'imiloa',
species: 'retriever',
age: '6',
gender: 'female',
favoriteFood: 'chicken',
say: speech()
}

function speech() {
	return say = "bark"
}

// Purpose: Make an object with 6 keys.
// Parameters: None.
// Preconditions:
// Postconditions:
// Produces:

//2. Create a function called findAge that takes in an object and returns the age key value.
var animal = { name: 'imiloa', species: 'retriever', age: '6', gender: 'female', favoriteFood: 'chicken', say: 'speech'
}

function findAge(obj) {
  return obj.age
}
console.log(findAge(animal));

// Purpose: 
// Parameters: None.
// Preconditions:
// Postconditions:
// Produces:


//3. Create a function called getKeys that takes in an object and returns all of the key names (not values!).
var animal = { name: 'imiloa', species: 'retriever', age: '6', gender: 'female', favoriteFood: 'chicken', say: 'speech'
}
function getKeys(dog) {
	return Object.keys(dog)
}
console.log(getKeys(animal));

// Purpose: 
// Parameters: None.
// Preconditions:
// Postconditions:
// Produces:


//4. Create a function called changeName that takes in an object and a name value and replaces the object name with the given name value. Return the new object.
var animal = { name: 'imiloa', species: 'retriever', age: '6', gender: 'female', favoriteFood: 'chicken', say: 'speech'
}
function changeName({dog: 'imiloa'}) {
	
}


//5. Create a function called speechMaker that takes in an object and returns the response from calling the speech method.



//6. Create a function called addKey that takes in an object and adds a new key name bedtime and assigns it a value. Return the object.



//7. Create a function called keyLoop that takes in an object and loops through each of the key values. If any of the key values are equal to "monkey", then return "There's a monkey!", otherwise return "There's no monkey here!".



//Intermediate Arrays and Objects

//1. Create an array called cars of 3 objects of 3 different cars with the key names of make, model, year.



//2. Create a function called findModels that takes in an array, loops through the array and returns an array of all of the model values of each object.
