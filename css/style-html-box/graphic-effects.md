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
|-----------------------|---------------------------------------------------------------------------------------------|
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
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Direction    | Specify the direction of the gradient as to right or to left. This parameter is optional and the default when blank is an up/down gradient effect. A diagonal effect can also be applied by specifying to bottom right or to bottom left. You may also specify an angle, as in 100deg. |
| Color stop…n | The second and subsequent parameters is the color to start with followed by the transitional colors known as the color stops. This tells the browser what color to start with and transition into with the gradient effect.                                                            |

## Applying a shadow effect



## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
