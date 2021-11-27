## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See two dice images
- Should be able to refresh the page and see a two rolled dice.

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

- [x] Create an external javascript file
- [x] Add Dice images
- [ ] Create a random number
- [ ] Change the `<img>` to a random dice
- [ ] Change both image elements
- [ ] Change the title so it displays a winner

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

-How to add an external js file into HTML:

```html
<script src="URL"></script>
```

-If you want to have the external JS file to be run at the end then we add defer to the script:

```html
<script src="URL" defer></script>
<!-- A script tag with defer waits until the entire parser is done and then runs all scripts marked with defer in the order they are encountered. -->
```

-How to add an external image to html

```html
<img
  src="URL of external image"
  alt="something you would say when reading the page t someone over the phone"
/>
```

-_the alt attribute provides alternate text to display when an image is not loaded. It also used to support accessibility_.

-How to get a random number between two integer while also including those integers.

```js
Math.floor(Math.random() * (max - min + 1) + min);
//The maximum is inclusive and the minimum is inclusive
// math.floor rounds down towards negative infinity
// math.ceil rounds up towards positive infinity
```

- How to set the attribute using dom manipulation

```js
//first we using a querySelector to select what we want to change and set it into a variable
let variable = document.querySelector("What we want to select");
//using the manipulation attributes we can make the changes happen
variable.setAttribute(name, value);
// the name is the name of the attribute whose value is it be changed
// the value is what we will changing to.
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Resource 1](https://stackoverflow.com/questions/8996852/load-and-execute-order-of-scripts) - This helped me get a better understanding of when and where scripts should be used and how high or low they are in loading priority.
- [Resource 2](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt) - Documentation on the use of alt text and the benefits of using it to help with accessibility.
- [Resource 3](https://stackoverflow.com/questions/14/difference-between-math-floor-and-math-truncate) - To get a better understanding when to use math. functions.
- [Resource 4](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) - Using setAttribute and the documentation behind it.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Vardan Vanyan](https://www.your-site.com)
- GitHub - [chopsquad](https://github.com/chopsquad)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
