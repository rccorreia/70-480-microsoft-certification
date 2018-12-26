# Implementing a callback with an anonymous function

In JavaScript, functions are considered objects and are often noted as first-class citizens. This means that a variable can be assigned a function, or a function can be passed into another function as a parameter. Seeing functions used in this way is a common convention in JavaScript. Functions used in this way are called anonymous functions. A function is considered  anonymous when it doesn’t have a name.

In a situation that specifies distinct behavior for each button, anonymous functions simplify things greatly. The following code demonstrates using anonymous functions instead of the named function:

```
  $("#Button1").click(function () { ... });
  $("#Button2").click(function () { ... });
  $("#Button3").click(function () { ... });
```

Callback functions can also be used in the form of a parameter to another function. Consider the following example that accepts a user’s input to evaluate if a score is a pass or a fail:

```
  $("document").ready( function () {
    $("#Button1").click( function () {
      DoLongTask($("#inputValue").val(),
      function (result, data) {
        if (result == "SUCCESS")
          alert(data + " is a Success");
        else
          alert(data + " is a fail");
        }
      );
    });
  });
  
  function DoLongTask(n,f)
  {
    if (n < 10)
      f("SUCCESS", n);
    else
      f("FAIL", n);
  }
```

Callback functions are very useful and widely used in JavaScript development. Callback functions can exist statically with a name or be provided inline dynamically as anonymous.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)