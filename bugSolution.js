function myFunction() {
  let x = 10;
  if (true) {
    x = 20; // Accessing the outer x variable
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
} 