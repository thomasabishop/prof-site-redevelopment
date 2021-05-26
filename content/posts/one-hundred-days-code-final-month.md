---
date: 2020-01-11
title: 'One Hundred Days of Code: month three'
template: post
featured_image: ../img/post/featured/hundred-days-code-2.png
tag_color: 'gold'
intro: 'I have now completed the #100daysofcode challenge. In this post I reflect on my progress in the final months and outline...'
category:
  - Learning out loud
tags:
  - JavaScript
---

## JavaScript

### The prototypal basis of JavaScript

As mentioned previously, my day job requires me to work with Microsoft's Umbraco content managament system. As this is built on a .NET foundation, when coding I work mainly in Razor which is a simplified form of C# geared towards templating ASP.NET views.

In familiarising with C# in the last month, I encountered a more robust object-oriented language than the JS I am used to. In contrast to traditional, vanilla JavaScript (excluding the advances that come with ES6, which I am yet to learn), C# uses classes. A class is a blueprint for creating objects (i.e data structures that house variables, arrays, objects and methods). Now, this sounds very similar to constructor functions in JavaScript which I have [previously written about](). When I first learned constuctor functions I was interested in the procedural nuts and bolts but this month I wanted to take a look at them from a more conceptual level and hopefully, in my head, build a bridge between classes in C# and object prototypes in JS. Below I summarise my findings.

#### Types and tokens

When thinking about classes and objects I think it is useful to introduce a distinction that comes from academic philosophy: the difference between a _token_ and a _type_. A token is a specific instance of an entity; a type is a generalised representative of a set of tokens. So for example, my singular, concrete Volkswagen in the driveway is a token instance of the 'car' type.

Taking this back to code: when we invoke a class, we are initiating a movement from a type to a token. In JavaScript we call the product of the creation of an object from a constructor function an object instance. Here's an example based on music:

```js
/* Create constructor function: */
function Band(mainAlbum, subgenre) {
  this.mainAlbum = bandname;
  this.subgenre = subgenre;
}

/* Then to create an object instance: */

var slayer = new Band('Reign in Blood', 'thrash metal');
```

But what is going on behind the scenes when we create the object instance? To understand this we need to understand prototypes.

#### Prototypes

Prototypes are a special type of object that exist as a property within function-objects.

Whenever we create an object instance from constructor function using `new`, the object is given a property with the key `_proto_` . It's value is the `[[prototype]]` property of the function that created, i.e the class of which the object is an instance. So how would this work for the `slayer` object we created above? Well in means that the `slayer` object has `Band.prototype` as the value for the key `Slayer._proto_`

The prototype is like a hidden hook that facilitates the generation of objects from class-like constructor functions.

> Note that we use the syntax `[[prototype]]` to indicate that whilst the value exists, it is not accessible via JavaScript code, in the manner of a normal object-literal or function-object, because it is the lower-level foundation of first-order JS code. Consequently,you do not tend to see this prototype functionality and notation (outside of debugging) and it is not possible to refer to it as a `key:value` directly. This is because it is something under-the-hood - it is a process that makes the object-oriented aspects of JS possible but it is not apparent on the first-order level of everyday coding.

Crucially, every non-primitive data type in JavaScript possesses the `Object` prototype. When we create an array or an object, this happens because the data structure inherits from the `Object` prototype.

We can deduce that this is at work by applying the `getPrototypeOf()` method to an array or object as a property.

For instance, let's make an object instance (independent of any constructor function):

```js
var slayerMembers = {
  bassist: 'Tom Araya',
  guitarist: 'Kerry King',
  guitarist: 'Jeff Hanneman',
  drummer: 'Dave Lombardo',
};
```

Now, `Object.getPrototypeOf(slayerMembers)` returns `Object{}`.

Ultimately all objects in JavaScript (whether variables, arrays, methods, or functions) eventually lead back to `Object.prototype`.

#### How prototypes affect JS interpretation in the browser

1. Search on the object itself to execute the script. If this fails...
2. Search the object's prototype. If this fails...
3. Search the prototype of the linked object. If this fails...
4. Keep going until `Object.prototype` is reached

With each step we are going to a lower level of abstraction, drawing the curtain back more and more until we got the point where JavaScript effectively stops because any lower would take you into its lower-level parent language (C/C++ depending on how the specific browser executes ECMAScript).

Note the third step is basically the prototype of the component itself. So if you started at (1) with a custom array. At (3) the browser would be querying `Array.prototype` i.e the basic foundational array object.

This explains why the full-name of certain methods on the global objects, includes reference to 'prototype', for instance:

- `toFixed` → `Number.prototype.toFixed()`
- `.trim` → `String.prototype.trim()`.

## Debugging

Up to now, I have never really thought too much about debugging, unto itself. I tend to get by with the likes of `console.log` and `console.trace` when working in JS. However my primary code editor, VS Code, has an excellent debugging suite built-in, so this month I decided to familiarise with it (in the context of JS/Node). I now understand about the call stack and setting conditional breakpoints and will make greater use of debugging when working on projects.

## CSS

In the last months I have mainly been concerned with JS but I took some time to learn about the `clip-path` property in CSS3.

`clip-path` can be applied to block elements (but is mostly used with images). It creates a clipping region that specifies which parts of an element should be shown. Parts that are inside the clip-region are shown whilst those that are outside are hidden.

`clip-path` has the following value types:

- circle
  - This is a rather limited value. You can cut-out complete circles or cornered circles. The syntax corresponds to the following schema: **circle(radius at positionX position Y)**. The default value, which results in a perfect circle, is equal to `clip-path: circle(50% 50%)`.
- ellipse
  - Ellipses are similar to circles however you have a bit more refinement in the controls. In addition to the radius values you can position the shape. The schema is as follows: **ellipse(radiusX radius Y at posX posY)**. Default is equal to clip-path: `ellipse(50% 50%)`.
- polygon
  - The most versatile of the value types. You can specify as many locus points as you like to create very complex regular/irregular polygons, similarly to an SVG. Each point is an X/Y pair. For example to create a triangle:
    ```css
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    ```
- inset

  - This is the value to use if you want a rectangle. You are defining an inner rectangle and everything outside of it will be cut-out. Naturally you use four loci. For example:
    ```css
    clip-path: inset(
      20% 25% 20% 10%
    ); /* You can also add a rounded corners in the same way as the border-radius property */
    clip-path: inset(20% 25% 20% 10% round 10px);
    ```

Here's an example I made, appling `clip-path` to a `gif`:

<iframe height="265" style="width: 100%;" scrolling="no" title="Black Metal Themed Clip Path Animation " src="https://codepen.io/thomasabishop/embed/pooQmoZ?height=265&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/thomasabishop/pen/pooQmoZ'>Black Metal Themed Clip Path Animation </a> by Thomas Bishop
  (<a href='https://codepen.io/thomasabishop'>@thomasabishop</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Gatsby.js

In the last weeks of #100DaysOfCode I've spent a good bulk of time on Gatsby. In the short term, this is because I want to build a blog to write about politics (separate from my professional work). In the long term, as Gatsby is built on top of React, I see it as a good preparation for when I eventually come to learn that framework.

Working with Gatsby has again underscored how JavaScript frameworks, viewed at a high level, have a structure like that of a Russian doll. Every part of the project is a component and you create structure by nesting components within each other. Whilst this takes some getting use to it obviously creates a highly compartmentalised and scoped infrastructure.

Beyond analysing the data structures and configuration of Gatsby I have familiarised with the main essential plugins and learned how to run GraphQL queries. GraphQL is fairly straightforward to work with and knowing it will no doubt prove useful in other projects.

## Looking ahead

Now that #100Days0fCode is complete, the main thing will be not to lose momementum and continue learning and deepening my understanding of the languages and technologies I use. I hope that I am able to maintain this, outside of the rigorous structure of the hundred days challenge.

What follows is a list of my immediacte priorities:

- JavaScript
  - Rudiments of jQuery (as I have to use it with legacy projects at work)
  - AJAX
  - Event management
  - Accessing and querying APIs (REST, OAuth etc)
- Node.js
  - Using Node as a general purpose frontend development environment, independent of any specific JS framework.
- Umbraco/.NET
  - Continue to work with Umbraco and learn the underlying Razor/C# basis
- Gatsby.js
  - Complete my blog project
