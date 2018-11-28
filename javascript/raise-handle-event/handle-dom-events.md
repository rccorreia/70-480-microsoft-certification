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



## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
