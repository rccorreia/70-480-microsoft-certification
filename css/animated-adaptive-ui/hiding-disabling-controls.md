# Hiding or disabling controls

HTML elements are visible by default. However, they can be made invisible by setting the visibility CSS property.

```
  visibility:hidden;
```

When hiding an element using the visibility property, the overall layout still behaves as though the element is there, but the control is not visible to the end user.

The display property, in other hand, makes the layout behave like the element is not there:

```
  display: none;
```

If you do not want to hide the element but only make it disabled such that the user can see it but cannot perform any action on it, you need to add the attribute directly to the HTML element.
You can do this by defining a CSS class to apply to those elements and them find all these elements and add the following attribute:

```
  (...).attr("disabled", "disabled");
```

It has the same net effect as putting the attribute directly on the element:

```
  <button disabled="disabled">My Example Button</button>
```

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
