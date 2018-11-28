# Using events

The idea of hooking up an event is to tell the browser that when a certain event occurs, it should call a specified function. The function assigned to an event is said to be an event listener listening for that event.

You can hook up an event in three ways:
* Declare it directly in the HTML markup.
* Assign the function to the event property of the element object through JavaScript.
  * Providing a named function;
  * Assigning an anonymous function.
* Use the newer add and remove methods on the element object to associate event handlers.

## Event object

The event object provides metadata about the event. Examples: 
* If keyboard events are being handled, you might want to know which key was pressed;
* If mouse events are being handled, you might want to know which mouse button was pressed.

The event object is accessed within an event handler function, using the window object as shown:

```
  var event = window.event;
```

### Note! Accessing the event context

In Internet Explorer, the window event is the method required to access the event object. However, in some browsers, the event object is passed to the event function as a parameter.

## Declarative event handling

Handling events declaratively in the HTML markup is possible by setting up an event handlers line within the HTML elements:

```
  <html>
    <head>
      <script>
        function onloadHandler() {
          alert("hello event.");
        }
      </script>
    </head>
    <body onload="onloadHandler();">
      …
    </body>
  </html>
```

## Assignment event handling

You can assign the event handler function to the event property through JavaScript:

```
<html>
    <head>
      <script>
        window.onload = onloadHandler();
        function onloadHandler() {
          alert("hello event.");
        }
      </script>
    </head>
    <body>
      …
    </body>
  </html>
```

Notice that the assignment of the onloadHandler is in the script block but not inside any function. 

The onload event is triggered when the entire page is loaded, so it’s possible to get a reference to the page elements and hook up the event handlers. A more common way to do this is to assign an anonymous function to the window’s onload event and hook up all the necessary events:

```
  window.onload = function () {
    //do event setup in here.
  }
```

## Using the addEventListener and removeEventListener methods

addEventListener and removeEventListener are the two preferred methods to hook up a function to an event and then to remove it later as needed. The addEventListener method accepts two required parameters and one optional parameter:

```
  addEventListener(<event name>,<event function>,<optional cascade rule>)
```

The event name is the name of the event to be handled (without the on prefix). The event function is the one that should run when the event occurs, the listener. The optional cascade rule provides some flexibility in how the events move through nested DOM elements.

The removeEventListener takes exactly the same parameters. What this implies is that more than one event listener can be added for the same event and then removed.

```
  <script>
    window.addEventListener("load", onloadHandler, false);
    window.addEventListener("load", onloadHandler2, false);
    window.addEventListener("load", onloadHandler3, false);
    function onloadHandler() {
      alert("hello event 1.");
    }
    function onloadHandler2() {
      alert("hello event 2.");
    }
    function onloadHandler3() {
      alert("hello event 3.");
    }

    …
    
    window.removeEventListener("load", onloadHandler2, false);
  </script>
```

## Using anonymous functions

You can’t identify anonymous functions after they are assigned as event listeners to manipulate them.

As expected, an anonymous function has no name. It’s completely anonymous and can’t be called from other code segments. Look at the following example:

```
  window.onload = function () {
  }
```

In JavaScript, functions are objects that can be assigned to variables. This is how the anonymous function event listener works. It assigns a function object to the onload property of the window object, which in turn handles the event when the window is completely loaded.
You can use anonymous functions in most cases where a function is expected as a parameter also. Take the following code sample:

```
  window.addEventListener("load", function () {
    document.getElementById("outer").addEventListener("click", outerDivClick, false);
    },
    false
  );
```

## Canceling an event

The ability to cancel event processing can be useful when you want to completely override the implementation of the native functionality of a DOM element. A perfect example is if it was required to override the inherent functionality of an anchor element. An event listener would be set up for the click event. Then in the click event, via the event object, the returnValue property is set to false or the function itself can return false. This tells the runtime to stop any further processing of the event. The following code demonstrates this:

```
  window.onload = function () {
    var a = document.getElementById("aLink");
    a.onclick = OverrideAnchorClick;
  }
  function OverrideAnchorClick() {
    //do custom logic for the anchor
    window.event.returnValue = false;
    //or
    //return false;
  }
```

## Declaring and handling bubbled events

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
