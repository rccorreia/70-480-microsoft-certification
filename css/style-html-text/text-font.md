# Apply styles to text font

[Here](examples/style-text.html) is the example page.

The font CSS object contains other properties to allow you to control how text is rendered on your pages. You can change the font typeface and control the size of the text.

The first method is to simply rely on the fonts that are installed on the system rendering the webpage. This is achieved using the font-family:

```
  p{
    font-family:Arial,'Times New Roman',Webdings;
  }
```

This CSS code renders the fonts in order from left to right until it finds one that is available on the client computer. If none of the specified fonts are available, the text falls back to the browser’s default font. 

You can use specific fonts that are not available on the system. These fonts are known as WOFF (Web Open Font Format). To use these fonts in your webpage, you define a font family using the special keyword @font-face.

```
  @font-face {
    font-family: "My Font";
    src: url('fonts/my_new_woff_font.eot');
    src: url('fonts/my_new_woff_font.woff');
  }
```

You can resize the text for different scenarios as you see fit. Use the font-size property. It accepts relative values that when rendered are relative to the default text size in the browser. The available values are: xx-small, x-small, small, smaller, medium, larger, large,
x-large, xx-large.

```
  p{
    font-size: x-large;
  }
```

## Important!

Be aware that certain font types will work in some browsers but not others. It is important to declare each font type by using @font-face so that the browser has access to the one it needs.

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
