# Handling DOM events

[Here](examples/handle-dom-events.html) is the example page.

The DOM provides these events via the JavaScript API:

## Change events

A change event occurs when the value associated with an element changes:

```
  …
    <script>
      window.onload = function () {
        document.getElementById("aRange").addEventListener("change", rangeChangeEvent);
      }
      function rangeChangeEvent() {
        document.getElementById("rangeValue").innerText = this.value;
      }
    </script>
  …
  <body>
    <input id="aRange" type="range" max="200" min="0" value="0"/>
    <div id="rangeValue"></div>
  </body>
```

### Important!

The example above uses the *this* keyword. In *this* context, the this keyword provides a direct reference to the element that created the event. In this way, *this* provides shortcut access to the element rather than gets a reference via one of the document search methods.

## Focus events

Focus events occur when an element receives or loses the focus.

### The DOM focus events

| Event    | Description                                      |
|----------|--------------------------------------------------|
| focus    | Raised when the element receives the focus       |
| blur     | Raised when the element loses the focus          |
| focusin  | Raised just before an element receives the focus |
| focusout | Raised just before an element loses the focus    |

## Keyboard events

Keyboard events occur when keys are pressed on the keyboard.

### Available keyboard events

| Event    | Description                             |
|----------|-----------------------------------------|
| keydown  | Raised when a key is pushed down        |
| keyup    | Raised when a key is released           |
| keypress | Raised when a key is completely pressed |

### Event object properties for keyboard events

| Property | Description                                                 |
|----------|-------------------------------------------------------------|
| altKey   | A Boolean value to indicate whether the Alt key was pressed |
| keyCode  | The numeric code for the key that was pressed               |
| ctrlKey  | A Boolean value as to whether the Control key was pressed   |
| ctrlKey  | A Boolean value as to whether the Shift key was pressed     |

### Important!

In some cases, depending on the key, only the keydown event fires. The arrow keys are such an example: keydown fires but not keyup or keypress.

It is possible to combine, like ctrlKey with the keyCode event, to give something similar to hotkey functionality:

```
  document.onkeydown = function () {
    if (window.event.ctrlKey && String.fromCharCode(window.event.keyCode) == 'F')
      document.getElementById("firstNameText").focus();
    if (window.event.ctrlKey && String.fromCharCode(window.event.keyCode) == 'L')
      document.getElementById("lastNameText").focus();
    return false;
  }
```

## Mouse events

### Available mouse events

| Event                   | Description                                                      |
|-------------------------|------------------------------------------------------------------|
| click                   | Raised when the mouse performs a click                           |
| dblclick                | Raised when the mouse performs a double-click                    |
| mousedown               | Raised when the mouse button is pressed down                     |
| mouseup                 | Raised when the mouse button is released                         |
| mouseenter or mouseover | Raised when the mouse cursor enters the space of an HTML element |
| mouseleave              | Raised when the mouse cursor leaves the space of an HTML element |
| mousemove               | Raised when the mouse cursor moves over an HTML element          |

The mouse events provide additional information on the event object.

### Properties of the mouse event

| Property | Description                                                                                      |
|----------|--------------------------------------------------------------------------------------------------|
| clientX  | The x or horizontal position of the mouse cursor relative to the viewport boundaries             |
| clientY  | The y or vertical position of the mouse cursor relative to the viewport boundaries               |
| offsetX  | The x or horizontal position of the mouse cursor relative to the target element                  |
| offsetY  | The y or vertical position of the mouse cursor relative to the target element                    |
| screenX  | The x or horizontal position of the mouse cursor relative to the upper-left corner of the screen |
| screenY  | The y or vertical position of the mouse cursor relative to the upper-left corner of the screen   |

## Drag-and-drop functionality

### Events available to drag and drop

| Event     | Description                                                                                  |
|-----------|----------------------------------------------------------------------------------------------|
| drag      | Raised continuously while the element is being dragged                                       |
| dragend   | Raised on the element being dragged when the mouse is released to end the drop operation     |
| dragenter | Raised on a target element when a dragged element is dragged into its space                  |
| dragleave | Raised on a target element when a dragged element leaves its space                           |
| dragover  | Raised continuously on the target element while the dragged element is being dragged over it |
| dragstart | Raised on the element being dragged when the drag operation is beginning                     |
| drop      | Raised on the target element when the dragged element is released                            |

A lot happens in a drag-and-drop operation, starting with the dragstart event. The drag event continues to fire while the element is being dragged. As the element is dragged over other elements, each of those other elements’ dragenter, dragover, and dragleave events fire. When the element finishes being dragged, its dragend event fires and the drop event of a target element fires. You can use all these events in combination to provide visual feedback to users that the drag operation is occurring and what might be a potentially valid drop location.

### Note:

For elements that don’t support drag-and-drop functionality by default, the default event mechanism must be canceled. This is why event.returnValue is set to false.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
