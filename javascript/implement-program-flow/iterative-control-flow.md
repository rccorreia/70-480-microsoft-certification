# Implementing iterative control flow

Iterative flow control enables you to loop over a block of code many times.

## Using the for loop

The for loop is useful in cases in which a block of code should run based on a deterministic number of items.

```
  for (var i = 0; i < 10; i++) {
    document.write(i);
  }
```

## Using the for…in loop

The for…in loop is a method for iterating over an object’s properties.

```
  var person = { firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender:   "female" };
  for (var prop in person) {
    document.write(prop);
  }
```

This for loop prints out the name of each property on the custom person object. If you want the loop to print the property values instead, each property needs to be accessed via the property indexer of the object, as in this example:

```
  var person = { firstName: "Jane", lastName: "Doe", birthDate: "Jan 5, 1925", gender: "female" };
  for (var prop in person) {
    document.write(person[prop]);
  }
```

## Using the while loop

The while loop lets you run a code block until some condition evaluates to false.

```
  var i = 0;
  while (i < 10) {
    //do some work here.
    i++;
  }
```

## Using the do…while loop

It always runs at least the first time.

```
  var canvas = document.getElementById("canvas1");
  do {
    //stop traffic
  }while(canvas.styles.backgroundColor == 'red')
```

## Short-circuiting the loops

Two mechanisms enable you to short-circuit a loop. The break keyword exits the current loop completely, whereas the continue keyword breaks out of the code block and continues to the next iteration of the loop.

## Important!

The break keyword breaks out of only the currently running loop. If the loop containing the break is nested inside another loop, the outer loop continues to iterate as controlled by its own expression.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)