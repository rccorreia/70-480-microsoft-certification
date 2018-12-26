# Implementing a callback - Introduction

Callbacks are a design pattern to implement when you need to have something work asynchronously or you are working with multiple threads.

The idea of a callback is to call a function to run but when it’s done, to call back a specified function with usually some sort of result or status of the operation.

```
  <script>
    window.onload = function () {
      WillCallBackWhenDone(MyCallBack, 3, 3);
    }

    function WillCallBackWhenDone(f, a, b) {
      var r = a * b;
      f(r);
    }

    function MyCallBack(result) {
      alert(result);
    }
  </script>
```

Another common use for callbacks is as events. Whenever a DOM event is fired, it’s using a callback pattern. A function is provided as a parameter or property to indicate that when specific things occur, such as a mouseover, to call back to the specified function to run some custom logic related to the end-user action.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)