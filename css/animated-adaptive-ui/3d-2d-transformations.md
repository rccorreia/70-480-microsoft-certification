# Applying 3-D and 2-D transformations 

[Here](examples/3d-2d-transformations.html) is the example page.

## Three-dimensional transformations

| Transformation | Effect                                                         |
|----------------|----------------------------------------------------------------|
| translate      | Moves the object from its current location to a new location   |
| scale          | Changes the size of the object                                 |
| rotate         | Spins the object along the x-axis, y-axis, and/or the z-axis   |
| matrix         | Allows you to combine all the transformations into one command |

There are shorthand properties available such as ```translate3d``` and ```rotate3d```.

Example:

```
  div {
    transform: rotateX(40deg) rotateY(40deg) rotateZ(40deg);
  }
```

Or

```
  transform: rotate3d(1,1,1, 30deg);
```

```rotate3d``` takes the first parameters to specify on which axis to rotate. A value of zero indicates to no rotation on that axis whereas a value of 1 indicates a rotation on that axis. The parameters are in order of x-axis, y-axis, z-axis. The last parameter specifies the number of degrees to rotate.

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
