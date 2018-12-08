# Validating data with built-in functions

The isNaN function provides a way to evaluate whether the value passed into it isn’t a
number. If the expected form of data being evaluated is numeric, this function provides a defensive
way to determine this and handle it appropriately:

```
  if (isNan(value)) {
    //handle the non number value
  }
  else {
    //proceed with the number value
  }
```

The opposite of the isNaN function is the isFinite function.

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)