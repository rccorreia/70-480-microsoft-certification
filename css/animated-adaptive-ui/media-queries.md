# Adjusting UI based on media queries

[Here](examples/media-queries.html) is the example page.

There is no guarantee that your page will fit nicely on the screen, and as a result, it may not be user friendly. With the use of media queries you can create a responsive user interface that will adjust automatically as the size of the available rendered webpage changes.

```
  @media screen and (max-width: 800px){
  }
```

This code will apply all the styles within the media query to the page when the width of the screen is not wider than 800px.

The link element supports media queries as well, which in turn lets you share a CSS file across multiple pages:

```
  <link rel="stylesheet" media="screen and (min-width: 1200px)" href="Desktop.css"/>
  <link rel="stylesheet" media="screen and (max-width: 1199px) and (min-width: 401px)" href="tablet.css"/>
  <link rel="stylesheet" media="screen and (max-width: 400px)" href="phone.css"/>
```

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
