# JavaScript Block Scope Bug

This repository demonstrates a common JavaScript bug related to block scope and the `let` keyword.  The code in `bug.js` showcases how declaring a variable with `let` inside a block limits its scope to that block only. This can lead to unexpected behavior if the programmer isn't aware of this scoping rule.

The solution in `bugSolution.js` provides a possible fix depending on the intended behavior.  Understanding block scope is crucial for avoiding these types of errors in JavaScript. 

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the code.
3. Observe the output.  The two `console.log()` statements will produce different values for `x`. 
4. Open `bugSolution.js` for one possible solution.  You may need to alter the solution depending on the specific needs of your program.