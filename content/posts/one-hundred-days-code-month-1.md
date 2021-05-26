---
date: 2019-09-22
title: 'One Hundred Days of Code: month one'
template: post
featured_image: ../img/post/featured/hundred-days-code-1.png
intro: 'I am now thirty days into the #100daysofcode challenge. In this post I reflect on the skills I have gained...'
tag_color: 'gold'
category:
  - Learning out loud
tags:
  - JavaScript
---

## JavaScript

One of my main foci for [#100DaysOfCode](https://www.100daysofcode.com/) is improving my plain JavaScript skills. This month I have achieved the following:

### this

- I now understand the `this` keyword better and how it relates to functions and objects. I appreciate that it is a nuanced but powerful addition to the language and that this nuance stems from the fact that `this` in natural language and code, is what philosophers and linguists call an **indexical**. This implies that it's meaning changes based on context. This is rather like the act of pointing at something 👉. Each time you point you are referring to an object or property in the here and now (this is what the different instances of pointing have in common) but the object itself changes across instances.

- The [Stanford Encyclopedia of Philosophy]() defines indexicals as follows:

> An indexical is, roughly speaking, a linguistic expression whose reference can shift from context to context. For example, the indexical ‘you’ may refer to one person in one context and to another person in another context. Other paradigmatic examples of indexicals are ‘I’, ‘here’, ‘today’, ‘yesterday’, ‘he’, ‘she’, and ‘that’... [We] can say that every indexical has a single unvarying character, but may vary in content from context to context

- So it is with the JavaScript keyword. But as JS is a formal language, lexical ambiguity must be avoided and there are therefore several designated use cases:

  - `this` on its own, declared outside of function or objects refers to the global object in its context of use. For browser-based JS, this is going to be the `Window` global object, of which the `DOM` object model is a child. Another way of expressing this is to say that, if we wanted to turn the window object into a variable, all we would need to do is this:

  ```js
  const theWindow = this;
  ```

  - `this` as an object method, for example:

  ```js
  var rectangle = {
      width: 600,
      height: 400,
      area = function() { return this.width * this.height; }
  };
  ```

  Here `this` refers to the object of which `width` and `height` are properties.

  - Building on the first point, when `this` is used as a global variable, we can simplify our code a fair bit. When a variable is declared with global scope it becomes a property of the global `Window` object and this unlocks the ability to use `this`, e.g we can find out the screen size with a simple function that uses `this` instead of the formal object name `Window`:

  ```js
  let screenWidth = this.screen.width;
  console.log('The screen is' + screenWidth + 'px');
  ```

### Constructor functions

Another really beneficial use of `this` is in the context of constructor functions. This is when we use a function declaration to create an object type (similar to a template) that we will use multiple times. When we use `this` in this context it doesn't refer to the function itself but to the object that is being initiated. Here is an example where we create a `Car` object type.

```js
function Car(manufacturer, mileage, age) {
  this.manufacturer = manufacturer;
  this.mileage = mileage;
  this.age = age;
}
// We can then create individual instances of the Car object using this framework, viz:
var polo = new Car('Volkswagen', 2300, 16);

// Which is the same as a formal object declaration  >
var polo = {
  manufacturer: 'Volkswagen',
  mileage: 2300,
  age: 16,
};
```

### DOM manipulation

I have also been brushing up again on DOM manipulation. The main areas:

- Understanding how the DOM relates to the BOM and window object
- Altering existing document content
- Adding new nodes to the document
- Styling nodes via JS

Here are some of the little projects I built when working with the DOM:

<iframe height="686" style="width: 100%;" scrolling="no" title="gratuity_calculator_wip" src="https://codepen.io/thomasabishop/embed/GRKOMRV?height=686&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/thomasabishop/pen/GRKOMRV'>gratuity_calculator_wip</a> by Thomas Bishop
  (<a href='https://codepen.io/thomasabishop'>@thomasabishop</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<iframe height="506" style="width: 100%;" scrolling="no" title="js_form_handling" src="https://codepen.io/thomasabishop/embed/VwZrpEE?height=506&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/thomasabishop/pen/VwZrpEE'>js_form_handling</a> by Thomas Bishop
  (<a href='https://codepen.io/thomasabishop'>@thomasabishop</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Global objects

I have familiarised with the global objects `String`, `Number`, `Math` and `Date`, detailing their various built-in methods and properties.

## Ancillary skills: Webpack and Node.js

As I [stated](https://thomas-bishop.co.uk/blog/one-hundred-days-code/) when I began the challenge, I am also interested in learning various procedural (as opposed to conceptual) skills that are essential to modern, JS-saturated web development.

This goal was actuated this month by my applying for various development positions. I was required to quickly compile and work on existing Node.js projects that used Webpack to run build and development scripts. I have learned lots of practical Node and Webpack skills through doing this. I decided to build something lasting out of the experience so put together [Sine Qua Non](https://github.com/thomasabishop/sinequanon) which is a Webpack boilerplate that provides all the staples of modern static site development, i.e:

- Live reload dev server
- SCSS compilation
- JS/CSS minification
- Vendor prefixing
- CSS/SCSS normalisation and purging
- Lossless image compression

Now whenever I need a performant website with its engineering pre-established I just `git clone https://github.com/thomasabishop/sinequanon.git`.

## Other projects

Last but not least, I started a website theme called **Quotient**. I kind of fell into this because for my new job I need to know the [UI-Kit]() framework, so I built Quotient to get a feel for it. So far I have only completed the homepage but I hope to finish it up in the next month of 100DaysofCode.
