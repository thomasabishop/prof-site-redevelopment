---
date: 2019-01-20
title: "The logic of Liquid: an introduction to the templating language"
template: post
featured_image: ../img/post/featured/logic-of-liquid.png
intro: "Liquid is a simple markup language, used to build templates from static site files. The static site generator Jekyll uses Liquid to simplify the creation of dynamic-style features without a CMS or server preprocessing language like PHP. It was originally developed..."
tag_color: "dodgerblue"
category:
  - Tutorials
tags:
  - Liquid
---

## Introduction

Liquid is a simple markup language, used to build templates from static site files. The static site generator [Jekyll](https://jekyllrb.com/) uses Liquid to simplify the creation of dynamic-style features without a CMS or server preprocessing language like PHP. It was originally developed by Shopify to create their e-commerce CMS and is also used by the preeminent CRM tool Salesforce.

This short guide is written from the point of Jekyll development but most of the techniques are easily transferable to other Liquid contexts.

## Variables

Within Shopify’s Liquid documentation, they call variables **objects**. A **variable is a container for storing data**.

In Liquid the data stored can include strings, numbers and Booleans. In Jekyll, we declare our variables within the front matter region at the top of our page’s document. Once you have declared your variable you are then free to call it within the page or elsewhere within your file system.

```text
---
layout: post
title: The logic of Liquid: an introduction to the templating language
category: tutorial
tag: liquid
reading-time: 20
---
```

Shopify has its own ecosystem of variables related to e-commerce entities such as products, product collections, prices etc. Most of these are not much use within Jekyll since they pertain to the specifics of Shopify. In Jekyll you are mostly going to be working a limited series of components: primarily pages and posts.

The variable syntax is as follows: `{{ variable }}` The whitespace either side of the string matters. If you don't include it, you will end up with a syntax error!

In the following example we declare a variable for the H1 HTML element and then call it within the markup:

```html
<h1>{{ page.h1 | upcase }}</h1>
```

Note that we cannot just insert `{{ h1 }}` it is necessary to prepend the variable with the document type context: the page.

### Variable filters

You can change the output of a given variable by running it through a **filter**. You append the filter with a pipe. The following changes the output of our H1 to uppercase:

```html
<h1>{{ page.h1 | upcase }}</h1>
```

Another example of a filter: `{{ page.date | date: “%-d %b %Y” }}` sets a particular format for a date. And also `{{ page.h1 | truncatewords:3 }}` which is useful when creating snippets of content like in a blog preview.

You can also apply mulitiple filters to the same variable:

```html
<h1>{{ page.h1 | upcase | truncatewords:5 }}</h1>
```

## Logical operations using tags

In addition to variables, the other main components in Liquid are **tags**. Tags, combined with variables, give the language its full templating power. Tags are applied via the following syntax:

```html
{% tag_goes_here %}
```

Within Liquid, as devised for Shopify, there are four tag types which allow you to integrate fairly complex logic. In the remainder of this tutorial we will focus on the tags which prove most useful when building sites with Jekyll and which have the widest applicability. You can consult the [Liquid documentation](https://help.shopify.com/en/themes/liquid/tags) if you wish to dig deeper or if you are seeking a functionality not covered here.

### Tag types

- **control flow:** create conditions that decide whether blocks of code get executed. Includes the operators `if, unless, else/elseif, case/when, and/or`

- **iteration:** repeatedly run blocks of code as loops

- **theme:** primarily used to output code snippets or partials within the context of an integrated piece of code or document

- **variable:** create variables on the hoof with operators like `assign` and `capture`. Within Jekyll, we tend to create variables within the front matter not in the course of our HTML so we will not be going into this class of tag here

### Control flow: if statements

You are able to create logical functions that test for conditions with the schemas:

- _If P obtains execute Q_
- _If P obtains execute Q, otherwise R_

In order to implement conditional functions you obviously need to make use of a Boolean (i.e an assignment of truth or falsity). Here’s an example:

```html
---
h1: An introduction to Liquid
show_heading: true
---

{% if page.show_heading %}
<h1>{{ page.h1 }}</h1>
{% endif %}`
```

So here we have assigned true to the variable `show_heading`. This means the heading will output the variable contained in `h1`. If we switched the Boolean to `false` it would not.

That was a basic example of conditional control flow however you can also build up more complex logical chains which check for multiple truth conditions. Here is an example scenario:

```html
---
h1: An introduction to Liquid
show_heading: true
---

{% if page.show_heading %}
<h1>{{ page.h1 }}</h1>
{% elsif page.heading contains "Liquid" %}
<h1>{{ page.h1 }}</h1>
{% else %}
<h1></h1>
{% endif %}`
```

Some points on the syntax of conditional logical statements:

- The conditional sequence (regardless of length) must start with `if` and end with `endif`
- `contains` is a keyword and, as such, has a special assignation of meaning within Liquid. It hasn't been used arbitrarily
- When including additional `if` outcomes, they must be triggered by `elseif`.
- The first additional `if` statement, after `if` itself can follow `elseif`. After this, all subsequent `if` statements must be preceded by `else`.

### Iteration: loops with arrays

You are also able to execute loop functions within Liquid, facilitated by iteration tags.

In order to create a loop, you need to first establish an **array** which will hold the variables we will loop over. The array is stored in the front matter.

Let’s say we want to make a list out of a series of terms which we are going to define. The most appropriate HTML element for this is a descriptive list (`<dl></dl>`). So we are going to create an array within the front matter of the terms we want to define and then create an iterative loop in our document that pulls them in as variables:

```html
---
h1: An introduction to Liquid
show_heading:true
terms:
    - Term 1
    - Term 2
    - Term 3
---

{% for term in page.terms %}
<dl>
  <dt>{{ term }}</dt>
  <dd>Definition of term</dd>
</dl>
{% endfor %}`
```

Because we have created a loop, we do not need to add additional markup for _Term 2_ and _Term 3_, Liquid simply replicates the markup for the first term for each subsequent term, until it has worked its way through the whole array. I point this out because it took me a while to grasp.

To clarify the syntax:

- We always start the loop with `for` and end with `endfor`. `for` is the tag that signals the loop
- The Liquid logic must wrap the HTML parent element and as proximately as possible
- We define a keyword with the `for` statement - in our example it is `term`

A common use of loops within Jekyll is for blog pages, where you want to output a summary of your various blogs. We are going to create a loop that pulls in a blog’s title, summary and date of publication.

To do this we do not need to create an array. Instead we will just use a series of string variables. Importantly, as we are pulling content from multiple blog posts, the key information will be contained in files other than our blog summary template. We are working with the assumption that each blog has the following variables in its front matter, saved within a `_posts` directory in your site's file structure:

```html
---
title: A blog post
summary: This is a summary of a blog post
date: 2019-01-16
---

<h2 class="post-title">{{ post.title }}</h2>
<span class="date"> {{ post.date | date: "%-d %b %Y" }} </span>
<p class="post-summary">{{ post.summary }}</p>
```

### A very helpful parameter

By default, an iterative loop will execute until all of its values have been output. However you may not want all of the values to be outputted.

A handy way to get around this is to insert `limit: [number of pulls]`. When you do this and specify a numerical value (say, 3) only three of the values stored in the array will be pulled.

Within Liquid this is known as a ‘parameter’ however in terms of function, it acts just like a filter only you don’t use a pipe to signal its usage. There are several other parameters you can add which control behaviour at different intervals of the loop, see [Liquid iteration tags](https://help.shopify.com/en/themes/liquid/tags/iteration-tags) for further detail.

### Apply conditional logic to iterative loops

You can use control flow logic within the context of loops. The most useful application for my purposes has been `{{% else %}}` which covers you and allows you to specify a certain output (e.g ‘null’) if a value from an array cannot be found.

## Theme tags

Liquid provides a bunch of pre-defined tags specific to Shopify’s e-commerce focus. These pertain to the creation of code snippets that can be reused throughout the platform.

Jekyll has its own variation on this that will be familiar to anyone who has ever built a site using Jekyll. I will briefly summarise how theming works in Jekyll since it is something that is made possible by Liquid.

In Jekyll, we store reusable HTML or Markdown (‘partials’) within the `_includes` directory. This site is built using Jekyll.

We can call any file within the `_includes` directory by using the special Jekyll tag `{{% include [filename].html %}}`.

When called via a theme tag these partials combine to build the structure of my site’s pages. This functionality effectively recreates in static form the PHP hooks that exist within sites built with dynamic server-side content rendering (Drupal, WordPress, Joomla, and so on).

There are two ways that we make use of partials in Jekyll, viz.

- layouts
- inline

### Layout theme tags

Layouts are templates for a specific page type. Most Jekyll sites will have at least two layouts stored within the _layouts_ directory: a **default** layout for static (non-chronological) pages and a **post** layout for blog posts (chronological content).

For example, here is my `default.html` template, contained within `_layouts`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    {% include head.html %}
  </head>
  <body>
    {% include nav.html %} {% include hero-header.html %}
    <main>{{ content }}</main>
    <footer>{% include footer.html %}</footer>
  </body>
</html>
```

This template comprises a series of theme tags (such as `{{% include header.html %}}`, which pulls content from the `_includes` directory into the structural HTML tags which is then compiled by Jekyll when we apply `jekyll build`. Note that they are syntactically indistinguishable from loop and control flow tags, underscoring the point that ‘theme tags’ are more of a notional distinction in Jekyll when compared with Shopify.

### Inline theme tags

You are not limited to using theme tags within layouts however. You can also insert them within specific pages that are instances of a given layout. For example, within my home page which instantiates the `default.html` layout and which is contained within the `{{% content %}}` variable in the above code, I could pull in another partial such as `photo-gallery.html`.
