# Implementing native objects

There are some static native objects, like Math:

```
  var squareValue = Math.sqrt(144);
```

Other objects, such as Array, requires you to create an instance to work with them:

```
  var listofPrimeNumbers = new Array(1, 2, 3, 5, 7, 11, 13, 17, 19, 23);
```

Some objects have many constructors to choose from, with differing sets of parameters. The addition of multiple constructors is called an overloaded constructor.

JavaScript also provides wrapper objects. These wrap up native types, for example. Native types are defined as integer, string, char, and so on.

Custom objects are created by the developer, whereas native objects are provided by core JavaScript.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)