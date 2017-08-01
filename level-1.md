# Level 1 - Talking to yourself

Since you're a rising developer, it's about time we get you up to speed on some trade secrets.

## Who gets paid to talk to themselves?
Develeopers do, but they do it in code.

## Why?
- When you buy a set of shelves from IKEA, it comes with insutructions.
- When you open a brand new 3D-Printer, it comes with insturctions.

The code you create doesn't come with insturctions. You, the programatic architect, have to write the insturctions. You know your coding infustruction better than anyone. So, you need to write the documentation on your code for the next developer that uses your code.

In 6 months, your instructions will then help show, even you, how to continue programming.

## Showing you the ways
There are three ways to talk to yourself in Javascript:
- `console.log()` - printing messages or data in the console
- `/* multi-line comments */` or `// single-line comments`
- `function addTwoNumbers(a, b){...}` - great function names

Logs, comments, and function names give insight and context as to what is going on.

Headsup:
`console.log()` is a way to test your code in the momement. The logs should not stay in your code for very long.

## See it for your own eyes
```js
// verify height to ride roller coaster - 3ft +
// @height (number) - height in feet
// @return (boolean)
// (found in theme park registraion modal form)
function isTallEnough(height) {
  if(height == false || height == '' || height == undefined){
   console.log('height was not a valid answer')
   return false
  }
  if(height <= 3.9999){
   console.log('Sorry, customer was ' + height + ' tall and not tall enough ro ride. :(')
   return false
  }
  // user is tall enough, yay!
  console.log('Tell the customer to enjoy their ride!')
  return true
}
```
See ^^this^^ in action:
https://codepen.io/chancesmith/pen/JyGxdz?editors=1111
Don't for get to open console (bottom left in Codepen)

Real world example where there are comments all the way down explaining what each code block does:
https://github.com/chancesmith/quick-countdown/blob/master/js/main.js

## Let's put this to practice in Cloud9
- open you `exercises/exercise-1.js`
- add a mix of 7 comments and console logs
