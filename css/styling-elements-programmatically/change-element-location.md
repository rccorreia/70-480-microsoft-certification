# Changing the location of an element

By default, all HTML elements flow statically from left to right in the same order that they are declared in the HTML page. However, CSS provides a mechanism to specify some advanced options in element position. 

You can position elements by using *absolute* positioning, *fixed* positioning or *relative* positioning.

## Absolute

With absolute positioning, the element is placed in the exact location specified, relative to its **container’s borders**. 

This means it will respect the parents element position and display inside it (It will not be based on the browser window position). 

## Fixed

It will be displayed based on the browser window position. And it will be fixed, meaning that even if you scroll the screen, the item will stay in the same position and still visible.

## Relative

The element is positioned relative to its immediate left sibling’s coordinates. 

## General use

You can apply four properties individually or in combination to control the position of an element: Top, Left, Right, and Bottom. Each property takes a distance parameter that specifies the relative distance of the object from a reference point based on the positioning attribute specified. 

When using absolute or relative positioning, the default border or margin settings are ignored because the object is positioned where the positioning attributes direct the element to be.

[Here](examples/position.html) is the example page.

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)

