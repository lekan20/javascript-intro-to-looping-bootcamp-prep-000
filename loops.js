function forLoop(array){ // Create forLoop function that add a string to a returned string
  for (var i = 0; i < 25; i++) { // initiate the for loop
  array.push(`I am ${i} strange loop.`) //return a string that's updated by the forloop function and pull the value from the array. And add to the array
    }
    return array
}
function whileLoop(n){  //Create whileLoop function to countdown from number to zero
  while (n > 0){ // Setting condition for to make while loop run and telling it where to stop
    console.log(--n) // telling while loop what it'll do to count down
  }
  return 'done'  // returns the string done when it's finished
}
function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
function doWhileLoop(array){  // function has an array as the argument
  do {
    array.shift()  // remove an element from the array
  } while (array.length > 0 && maybeTrue() === false) //removes string from array until array is empty or maybeTrue() is false
  return array // returns the final array
}
