# Define the lifetime of variables / locally and globally

[Here](examples/variable-scope.html) is the example page.

Variables begin their life with a declaration. The remainder of their life within the application depends on where the variables are declared.

To declare a variable in JavaScript, you use the var keyword.
```
  var myVariable;
```

You can declare many variables concurrently. 
```
  var x, y, z;
```

Initialize your variables inline with the declaration
```
  var x =0.0, y=0.0, z=0.0
```

Until a variable is initialized, it has a value of undefined.

After a variable is available for use, it’s considered to be “in scope.”

A variable that has global scope is available throughout the webpage. A variable with local scope is available only within a specified context.

You must not declare any variables at the local level with the same name. Locally scoped variables override higher-level scoped variables of the same name. Note that they don’t overwrite them, they override them—meaning that you can’t access the overridden values. 

The following code demonstrates this point:

```
  window.onload
  …
  var scaleX = 0.0;
  …
  document.getElementById("Div4").onclick = function () {
    var scaleX = -3;
    alert(scaleX);
  }

  function scaleDiv() {
    //code to scale the Div by a factor of scaleX
  }
```

In this code, if your intention is to use the scaleX variable declared globally within the scaleDiv function, the results should be unexpected. That’s because the function assigned to the onclick event handler also declares a variable named scaleX. The value in the alert window within the onClick function is –3, not 0.0, and when the scaleDiv function accesses the scaleX variable, the value is 0.0. Scoping problems such as these highlight why you must always provide meaningful names to variables. Meaningful names can help prevent accidentally naming variables the same thing.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
