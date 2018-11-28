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

Process some logic against each item in the array. It doesn’t produce a return value.

```
  var sportsArray = ['soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby'];
  sportsArray.forEach(offerSport);
  function offerSport(value, index, array) {
    var sportsList = document.getElementById("sportsList");
    var bullet = document.createElement("li");
    bullet.innerText = value;
    sportsList.appendChild(bullet);
  }
```

## Using the filter method

Provides a way to remove items for an array based on some processing
done in the callback function.

The filter method returns a new array containing the elements that are included based on a return value of true or false from the callback function.

```
  var evenNumbers = new Array(0, 2, 4, 6, 8, 9, 10, 12);
  var allEven = evenNumbers.filter(evenNumberCheck, evenNumbers);
  
  function evenNumberCheck(value, index, array) {
    return (value % 2) == 0;
  }
```

## Using the map method

The map() method creates a new array with the results of calling a provided function on every element in the calling array.

```
  var numbers = [1, 4, 9];
  var roots = numbers.map(Math.sqrt);
  // roots is now [1, 2, 3]
  // numbers is still [1, 4, 9]
```

Another example:

```
  var money = [12.8, 15.9, 21.7, 35.2];
  var roundedMoney = money.map(roundOff, money);
  
  function roundOff(value, position, array) {
    return Math.round(value);
  }
```

## Using the reduce and reduceRight methods

The reduce method processes the elements of the array in ascending order, whereas the reduceRight processes the elements of the array in descending order.

They are recursive. Each result of the callback function is passed back into the callback method as the previous return value along with the current element to be passed in.

```
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var factorials = numbers.reduce(factorial);
  function factorial(previous, current) {
    return previous * current;
  }
```

## Important!

Some advanced functions enable you to change the source array, whereas others don’t. This is an important aspect to keep clear.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)