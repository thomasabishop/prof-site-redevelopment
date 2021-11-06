---
date: 2019-10-30
title: "One hundred days of code: month two"
template: post
featured_image: ../img/post/featured/hundred-days-code-2.png
tag_color: "hotpink"
intro: "I am now approaching Day 60 of #100daysofcode. In this post I reflect on my learning priorities for the last month and outline the new knowledge I have integrated into my skillset.."
category:
  - Learning out loud
tags:
  - SCSS
---

## Introduction

For the second month of #100DaysofCode I put together a study plan in advance. I wanted to focus on securing important but fairly unexciting procedures that would make my day-to-day coding (particularly at work) less frictional. For most of these topics I had some familiarity with the framework or module (with the exception of CSS Grid) but was aware of my limitations and the tendency to over rely on only the basic functionality I had mastered, instead of utilising more advanced and powerful features with the potential to simplify and accelerate my development.

The main focus has been on aspects of CSS and SCSS that facilitate the layout and structural architecture of web projects. For my personal projects and freelance clients I really don't like to use frontend frameworks like Bootstrap. Like lots of people I find them verbose and bloated. Furthermore, their technical foundations tend to deprecate rapidly. The current version of Bootstrap, for example, still relies on jQuery and none of its components utilise CSS Grid.

Many of the popular style frameworks exist because of past limitations in CSS. If its very difficult/time-consuming/impossible to create something using inherent CSS then it makes sense to use something like Bootstrap. But my reasons for relying on Bootstrap and other more minimal frameworks was primarily for layout, i.e building the base structure of my projects. With CSS Grid (used together with Flexbox), the functionality I need is now native to CSS so it made sense to learn that directly.

## Flexbox

I started the month by brushing up on Flexbox. I use Flexbox a great deal and consider myself proficient in it but I wanted to refresh my knowledge because I already knew that there were selectors within Flexbox ( for example) that have joint-application with CSS Grid. I reasoned I should be 100% familiar with these in the context of Flexbox before learning about their use in Grid.

## CSS Grid

I've known for some time that my lack of proficiency with Grid is a serious omission in my skillset and that if I want to call myself a 'frontend developer' without embarrassment I needed to get to grips with this CSS3 submodule.

I'm not going to exhaustively list everything I have learned. Instead I will list the things I can now do and how they will be useful in future work:

- Build design grids (6x6, 8x8, 12x12) which can either provide the base-scaffold for entire websites or be used to build grid-based sub-components
- Combine the above with SCSS mathematical operators to create responsive grids across viewports.
- Align content in relation to grid tracks and lines in a way that allows for much greater precision in two dimensions than Flexbox which is effectively limited to a single dimension that you can pivot into being either horizontal or vertically reactive but not both.
- Create implicit layout structures using `grid-auto-rows` and `grid-auto-columns` that iterate consistently in response to user-dependent events. For instance, a 'load more' button or faceted-navigation that outputs items in accordance with grid parameters.
- Set responsive behaviours through `minmax`

## SCSS

This month I really drilled down into more advanced SCSS capabilities. Having assimilated this information abstractedly the challenge now is to actually use these features in my quotidian work. To begin with this can feel a bit contrived and excessive as if you are using the features simply for their own sake. But I think that lots of practice, even in contexts where more straightforward code would suffice, will broaden my repertoire and make me more discerning about using advanced SCSS properties in real projects. Below I have summarised the most interesting features that I have added to my SCSS workflow.

### Establishing SCSS compilation from scratch

Where I have used SCSS in the past it is usually within a framework that includes Sass as default or I have managed the implementation set-up through NPM and Webpack. However I figured I should know how to get Sass working in the most primitive use case. So I researched and made notes on how to install Ruby and SCSS via the command line and then set up watched directories and auto-compilation.

### Mixins instead of extensions!

One of my primary motivations when beginning #100DaysOfCode was to stop repeating bad habits when I know that a better implementation exists. SCSS extensions are a case in point. This feature allows you to import one CSS rule into another like so:

```scss
%borders {
  border-width: 2px;
  border-color: yellow;
  border-style: dashed;
}

div.with-border {
  @extend %borders;
}

// This then compiles to the following CSS:
div.with-border {
  border-width: 2px;
  border-color: yellow;
  border-style: dashed;
}
```

But this is problematic because it does not always lead to concise CSS and in some instances introduces redundancy through duplication - in other words the very thing that SCSS is supposed to help avoid.

But perhaps the real reason why I tended to use `@extend` over `@include` with mixins is because I looked at mixins early on in my development career, got confused and therefore a little bit intimidated and simply moved on. I now realise mixins are vastly more useful and powerful SCSS tool than extensions.

This is because you can use them statically simply to repeat code in the manner of extensions but you can also use them dynamically so as to insert values that you 'mix-in' (get it?) with the placeholders you create at the declaration stage. You can even set default values that you can later override. This has proved extremely useful when I am building reusable frontend components because it means I can make minor changes to the appearance of a component without having to write dedicated rules for each instance.

For example I recently built a button library (which you can see below) and used the following mixin to manage the border styles:

```scss
// The mixin declaration
@mixin button-borders($width, $radius, $style) {
  border-width: $width;
  border-style: $style;
  border-radius: $radius;
}

// A use case
button.set-1 {
  @include button-borders(2px, 0px, solid);
}

// A use case with different values
button.set-2 {
  @include button-borders(2px, 25% 10%, solid);
}
```

### String interpolation

'String interpolation' just means the ability to inject a text string stored in a variable as a value in a CSS declaration.

You might wonder why you would want to inject strings. Surely most variables are either determinate numerical values (`20px`, `2rem` etc) or single terms or short hyphen-separated values (`red` , `ease-in`, `absolute` etc)? Well, if you think about it, there are parts of CSS that are irritatingly verbose; for example, media queries. I probably use media queries at least once every day, yet I still have to Google in order to remember the exact phrasing of the following highly unmemorable string:

> @media only screen and (max-width: 767px);

Maybe I'm just slow but with string interpolation we can store that alphabet soup in a named variable and then interpolate it when it's needed. Here's a demo:

```scss
// Create string variables
$mobile: "only screen and (max-width : 479px )";
$tablet: "only screen and (max-width : 767px)";

// Reference the string using interpolation
.item {
  @media #{$tablet} {
    padding: 2rem;
  }
}
```

You'll notice that we can't just insert the variable by itself as we would normally. This is because we need to interpolate it, which means _insert something of a different nature into something else_. For reasons most likely to do with the lower-level Ruby code that instantiates SCSS, we have to use special characters for this to work: `#{$variable}` .

### Lighten/darken

I couldn't believe it when I discovered this. This little SCSS trick enables you to change the saturation of the base colour on the fly. Here are two examples:

```scss
// Lighten a hex colour
h2 {
  color: lighten(#ffa1a3, 20%);
}

// Darken a colour stored as a variable
h3 {
  color: darken($green, 10%);
}
```

There are a bunch of similar colour modifiers like `invert` and `grayscale` but I tend to use lighten/darken the most.

### Other useful SCSS functions

I learned a lot more than the above. For instance how to use conditional statements with your Sass but I have yet to use them extensively in real code. There are certain features of SCSS such as lists and maps which are basically single-dimension arrays and objects, respectively along with loops. I have noted their syntax and am glad they are options but I don't really see myself using them that much. Perhaps I am unambitious but the idea of storing values as an object and then looping over them just seems like overkill to me, especially when our compiled language (and much of SCSS) is basically declarative, i.e you say exactly what you need and where you need it without worrying about user-events and control flow.

## CSS transitions

This is was something I planned to cover in more depth but unfortunately I didn't have time within this month. However I know what I don't know which is half the battle I guess. In particular I know that the `transition` property can be applied in a set class of instances and thus that if you have applied a transition and the functionality doesn't manifest it is probably because you are using it in the wrong context. However, I have yet to learn all the use cases. My current use of transitions is limited to the following cases:

- Interactive states that are managed through pseudo-classes, e.g `:hover` , `:focus`, `:active`
- Changes that are managed via explicit numerical data values, for example a dropdown `<div>` that transitions from having a height of `0px` to `150px`

The first case is really useful for styling buttons or other entities that change colour or proportion in response to user events. The second case is useful for making JavaScript-controlled events appear seamless and aesthetically pleasing.

I have learned that although transitions are different from CSS animations, you can apply some of the animation data values to transitions. For instance values like `linear` , `ease` , `ease-out` that I have previously used with the `animation-timing-function` property can be transposed to transitions. Previously I thought you could just control the timing of the event. For example the following snippet will ensure that when the dropdown manifests it will take 0.2 seconds but will slow towards the end of the event:

```scss
.drop-down-nav--inactive {
  height: 0px;
  transition: 0.2s ease-out;
}

.drop-down-nav--active {
  height: 150px;
}
```

Finally I have also discovered that sometimes you can end up with a transition unintentionally. This is the converse of transitions not working: they work but in unintended places. For example, I like to add a dark mode to my CodePen snippets but I've noticed that when you toggle between 'light' and 'dark' there is slight delay and stylisation to the change.

I actually quite like this because it looks nice but it highlights an important point: if you do not name your transition and thereby link it to a specific value, then any quantifiable change in value from the 'before' state to the 'after' state will involve the transition. This result can also be formally -rather than indirectly- achieved by prepending your transition declaration with `all`.

When we name our transitions we use the CSS property for the appellation. These can be chained through comma-separation. Here is a an example:

```scss
.button {
  border: 3px solid blue;
  background: #e4e4e4;
  transition: border 0.2s ease, background 0.2s linear;
}

.button--clicked {
  border: 3px dashed blue;
  background: blue;
}
```

## Goals for the third month

- I would like to complete my study of CSS transitions as I wasn't able to cover them in full this month.
- I will also seek to focus closely on DOM events in JavaScript, specifically:
  - The best way to add and remove CSS classes in response to user-interaction
  - Using HTML5 form elements as event triggers (radio buttons, select, multi-select)
  - The most concise way of handling the data generated by multiple concurrent event processes (e.g `for` loops tied to user input)
  - Event listeners
- The company I recently joined builds websites using the Umbraco CMS with front end programming handled by [ASP.NET](http://asp.NET) and Razor which is a templating language that combines HTML5 with C# to query the database. I have no experience at all with .NET development but I have a course this month and will also be teaching myself to fill in any gaps in the course. I'm looking forward to learning another of doing things.

## Stray remarks

### Firefox Developer Edition

When working with CSS Grid I found that I really wanted to be able 'see' the grid tracks I had created as I coded. Generally this isn't an option. You set the grid parameters and then have to visualise them or use really good naming conventions.

Google Chrome shows the grid on hover states from within the Developer Tools inspector but you cannot overlay it constantly whilst you work. So I did a bit of research and ended up installing the special developer edition of Firefox. I have to say I am very happy with it so far and I have begun using it exclusively for development. It has many innovative advantages over Chrome because it is built specifically for developers and modern web development. So far I have been mainly using its CSS Grid features: it cleverly identifies all the grid instances on the current page and sets toggles so that you can choose which components you want to overlay the grid on. You also have the option to show grid line numbers and/or custom line names and areas.

### _PT Sans_

In developing my 'Components' collection in CodePen I have been using the following font rule:

```css
font-family: -apple-system, BlinkMacSystemFont, "Roboto", Helvetica Neue, Helvetica,
  Arial, sans-serif;
```

This is intended to normalise the typography across browsers; reduce network load (because they are all native fonts, available without recourse to webfont libraries like Google Fonts and Adobe Fonts); promote accessibility and legibility; and engender what I call an "anti-style", i.e an aesthetic approach that radically minimalises the inessential and resists 'style for style's sake'.

This said, my eye has recently been caught by 'PT Sans' which is a webfont available for free from Google and on subscription from Adobe Fonts. It has the plain uniformity one would expect from Helvetica but has some subtle serif tendencies that I really like, most likely owing to the fact that it was created by a Russian foundary for Cyrillic letter forms. (This means it couples well with the jaggedy monofonts I like such as Monoid and Cascadia Code. ) Also it looks really nice in all-caps where there is more than a hint of Roman/Renaissance lettering in the descenders and feet (similar in this regard to Optima). I'm in two minds whether to role it out on my site and across my components going forward.

## Projects

### Buttons (components series)

<iframe height="332" style="width: 100%;" scrolling="no" title="Buttons · Components " src="https://codepen.io/thomasabishop/embed/JjjjoaZ?height=332&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/thomasabishop/pen/JjjjoaZ'>Buttons · Components </a> by Thomas Bishop
  (<a href='https://codepen.io/thomasabishop'>@thomasabishop</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Accordion (WIP) (components series)

<iframe height="417" style="width: 100%;" scrolling="no" title="Accordion (Single-state) · Components " src="https://codepen.io/thomasabishop/embed/a212e442ac416dc79e38cde9af36a3de?height=417&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/thomasabishop/pen/a212e442ac416dc79e38cde9af36a3de'>Accordion (Single-state) · Components </a> by Thomas Bishop
  (<a href='https://codepen.io/thomasabishop'>@thomasabishop</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Eclipse animation idea

<iframe height="321" style="width: 100%;" scrolling="no" title="Ouroboros Eclipse (Logo animation) " src="https://codepen.io/thomasabishop/embed/ExxagmZ?height=321&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/thomasabishop/pen/ExxagmZ'>Ouroboros Eclipse (Logo animation) </a> by Thomas Bishop
  (<a href='https://codepen.io/thomasabishop'>@thomasabishop</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
