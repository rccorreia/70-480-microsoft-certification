# Applying styles to alter appearance attributes

[Here](examples/style-box.html) is the example page.

## Altering the size

The size of any element is controlled by its *height* and *width* properties. These can be set on any object or class in CSS. By default, an object will size itself to be able to display its contents. So, a div element with some text inside it will have a width and height that is sufficient to display the text.

The size can be changed by setting a value for the *width* and/or *height*.

Percentage of its parent element:

```
  table {
    height: 50%;
    width: 50%;
  }
```

Specific value:

```
  div {
    width: 200px;
    height: 100px;
  }
```

## Bordering

Using the border property, we can control the style, spacing, color, and width of the border.

You need to style the border: solid border, dashed border, dotted line border, grooved line border, and so on.
Then color it with the border-color property.
Border-spacing is used to set the amount of space desired between adjacent elements.
The border-width is a property that is set using a fixed measurement, in pixels for example.

```
  p {
    border-style: solid;
    border-color: red;
    border-spacing: 150px;
    border-width: 8px;
  }
```

### Important! Note

The border needs to exist before it can have any visible changes done to it. This is why in the above example, the border-style is set first.

The border CSS property supports a shorthand technique where you can specify the key properties in a single line.

```
  p {
    border: 8px solid red;
  }
```

You can have different values specific to each side of the box.

```
  p {
    border-top: 15px solid black;
    border-left: 10px solid black;
    border-right: 10px solid black;
    border-bottom: 5px solid black;
  }
```

## Padding and margin

As you look from the inside to the outside of the element there is the padding, the border, and the margin. 

### Padding

In order to create space between the text and the border, you must increase the padding.

```
  p {
    padding: 10px;
  }
```

The padding can be specified as different values for all four sides.

```
  p {
    padding: 10px 10px 10px 10px;
  }
```

or

```
  p {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
```

### Margin

The margin is the space between the border of your element and the surrounding elements.
You can specify a single value to be applied equally to all four sides, specify individual values in a single line, or specify each side of the box individually.

```
  p {
    margin: 5px;
  }
```

or

```
  p {
    margin: 5px 5px 5px 5px;
  }
```

or

```
  p {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
  }
```

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
