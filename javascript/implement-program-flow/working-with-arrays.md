# Working with arrays

Arrays are objects, created with the new keyword

```
  var anArray = new Array();

  var anArray = new Array(5);
  anArray[1] = 'soccer';
  
  var anArray = new Array('soccer', 'basketball');

  var anArray = ['soccer', 'basketball'];
```

---

## Important!

Sizing arrays is very dynamic. Even though the array is initially declared to have a length of 5, for example, if you try to access the 10th element, the array automatically resizes to accommodate the requested length. The following example demonstrates this concept:

```
var anArray = new Array(5);
alert(anArray.length);

anArray[9] = ‘soccer’;
alert(anArray.length);
```

Some array methods affect the Array object directly, whereas other methods return a new Array object. You must understand when each case is applicable.

---

A multi-dimensional array can contain other arrays:

```
  var multiDimArray = new Array(2);
  multiDimArray[0] = new Array(1);
  multiDimArray[1] = new Array(4);

  multiArray[1][2] = 'example';
```

## Using the length property

This property provides how many elements the array has allocated at the time the property is evaluated.

## Using the concat method

The concat method combines two or more arrays into one array:

```
  var sports = new Array( 'football', 'cricket', 'rugby', 'tennis', 'badminton');
  var moreSports = new Array('soccer', 'basketball', 'hockey');
  
  var combinedSports = sports.concat(moreSports);
```

## Using the indexOf and lastIndexOf methods

The indexOf method provides a way to find the index of a known element. The following code sample demonstrates this:

```
  var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby',   'tennis', 'badminton');
  var index = sports.indexOf('football', 0);
```

The indexOf method accepts two parameters: what to search for and the index at which to begin searching. If the element being sought isn’t found, the method returns a value of –1.

The indexOf method uses the identity operator to check for equality, which means that if an array contains strings such as ‘1’, ‘2’, and ‘3’ and you’re searching for the integer 3, the result is –1 because the equality operation returns false for all elements in the array. 

The indexOf method searches in ascending index order. To search in descending order—that is, to search from the end of the array to the beginning—use the lastIndexOf method, which accepts the same parameters.

## Using the join method

The join method joins all the elements in an array into a single string separated by a specified string or char separator.

```
  var sports = new Array('soccer', 'basketball', 'hockey');
  var joined = sports.join(',');
```

## Using the reverse method

The reverse method reverses the sequence of all elements in the array:

```
  var sports = new Array('soccer', 'basketball', 'hockey', 'tennis', 'badminton');
  sports.reverse();
```

## Using the sort method

The sort method sequences the items in the array in ascending order:

```
  var sports = new Array('soccer', 'basketball', 'cricket', 'rugby');
  alert(sports.indexOf('soccer'));
  sports.sort();
  alert(sports.indexOf('soccer'));
```

The result is that the sports array is now sorted. The alert boxes show the index of the ‘soccer’ element before and after the sort, demonstrating that the element has moved from position 0 to position 3 in the array.

## Using the slice method

The slice method takes out one or more items in an array and moves them to a new array:

```
  var sports = new Array('soccer', 'basketball', 'hockey', 'football');
  var someSports = sports.slice(1, 2);
```

The slice method takes two parameters: the indexes where the slice operation should begin and end. The ending index isn’t included in the slice. All copied elements are returned as an array from the slice method. In this example, because ‘basketball’ is at index 1 and the ending index is specified at index 2, the resulting array someSports contains only one element: ‘basketball’.

## Using the splice method

The splice method provides a way to replace items in an array with new items. 

```
  var sports = new Array('soccer', 'basketball', 'hockey', 'football', 'cricket', 'rugby',   'tennis', 'badminton');
  var splicedItems = sports.splice(1, 3, 'golf', 'curling', 'darts');
```

The splice method returns an array containing the items that are spliced out of the source array. The first parameter is the index in the array where the splice operation should start. The second parameter is the number of items to splice, starting from the index specified in the first parameter. The optional last parameter lists items that are to replace the items being
spliced out. The list doesn’t have to be the same length as the items being spliced out. In fact, if the last parameter is omitted, the spliced items are simply removed from the array and not replaced. In this example, three items are replaced, starting at index 1. So, ‘basketball’, ‘hockey’, and ‘football’ are replaced with ‘golf’, ‘curling’, and ‘darts’.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
