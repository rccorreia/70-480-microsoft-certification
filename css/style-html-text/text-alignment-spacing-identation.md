# Applying styles to text alignment, spacing, and indentation

[Here](examples/style-text.html) is the example page.

## Text alignment

To control the alignment of text within a container, you specify the text-align attribute.

### Supported values for text-align

| Value   | Description                                                                |
|---------|----------------------------------------------------------------------------|
| right   | Aligns text to the right side of the parent container                      |
| left    | Aligns text to the left side of the parent container                       |
| center  | Aligns text to the horizontal center of the parent container               |
| justify | Stretches text horizontally to fill the full width of the parent container |

```
  p {
    text-align: center;
  }
```

## Text indentation

Text indentation is configured using the text-indent attribute. The text-indent attribute accepts an integer value to indicate how much to indent.

```
  p {
    text-indent: 2em;
  }
```

## Text spacing

You can specify the spacing between each character or each word in the text.

```
  p {
    letter-spacing: 8px;
  }

  p {
    word-spacing: 8px;
  }
```

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
