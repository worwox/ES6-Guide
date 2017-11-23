# Learning ES6
This repository contains all exercises of learning ES6. 

## Setting up babel
Use [this guide](http://babeljs.io/docs/setup/#installation) to setup babel. **Remember** to change `lib` with `output` in the line `"build": "babel src -d lib"`<div class=""></div>

## 'var' vs 'const' vs 'let'
### var
`var` has **function scope**. If declared outside function, has **global** scope.  
### const and let
`const` and `let` both have **block scope**. Difference is, _const_ **cannot be reassigned** while _let_ **can be**. `const` **is not immutable**, it's value can be updated. 
