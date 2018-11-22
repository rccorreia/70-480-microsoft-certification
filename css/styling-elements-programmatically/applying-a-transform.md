# Applying a transform

Transforms enable you to change an element’s appearance. You can make an element larger or smaller, rotate it, and so on.
To add a transform to an element, you declare it in the CSS for the element by adding the transform property as follows:

```
  .rota {transform: rotate(90deg);}
```

This code rotates the object with CSS class "rota".

[Here](examples/transform.html) is the example page.

## Rotate Method

The *rotate* transform method enables you to rotate an object by a specified number of degrees.

The transform also supports the rotateX and rotateY methods, which accept a single parameter in degrees to specify an angle around the x-axis or y-axis in which to rotate.

## Translate Method

The translate method lets you move an HTML element by changing its relative X and Y position on the page.

Again, translateX and translateY methods are available if the desired effect is to move the object around the x-axis or y-axis.

## *Skew* Method

You can skew an HTML element using the skew method of the transform property. Skewing slants the object so that it’s not parallel to the vertical or horizontal axis.

## Scale Method

The scale method enables you to resize elements by a specified ratio.

Specifying a value greater than 1 makes the object larger; specifying a value less than 1 but greater than 0 makes the object smaller. Specifying a value of –1 flips the object over its horizontal axis.

## Combining transformations

You can combine the methods to apply multiple effects to the element. In the sample code, change the transform property to the following code:

```
  transform: translate(50px,0px) scale(1.5) skew(10deg, 10deg);
```

In this code, three effects are applied. Order matters. The effects are applied in the order that they are specified in the transform property. In this case, the translate property is applied first, and then the translated object is scaled. Finally, the resulting object is skewed.


## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
