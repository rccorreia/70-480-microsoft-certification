# Finding elements by using pseudo-elements and pseudo-classes

## Pseudo-classes

Allows you to apply styles to an element based on its state, its interaction with the user, or its position in the document.

### :link, :visited, and :hover

Used most frequently with the anchor element, providing a clickable link for the user of the webpage. With these pseudo-classes, you can control what styles are applied to a hyperlink in the different states.

```
  a:link {
    color: darkblue;
  }

  a:hover {
    color: blue;
  }

  a:visited {
    color: purple;
  }
```

### :checked

Apply styles to elements that are in a checked state (check boxes and radio buttons).

```
  input[type="checkbox"]:checked {
    display: none;
  }
```

### :required

Apply styles to any elements on the page that have the required attribute. This is a convenient way to highlight required fields on a form.

```
  input:required {
    border: 2px solid red;
  }
```

### :enabled and :disabled

Allow you to style controls based on their enabled or disabled state.

```
  input:disabled {
    background-color: red;
  }

  input:enabled {
    background-color: green;
  }
```

## Pseudo-elements

Allows you to insert content into the page in locations relative to the elements that the CSS is being applied to.

### :first-child

Applies the specified styles to the first instance of the element that occurs in a list.

```
  p:first-child {
    color:blue;
  }
```

### :first-letter

Will alter the style of the first letter in the specified element.

```
  p::first-letter {
    font-size: x-large;
  }
```

### :before and :after

Will add the specified content in front of or after the indicated element selector.

```
  p::before {
    content: '_';
  }

  p::after {
    content: '!!!';
  }
```

### :first-line

Alters the styles of the first line of a text element.

```
  p::first-line {
    color:blue;
    font-size: xx-large;
  }
```

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
