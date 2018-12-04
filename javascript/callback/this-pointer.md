# Using the *this* pointer

The this pointer is a special object provided by the jQuery framework. When running selections against the DOM using jQuery, this refers to the object that it finds or the collection of objects that it finds. It provides a shortcut to accessing the item within the current context of jQuery filter. In a simple example, the this keyword can be demonstrated as follows:

```
  $("document").ready(
    function () {
      $('#floorDiv').click(function () {
        $(this).css("background-color", "red");
      })
    }
  );
```

In this sample, the floorDiv element is assigned an anonymous function to run when it’s clicked. Within the function, rather than query the DOM for the element again to do something with it, the this keyword provides a reference to the element that initiated the event.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)