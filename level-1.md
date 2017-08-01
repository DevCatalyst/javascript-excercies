# Level 1 - Talking to yourself

Since you're a rising developer, it's about time we get you up to speed on some trade secrets.

## Who gets paid to talk to themselves?
Developers do, but they do it in code.

## Why?
- When you buy a set of shelves from IKEA, it comes with instructions.
- When you open a brand new 3D-Printer, it comes with instructions.

The code you create doesn't come with instructions. You, the programmatic architect, have to write the instructions. You know your coding infrastructure better than anyone. So, you need to write the documentation on your code for the next developer that uses your code.

In 6 months, your instructions will then help show, even you, how to continue programming.

## Showing you the ways
There are three ways to talk to yourself in Javascript:
- `console.log()` - printing messages or data in the console
- `/* multi-line comments */` or `// single-line comments`
- `function addTwoNumbers(a, b){...}` - great function names

Logs, comments, and function names give insight and context as to what is going on.

Heads-up:
`console.log()` is a way to test your code in the movement. The logs should not stay in your code for very long.

## See it for your own eyes
```js
// verify height to ride roller coaster - if > 3ft
// @param {integer} height - Height in feet.
// @return {boolean}
// (found in theme park registration modal form)
function isTallEnough(height) {
  if(height == false || height == '' || height == undefined){
   console.log('height was not a valid answer');
   return false;
  }
  if(height <= 3.9999){
   console.log('Sorry, customer was ' + height + ' tall and not tall enough to ride. :(');
   return false;
  }
  // user is tall enough, yay!
  console.log('Tell the customer to enjoy their ride!');
  return true;
}
```
[See ^^this^^ in action in Codepen](https://codepen.io/chancesmith/pen/JyGxdz?editors=1111)
Don't forget to open console, bottom left button in Codepen.

Real world example where there are comments all the way down explaining what each code block does:
https://github.com/chancesmith/quick-countdown/blob/master/js/main.js

Bonus:
Here is a [guide for superb function comments](http://usejsdoc.org/about-getting-started.html).

## Exercise #1
Let's put this to practice in Cloud9
- open you `exercises/level-1/exercise-1.js`
- add a mix of 7 comments and console logs
- test your code at `exercises/level-1/exercise-1.html`
- when done, push your changes to Github to be graded

## Exercise #2
- open you `exercises/level-1/exercise-2.js`
- add a mix of 7 comments and console logs
- test your code at `exercises/level-1/exercise-2.html`
- when done, push your changes to Github to be graded

## Next up
Start [Level 2](level-2.md) - Meet my friend DOM
