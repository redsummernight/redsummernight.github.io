# Contributing

## Adding a new page

You can make a page about anything!
Sometimes all you need is [2 colors and 3 lines of text](https://redsummernight.github.io/color/mixology/).

For example, you'd like to make a page at `https://redsummernight.github.io/trinket`.
In the root directory of the site, you add the file `trinket/index.html`.

Here's a template to get you started:

```html
---
title: trinket
description: never leave home without it
author: [matilda]
credits: |
 - "[Portrait of a Homebody](http://example.com/)", Anonymous
   (<a rel="license" href="http://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)
references: |
 - "[How to Add Cool Blinky Text](http://example.com/)", Webby Expert
---
<link rel="stylesheet" href="style.css">
<p>Hello!</p>
<script>
(function() {
	'use strict';
	console.log('Hello!');
})();
</script>
```

The first part of your page, between the triple-dashed lines,
is the [front matter](https://jekyllrb.com/docs/frontmatter/), where you define a few things:

- title: This will be used in the `<title>` element, and in links to your page
  from the [index](https://redsummernight.github.io/).

- description: The log line of your page, used in a `<meta>` element.

  ```html
  <meta name="description" content="never leave home without it">
  ```

- author: Your (nick)name, used in a `<meta>` element.

  ```html
  <meta name="author" content="matilda">
  ```

  This is only the simplest way to sign your work. You can put your name/website
  on the page itself ([example](https://redsummernight.github.io/persona/mindful/)),
  or in the credits section. Speaking of which...

- credits: A list of credits and licenses in Markdown format, which end up on the site's
  [credits page](http://redsummernight.github.io/credits/).
  If you're using others' artwork/text on your page, give them proper attribution here.
  Prefer all things [Creative Commons](https://search.creativecommons.org/).

- references: A list of references and tutorial links in Markdown format, which also end up
  on the site's [credits page](http://redsummernight.github.io/credits/).

The second part of your page is all yours!

- HTML: you don't need to define `<body>` or `<html>` tags, just add what you need.

- CSS: you can add CSS in `<style>`, or you can put it in a separate file.

  ```html
  <link rel="stylesheet" href="style.css">
  ```
  This means there should be a file at `trinket/style.css`.
  If you prefer [SCSS](https://jekyllrb.com/docs/assets/), you can name the file
  `trinket/style.scss` and Jekyll will compile it to `trinket/style.css`.

- JS: you can use `<script>` tags.

Use tabs to indent your code.

## Adding JS/CSS libraries

Any libraries we need can be added to `common/lib` using Bower.
To recreate that folder, run this in the project root:

```sh
# npm install -g bower-installer
bower-installer --remove-install-path
```

Generally, we should keep things simple and avoid bringing in heavy artillery
to do [simple things](http://youmightnotneedjquery.com/).
