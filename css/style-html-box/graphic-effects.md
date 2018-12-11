# Applying styles to alter graphic effects

[Here](examples/style-box.html) is the example page.

## Applying transparency/opacity

The value used in setting the opacity is a ratio from 0 to 1.0. A setting of 0 indicates that the element is fully transparent, essentially invisible.
A value of 1.0 indicates that the element is fully opaque, the default when no opacity value is specified.

```
  p {
    opacity: 0.4;
  }
```

## Applying a background image

Any HTML element can also contain a background image.

```
  p {
    background-image: url('image.jpg');
    color: white;
  }
```

### Configuration options for the background image

| Property              | Description                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------- |
| size                  | Changes the dimensions of the image                                                         |
| repeat                | Specifies whether the image should be repeated/tiled through the available space of the box |
| clip                  | Specifies whether the image should be clipped at a border                                   |
| position-x/position-y | Specifies the origin position of the image within the box                                   |

All the properties are prefixed with the token "background-".

## Applying gradients

A gradient effect changes the color of an object gradually from one spectrum to another. There are two types of gradient effects supported. The first is a linear gradient where the color changes in a line across the object in any direction. The other gradient is a radial gradient where the color starts in the center and changes toward the outer edges.

```
  background:linear-gradient(blue,gray);
```

### Parameters for the linear-gradient function

| Parameter    | Description                                                                                                                                                                                                                                                                            |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Direction    | Specify the direction of the gradient as to right or to left. This parameter is optional and the default when blank is an up/down gradient effect. A diagonal effect can also be applied by specifying to bottom right or to bottom left. You may also specify an angle, as in 100deg. |
| Color stop…n | The second and subsequent parameters is the color to start with followed by the transitional colors known as the color stops. This tells the browser what color to start with and transition into with the gradient effect.                                                            |

## Applying a shadow effect

There are two CSS3 properties to control the shadow effect: box-shadow and text-shadow.
The box-shadow controls the shadow effect surrounding the box of the HTML element. The text-shadow property controls the shadow of text.

### Box Shadows

#### Parameters for the box-shadow property

| Parameter | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| h-shadow  | Required. Specifies the position of the horizontal shadow. The value can also be a negative number. |
| v-shadow  | Required. Specifies the position of the vertical shadow. The value can also be a negative number.   |
| blur      | Specifies the distance of the blur effect. This parameter is optional and defaults to 0.            |
| spread    | Specifies the size of the shadow.                                                                   |
| color     | Specifies the color of the shadow.                                                                  |
| inset     | Specifies that the shadow should be inside the box instead of outside the box.                      |

```
  div{
    position: absolute;
    left: 50px;top: 50px;
    width: 100px;
    height: 100px;
    border: solid 1px black;
    box-shadow: 10px 10px;
  }
```

The spread parameter specifies the size of the shadow. In the context of real-world objects and their shadows, the spread is like indicating how close a light source is to an object.

The shadow itself is a full-size box.

If the parameter inset is omitted, the shadow is created on the outside of the box. If inset is specified, the shadow is then created on the inside of the box.

The color property accepts values as a hex code, rgb(), or literal color.

#### Note - understanding h-shadow and v-shadow parameters

h-shadow and v-shadow parameters can accept negative values. To place the shadow on the left side of the box instead of the right, specify a negative value for the h-shadow. To place the shadow on top of the box instead of the bottom, specify a negative value for the v-shadow parameter.

### Text Shadows

The CSS property to apply a shadow to text is called text-shadow.

#### Text-shadow parameters

| Parameter | Description                                                                                                    |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| h-shadow  | Required. Specifies the position of the shadow along the horizontal axis. This value accepts negative numbers. |
| v-shadow  | Required. Specifies the position of the shadow along the vertical axis. This value accepts negative numbers.   |
| blur      | Specifies the distance of the blur effect. This parameter is optional and defaults to 0.                       |
| color     | Specifies the color of the shadow.                                                                             |

```
  p {
    position: absolute;
    left: 250px;
    top: 250px;
    text-shadow: -10px -10px;
  }
```

## Applying clipping

(Deprecated)
The clip property allows you to specify what portion of an element is visible. The clip property takes only one parameter, the shape to clip to.

```
  img{
    position: absolute;
    clip: rect(25px, 50px, 50px, 25px);
  }
```

In the above code sample, the clip region is set to be a rectangle. The first two parameters of the rect function build the coordinates for what part of the image will be clipped. The parameters run in clockwise order as top, right, bottom, and left sides of the rectangle. In addition, all measurements are taken from the left of the top edge of the source box being clipped. So, in the above code sample, a region of the image is defined as 25 px from the top to form the top edge of the clipped region, 50 px from the left to form the right edge of the clipped region, 50 px from the top to form the bottom edge of the clipped region, and 25 px from the left to form the right edge of the clipped region. This essentially creates a rectangle starting from the point (25px, 25px) and with a height and width of 25px.

## Sources

[MDN](https://developer.mozilla.org)

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
