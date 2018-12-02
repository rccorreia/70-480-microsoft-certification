# Implementing *try...catch...finally* constructs

Any code inside the try portion of the *try…catch* block is protected against encountering an unhandled error.

The catch block is where the error can be handled as appropriate for the application. The catch block receives a parameter that is an exception object.

## Properties available on the exception object

| Property | Description                                      |
|----------|--------------------------------------------------|
| message  | A textual description of the error that occurred |
| number   | A numeric error code                             |
| name     | The name of the exception object                 |

You can use the information provided in the exception object to decide what to do in terms of overall program flow.

Another part to the *try…catch* block is the *finally* block. The significance of the finally block is that the code inside it runs all the time.

Variable scope applies to each block within the try…catch block. If a variable is declared within the try portion, it won’t be accessible from the catch of the finally.

Exceptions bubble up the call stack, a special stack in the processing environment that represents
the functions currently being processed in sequential order. Take the following code sample:

```
  window.onload = function () {
    try {
      WorkWithCanvas();
    } catch (e) {
      console.log(e.message);
    }
  }

  function WorkWithCanvas() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    contxt.arc(50, 50, 25, 0, 360);
    context.fillStyle = "blue";
    context.fill();
    context.strokeStyle = "red";
    context.stroke();
  }
```

Because the WorkWithCanvas method has no exception handling, the exception bubbles up to the calling method, the next method in the stack. This continues through the stack until either an exception handler is met or the browser receives the exception and treats it as an unhandled exception.

The concept of raising an error is also known as throwing an exception. An exception is thrown using
the throw keyword.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)