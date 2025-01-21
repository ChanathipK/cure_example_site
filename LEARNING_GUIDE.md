# Guide for Learning Front-end Techs (version: 0.1)

Chanathip Kulsirilak for CURE IT & Development

---

## Warning

1. This guide is very opinionated, the very way of learning is absolutely up to you.

2. This guide is aimed to help you find the things to learn easier. It doesn't give you much of the information (or any info at all).

3. New warning might be added in the next version of the guide.

## HTML/CSS

The concept of HTML is very to understand, so if you want to step further, please learn about how browsers read and parse HTML.

CSS, in the other hand, is very broad in concepts, and has a lot of properties you need to learn.

1. [HTML Tutorial - W3Schools](https://www.w3schools.com/html/) - A very friendly introduction to HTML

2. [HTML - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML) - You will probably need to know if a tag is deprecated, find it on this site.

3. [HTML Form - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) - `<form>` element plays a huge role in HTML

4. [HTML Inputs - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) - `<input>` element are used frequenly throughout a page, be sure to get to know the basic types of inputs like text, password, email, checkbox, readio, file. You will also get to learn how to link a `<label>` element to an input: [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), [Styling an input type="file" button](https://stackoverflow.com/questions/572768/styling-an-input-type-file-button)

5. [How To Add CSS - W3Schools](https://www.w3schools.com/css/css_howto.asp)

6. [Shorthand properties - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) - CSS has several types of properties you can use to modify an element, and often there is also a shorthand for a group. Be sure to understand its concept, but you don't need to remember everything here.

6. [The box model - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) - Box Model is a crucial concept to get a grasp of understanding how an element is laid out in a page.

7. [Tailwind CSS Preflight - Tailwind CSS](https://tailwindcss.com/docs/preflight) - See how Tailwind CSS normalize the default styles, they also use `box-sizing: border-box;`

8. [CSS Flexbox Layout Guide - CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Optional

- [CSS animation - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

- [Web browsers Series' Articles - Arika O, dev.to](https://dev.to/arikaturika/series/17842)

## JavaScript

JavaScript is the thing that will get you to the feel the power of a real programmer. You will be able to create something of your own using just a set of predefined tools, you will solve problems, and you will have fun. There's one catch, it's difficult.

JavaScript was first introduced as a language to make web pages interative, but it has been years since then. Although some people still use JS for DOM Manipulation, you don't have to, but it will have you understand how an element is manipulated by the script, so feel free to learn it if you want.

### Helpful Resource

- [JavaScript.info](https://javascript.info/) - A good website for finding a refernece and learning JavaScript

- [Node.js](https://nodejs.org/en) - Node.js is a JavaScript Runtime Environment. Runtime Environment isn't just a place where a language can be run on, it also provides tools that you can use to build something on top of it. You typically don't build something from scratch, but it's totally possible. You will also need just the basics of what is `package.json` file.

- [JavaScript Callbacks - W3Schools](https://www.w3schools.com/js/js_callback.) - You will need to understand callbacks in order to understand how JS was mostly coded (in some group of developers), and to learn about promises.

- [JavaScript Modules - JavaScript.info](https://javascript.info/modules)

### Others & Optional

There are much more to learn, but you don't have to understand every aspect or syntax of the language, you can use the libraries or frameworks as soon as you feel comfortable.

- [The modern mode, "use strict" - JavaScript.info](https://javascript.info/strict-mode)

- [Error handling, "try...catch" - JavaScript.info](https://javascript.info/try-catch)

## React

- [Describing the UI - LEARN REACT](https://react.dev/learn/describing-the-ui) - Start with this section and keep learning until you finish "[Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)", but you will actually be able to use React for common case since you finish "[State as a Snapshot](https://react.dev/learn/state-as-a-snapshot)"

## Next.js

Since around Next.js 13, there are 2 types of routers in Next.js, `App Router` (recommended) and `Page Router`. We will use mainly `App Router`.

For now, you don't need to know much about Next.js, you just need to understand basic routing and how layouts and pages are rendered.

- [Routing Fundamentals - Next.js Docs](https://nextjs.org/docs/app/building-your-application/routing)