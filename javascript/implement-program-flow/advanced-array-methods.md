# Using advanced array methods

These methods all involve the use of a callback.

The Array object exposes methods that enable you to process custom logic on every single element in the array.

## Using the every method

The every method lets you process specific logic for each array element to determine whether any of them meet some condition:

```
  var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
  var allEven = evenNumbers.every(evenNumberCheck, this);
  if (allEven) {
    …
  } else {
    …
  }
  
  function evenNumberCheck(value, index, array) {
    return (value % 2) == 0;
  }
```

The every method takes two parameters: The name of the function that should be processed for each element and an optional reference to the array object.

As soon as the every method gets the first false result for any item in the array, it exits and returns false.

## Using the some method

Some checks only whether any item in the array meets the criteria. The some method returns true if the called function returns true for any single element.

```
  var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
  var allEven = evenNumbers.some(evenNumberCheck, evenNumbers);
  if (allEven) {
    …
  } else {
    …
  }
  
  function evenNumberCheck(value, index, array) {
    return (value % 2) == 0;
  }
```


## Using the forEach method



## Using the filter method



## Using the map method



## Using the reduce and reduceRight methods



## Important!



## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)