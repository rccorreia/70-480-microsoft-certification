# Implementing a layout using position, floating, and exclusions

[Here](examples/floating-exclusions.html) is the example page.

Float is a mechanism by which the surrounding content will flow smoothly around the element with its float property specified to either float: left or float: right.
Exclusions provide a way to overcome this limitation with float. Exclusions are achieved by specifying the CSS3 property wrap-flow.

## Values available for the wrap-flow property

| Value   | Description                                                                                                            |
|---------|------------------------------------------------------------------------------------------------------------------------|
| auto    | This is the default value. The exclusion item will be over top of the inline element                                   |
| both    | The exclusion will force the inline element to wrap smoothly on both sides                                             |
| start   | The exclusion will force the inline elements to wrap only on the starting edge, and the ending edge will be empty      |
| end     | The exclusion will force the inline element to wrap only on the ending edge, and the starting edge will be empty       |
| maximum | The exclusion will force the inline element to wrap only on the side with the largest available space                  |
| clear   | The exclusion will force the inline content to wrap only on the top and bottom and leave the start and end edges empty |

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
