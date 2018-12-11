# Implement a layout using a flexible box model 

[Here](examples/flexbox.html) is the example page.

The flexbox is a CSS3 construct that provides a way to lay out elements that flow. Flow means that the elements will flow from either left to right (horizontal), or up and down (vertical).

```
  <div id="flexboxExample"></div>

  #flexboxExample {
    display: flex;
    border: 1px solid black;
    margin-top: 100px;
    min-height: 15px;
  }
```

All the elements within a flexbox are called flexbox items. You can specify that the flexbox layout runs horizontally or vertically.

## CSS styles available for a flexible box

| Style          | Option         | Description                                                                             |
|----------------|----------------|-----------------------------------------------------------------------------------------|
| flex-direction | column         | Flows the child elements of the flexbox across the vertical axis top to bottom          |
|                | row (default)  | Flows the child elements of the flexbox along the horizontal axis left to right         |
|                | column-reverse | Renders the child elements along the vertical axis from the reverse end bottom to top   |
|                | row-reverse    | Renders the child elements along the horizontal axis from the reverse end right to left |
| flex-pack      | end            | Renders the child elements from the end in relation to the layout axis set direction    |
|                | start          | Renders the child elements from the start in relation to the layout axis set direction  |
|                | center         | Renders the child elements centered on the layout axis                                  |
|                | distribute     | Evenly spaces the child elements along the layout axis                                  |

### Important! 

The flexbox is oriented based on the flex direction. The flex direction is based on the layout axis. If the layout of the flexbox is column, the layout axis is vertical. If the flexbox layout is row, the layout axis is horizontal. This is important to understand in order to know how other properties on the flex grid will be rendered.


The flex property is specified on each of the children elements to designate the amount of space each should occupy.

flex-wrap provides the ability to specify what the browser should do in the event that the content within the flexbox exceeds the available space of the flexbox itself. In this case, you can specify that the flexbox should wrap or not wrap.

There is the shorthand version of wrapping. The flex-flow property supports specifying the wrap style as the second parameter: flex-flow: row wrap.

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
