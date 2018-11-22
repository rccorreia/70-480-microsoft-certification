# Showing and Hiding elements

You can modify programmatically the visibility of the HTML elements.

There is a css property called display. It can receive the values *inline*, that will show the object, or *none*, that won't display it.

There is the visibility property too:

| Value    | Effect                                                         |
|----------|----------------------------------------------------------------|
| visible  | Sets the property to visible to show the element               |
| hidden   | Hides the element                                              |
| collapse | Collapses the element where applicable, such as in a table row |
| inherit  | Inherits the value of the visibility property from the parent  |

Some of these values have interesting behaviors. When you use the display CSS property and set it to the value of none, the HTML element is hidden. But hiding the element in this way also removes it from the layout. All the surrounding elements realign themselves as though the element was not there at all. When display is set to inline, the element is shown again and all the surrounding elements move out of the way, back to where they were originally.

The visibility CSS property behaves slightly differently. Setting the visibility property to hidden hides an element, but the hidden element’s surrounding elements act as though it’s still there. The space that the element occupied is maintained intact, but the element’s content is hidden. When the property is set back to visible, the element reappears exactly where it was, without affecting any surrounding elements. The collapse value, on the other hand, acts more like the display property. If you specify collapse on something such as a table row, the table rows above and below collapse and take over the space that the collapsed row was occupying. When you set the visibility property back to visible, the surrounding elements move out of the way to show the element.

## Important!
If you need to preserve the page layout when altering visibility, use the *visibility* property with the *hidden* value. If you don’t need to preserve the layout, you can either set the *display* property to *none* or set *visibility* to *collapse*.

[Here](examples/show-hide-elements.html) is the example page.

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
