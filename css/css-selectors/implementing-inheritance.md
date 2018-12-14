# Implementing inheritance

Some styles applied to a parent element are automatically inherited by children elements, like the font and text styles:

```
  <style>
    div {
      font-family: arial;
      color: blue;
    }
  </style>
```

And with the following HTML:

```
  <div>
    hello world inside a div.
    <p>
      Hello world inside a paragraph.
    </p>
  </div>
```

Both the div and the paragraph will have the font and color styles applied to them because the paragraph element does not have any of its own styles defined. If you assign styles to the paragraph element to override the div styles you would be able to prevent the inheritance of the styles:

```
  <style>
    div {
      font-family: arial;
      color: blue;
    }

    p {
      font-family: serif;
      color: green;
    }
  </style>
```

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
