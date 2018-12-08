# ```<header>```

# Purpose

Introductory headings, could include navigation.

# Definition

The HTML ```<header>``` element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, a search form, an author name, and so on.
It is not limited to only the start of your page.
You can use the ```<header>``` element as a header to a ```<section>``` or ```<article>``` element. The ```<header>``` is intended to hold an H1–H6 element as needed; however, you can populate a header with any markup that suits your needs to create the best header for that particular area of the site.

# Level
[Block](../level/block.md)

# Examples:

Can be used like a Page Header:

```
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo">
</header>
```

Which corresponds to:

<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo">
</header>

Or like this, on a Article Header:

```
<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>Posted on Wednesday, 4 October 2017 by Jane Smith</p>
  </header>
  <p>We live on a planet that's blue and green, with so many things still unseen.</p>
</article>
```

Which corresponds to:

<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>Posted on Wednesday, 4 October 2017 by Jane Smith</p>
  </header>
  <p>We live on a planet that's blue and green, with so many things still unseen.</p>
</article>

## Source:

[MDN](https://developer.mozilla.org/)
