# Apply styles to establish and change an element’s position

The base coordinate is the top left corner of the window which can be understood as (x,y) coordinate (0,0). This is called static layout. CSS provides some mechanisms where you can override the default layout of the page. This is achieved by specifying the desired position behavior with the position property. Once the position property is set, other CSS properties such as top, left, bottom, or right are set.

The position property allows you to specify one of three different options: fixed, relative, or absolute. 

With fixed positioning, elements are placed relative to the browser window. 

With relative positioning, elements are positioned relative to their position in normal flow. 

With absolute positioning, the element is positioned relative to its first parent element.

The float property automatically moves an element to the left or right of surrounding content. This is most commonly used to place images in line with text to force the text to wrap around the image.

## Important!

Each HTML element is a box and each box begins its own new coordinate system. If you place a div element on the page at (50px,50px), any elements placed inside it are not placed at a coordinate starting at (50px, 50px) just because that is where the div element is. The child elements inside the div start at coordinate (0,0), which is the top left corner of the div itself. All child elements are positioned relative to the container in which they are placed.

The left and right properties start their measurements from the outer-most edge of the box. For the exam, keep in mind that if there are margins or padding specified, this will influence the position of the object as well.

When overlapping elements using absolute positioning, CSS provides a z-index property. This allows you to specify in what order the elements should stack on the page along the z-axis (the third dimension!).

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
