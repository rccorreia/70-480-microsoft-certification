# Implementing special types of arrays

Methods are provided on the Array object that allows you to implement
various types of specialized collections such as a queue or a stack.

A queue is essentially a first-in-first-out type of collection.

In contrast, there is a last-in-first-out type of collection.

The array methods that facilitate this type of behavior are pop, push, shift, and unshift.

## Using the pop and push methods

The pop and push methods provide stack functionality.

### Push method

Appends the specified items to the end of the array.

```
  var sports = new Array();
  sports.push('soccer', 'basketball', 'hockey');
  sports.push('football');
```

### Pop method

Removes the last item from the array.

```
  var nextSport = sports.pop();
```

The nextSport variable holds the value ‘football’.

### Important!

You can use the pop and push methods in any context to add and remove items from the end of an array. The stack concept is useful but isn’t a confining mechanism that limits use of these methods to just stack arrays.

## Using the shift and unshift methods

The shift and unshift methods work in the exact opposite way from the pop and push methods.

### Shift method

Removes and returns the first element of the array.

```
  var sports = new Array();
  sports.unshift('soccer', 'basketball', 'hockey');
  sports.unshift('football');
```

### Unshift method

Inserts new elements at the beginning of the array.

```
  var nextSport = sports.shift();
```

The nextSport variable holds the value ‘football’.

## first-in-first-out queue

Taken together, the two concepts (pop/push and shift/unshift) can be combined to create the concept of a first-in-first-out queue.

```
  var sports = new Array();
  sports.push('soccer');
  sports.push('basketball');
  sports.push('hockey');
  var get1 = sports.shift();
  sports.push('golf');
  var get2 = sports.shift();
```

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)