# Checking for null values

A Null value in a JavaScript program is what a variable equals before it’s initialized. JavaScript knows about the variable’s existence but doesn’t yet have a value.

A common place to ensure that variables have values is in functions that accept parameters. Consider the following function:

```
  window.onload = function () {
    try {
      var a, b, c;
      a = 5;
      b = 10;
      var result = multiplyNumbers(a, b, c);
      alert(result);
    } catch (e) {
      alert(e.message);
    }
  }

  function multiplyNumbers(first, second, third) {
    if (first == null || second == null || third == null)
    {
      throw new Error(5, "Forgot to initialize a number.");
    }
    return first * second * third;
  }
```

In this case, without the if checking, the result would be NaN (not a number), a special JavaScript type. This is because of the attempt to perform a mathematical operation against a null value.
It occurs because the c variable was not initialized.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
