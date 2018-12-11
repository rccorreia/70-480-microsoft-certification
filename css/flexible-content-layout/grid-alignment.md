# Implement a layout using grid alignment

[Here](examples/grid.html) is the example page.

The grid layout capability of CSS3 provides a way to lay out the content of the webpage much like an HTML table but using only CSS to achieve the results.

grid-template-columns and grid-template-rows fefines the columns and rows of the grid with a space-separated list of values. The values represent the track size, and the space between them represents the grid line.

```
  .container {
    grid-template-columns: 40px 50px auto 50px 40px;
    grid-template-rows: 25% 100px auto;
  }
```

Every item have to be specified so the css knows where and how to render them.

Example with grid-template-areas:

```
  .item-a {
    grid-area: header;
  }
  .item-b {
    grid-area: main;
  }
  .item-c {
    grid-area: sidebar;
  }
  .item-d {
    grid-area: footer;
  }

  .container {
    grid-template-columns: 50px 50px 50px 50px;
    grid-template-rows: auto;
    grid-template-areas:
      "header header header header"
      "main main . sidebar"
      "footer footer footer footer";
  }
```

## Source

[CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
