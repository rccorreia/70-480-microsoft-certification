# Defining element, style, and attribute selectors

We can specify the element itself as the selector:

```
  p {
    …
  }
```

Any paragraph within scope of the declaration will have the styles applied to it.

We can define a custom class name in the CSS file. This can be any name prefixed with a period. Then, any element that has that class assigned to it via the class attribute will have the defined styles applied:

```
  .customclass{
    …
  }
```

Select specific elements on the page using attribute selection. This is achieved by specifying an element type followed by a specific attribute.

```
  input[required] {
    …
  }
```

## Attribute selector capabilities

| Attribute selector | Description                                                                                             |
|--------------------|---------------------------------------------------------------------------------------------------------|
| =                  | Specifies that an attribute equals a specific value. For example, the URL of an anchor is a specify URL |
| ~=                 | Specifies a space-separated list of words as the values for an attribute                                |
| ^=                 | Specifies that the attribute has a value starting with the text specified                               |
| $=                 | Specifies that the attribute has a value ending with the specified text                                 |
| *=                 | Specifies that the attribute has a value containing the specified text                                  |

Example:

```
  [class$="test"] {
    …
  }
```

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
