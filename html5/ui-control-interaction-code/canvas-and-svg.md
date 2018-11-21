# Implementing graphics with HTML5 ```<canvas>``` and SVG

## Graphics with ```<canvas>``` element

[Here](examples/html-canvas-example.html) is an example page for the canvas section.

The HTML5 specification introduces the ```<canvas>``` webpage element, which provides a blank canvas on which you can draw dynamically. You can draw lines, text, and images on the canvas and manipulate them with JavaScript.

Here is the markup for a ```<canvas>``` element:
```
<canvas id="drawingSurface" width="600" height="400">
  Your browser does not support HTML5.
</canvas>
```

Which corresponds to:

<canvas id="drawingSurface" width="60" height="40">
  Your browser does not support HTML5.
</canvas>

Yes, a blank canvas.

To draw on the canvas, you need to understand the coordinate system that the canvas uses.

The canvas provides a fixed (x,y) coordinate system in which the top-left corner of the canvas is (0,0). In this case, the bottom-left corner of the canvas is (0,400), the top-right corner is (600,0), and the bottom-right corner is (600,400). You should be fairly used to this type of system because it matches the browser window coordinate system, with (0,0) in the top-left corner. However, the position of the canvas in the browser window is irrelevant to the drawing methods you use to draw on the canvas. The coordinates for drawing on the canvas are always based on the coordinates within the canvas itself, where the top-left pixel is (0,0).

We will use in the example the 2d context.

### Drawing lines

At the most basic level, you can draw lines on the canvas with the 2d context object you are referencing. The context object provides the following methods for drawing lines, as listed below:

| Method    | Description                                                |
|-----------|------------------------------------------------------------|
| beginPath | Resets/begins a new drawing path                           |
| moveTo    | Moves the context to the point set in the beginPath method |
| lineTo    | Sets the destination end point for the line                |
| stroke    | Strokes the line, which makes the line visible             |

You can use the code below to draw three lines in the canvas:

```
ctxt.beginPath();
ctxt.moveTo(10, 10);
ctxt.lineTo(225, 350);
ctxt.lineTo(300, 10);
ctxt.lineTo(400, 350);
ctxt.stroke();
```

Exploring the stroke method in more depth is worth the effort. If you were creating a chart or a graph, you might want to change the color of your lines so that they stand out from the axis. You might want to change the thickness. You do this by changing some properties on the context object before calling the stroke method.

### Drawing curves

Methods for drawing curves

| Method           | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| arc              | A standard arc based on a starting and ending angle and a defined radius |
| quadradicCurveTo | A more complex arc that allows you to control the steepness of the curve |
| bezierCurveTo    | Another complex arc that you can skew                                    |

#### arc

Parameters required to draw an arc:

| Parameter            | Description                                                                                                                                 |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| X, Y                 | The first two parameters are the X and Y coordinates for the center of the circle.                                                          |
| radius               | The third parameter is the radius. This is the length of the distance from the center point of the circle to the curve.                     |
| startAngle, endAngle | The fourth and fifth parameters specify the starting and ending angles of the arc to be drawn. This is measured in radians, not in degrees. |
| counterclockwise     | The final parameter specifies the drawing direction of the arc.                                                                             |

#### quadradicCurveTo

Parameters required for the quadraticCurveTo method

| Parameter          | Description                                                                                                                                                                   |
|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| controlX, controlY | These parameters define the control point, relative to the top left of the canvas, that is used to “stretch” the curve away from the line formed by the start and end points. |
| endX, endY         | This is the point where the curve should end.                                                                                                                                 |

#### bezierCurveTo

Parameters required for the bezierCurveTo method

| Parameter            | Description                                                                                       |
|----------------------|---------------------------------------------------------------------------------------------------|
| controlX, controlY   | The first two parameters specify the first control point that is used to stretch out the curve.   |
| Control2X, control2Y | The second two parameters specify the second control point that is used to stretch out the curve. |
| endX, endY           | The final two parameters specify the end point for the curve.                                     |

### Using *path* methods

When using the context object to draw, you always need a starting point and an ending point. The ending point for one stroke also can become the starting point for the next stroke. You do this by calling the beginPath method on the context object and then drawing all your lines before calling either the closePath method (which ends the line) or the beginPath method (which starts a new line) again.

### Using *rect* method

Some shapes are built in. Look at the built-in functionality to build rectangles:

Parameters required for drawing rectangles:

| Parameter | Description                                                                                                                    |
|-----------|--------------------------------------------------------------------------------------------------------------------------------|
| x,y       | The x-coordinate and y-coordinate define the starting position of the rectangle. This is the top-left corner of the rectangle. |
| width     | This defines the width of the rectangle.                                                                                       |
| height    | This defines the height of the rectangle.                                                                                      |

### Using the *fill* method

It is simple as passing the context propertie ```fillstyle``` the color you want and them calling the method ```fill()```. The rect method gets a special fill methor, ```the fillRect()```

#### Solid Color

Filling a shape with a color is as simple as setting the fillStyle property to a color and calling the fill method.

```
  ctxt.fillStyle = "blue";
  ctxt.fill();
```

Or, using it with the rect method

```
  ctxt.fillStyle = "blue";
  ctxt.fillRect(300—(x / 2), 200—(y / 2), x, y);
```

#### Fill with Gradient

Call the createLinearGradient method on the context object to get a CanvasGradient Object.
Add stops to this object and them assign this to the fillStyle of the context.

Or you can use radial gradient. This method takes six parameters, which specify the center point and radius of two circles and the color transitions through the stops along the cone formed by the two circles.

#### External Image Fill Pattern

An external image is applied as a pattern throughout the shape.
It calls the createPattern method and passes it a reference to an Image
object and a repeat pattern. The repeat pattern can be no-repeat, repeat-x, or repeat-y, but it defaults to repeat if you don’t specify anything. You need to assign an event handler to the onload event of the Image object to ensure that you draw the pattern only after the image loads. Otherwise, the code could run before the picture is rendered, and the pattern won’t display.

### Drawing Images

To draw an image on a canvas, you use the drawImage method of the context object.
This method takes an Image object and some (x,y) coordinates to define where the image should be drawn.

If you want to resize the image, you can replace the drawImage method call with the following line:
```
The Original:

  ctxt.drawImage(img, 0, 0);

With Resize:

  ctxt.drawImage(img, 0,0,img.width * .5, img.height * .5);
```

This reduces the image size by 50 percent.

### Drawing Text

You'll need to use the strokeText method and the font property.

In its simplest form, drawing text requires only the following code:

```
  ctxt.strokeText("1. Text with default font", 100, 100);
```

Running the following code changes the font size to 24 and the font family to Arial:

```
  ctxt.font = "24px arial";
  ctxt.strokeText("2. Text with altered font", 100, 125);
```

To color your text, you could add this code:

```
  ctxt.font = "24px arial";
  ctxt.strokeStyle = "Red";
  ctxt.strokeText("3. Text with altered colored font", 100, 160);
```

To draw solid-colored text, add the following code, which sets the fillStyle property and calls the fillText method instead of the strokeStyle and StrokeText methods:

```
  ctxt.font = "24px arial";
  ctxt.fillStyle = "Red";
  ctxt.fillText("4. Text with altered colored font", 100, 185);
```

To ensure your text is centered, add this code:

```
  ctxt.font = "24px arial";
  ctxt.textAlign = "center";
  ctxt.fillStyle = "Red";
  ctxt.fillText("5. Text with altered colored font Centered.", drawingSurface.width / 2,
  drawingSurface.height / 2);
```

### Accessibility concerns with canvas

The ```<canvas>``` element on its own is just a bitmap and does not provide information about any drawn objects. Canvas content is not exposed to accessibility tools like semantic HTML is. In general, you should avoid using canvas in an accessible website or app. The following guides can help to make it more accessible.

* [MDN Hit regions and accessability](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility)
* [Canvas accessibility use cases](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
* [Canvas element accessibility issues](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
* [HTML5 Canvas Accessibility in Firefox 13 – by Steve Faulkner](http://www.paciellogroup.com/blog/2012/06/html5-canvas-accessibility-in-firefox-13/)
* [Best practices for interactive canvas elements](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)


## Scalable Vector Graphics (SVG)

[Here](examples/html-svg-example.html) is an example page for the svg section.

Scalable Vector Graphics (SVG) is an XML-based language for creating two-dimensional graphics. It’s implemented by using tags defined by the SVG XML namespace and embedded in HTML5 documents within opening and closing ```<svg>``` elements.

SVG objects don’t lose any quality as users zoom in or out. You can access SVG objects via the DOM, and—similar to HTML elements—SVG elements support attributes, styles, and event handlers. The ```<svg>``` element provides a container in which to render graphics; SVG renders inline with the page’s layout. Here’s an example of an SVG graphic with event handlers:

```
<head>
  <script language="javascript">
    function Red(evt) {
      var circle = evt.target;
      circle.setAttribute("style", "fill: red");
    }

    function Green(evt) {
      var circle = evt.target;
      circle.setAttribute("style", "fill: green");
    }
  </script>
</head>
<body>
  <svg>
    <circle id="Circle" cx="50" cy="50" r="50" fill="green" onmouseover="Red(evt)"
    onmouseout="Green(evt)"/>
  </svg>
</body>
```

All the shape-drawing and line-drawing functionality you saw in the  ```<canvas>``` element discussion exists for SVG as well, although the syntax is different.

The following code produces a slightly more elaborate graphic.

```
  <svg>
    <rect id="lightStandard" x="100" y="100" width="60" height="200" fill="black"/>
    <circle id="redLight" cx="129" cy="145" r="25" fill="red"/>
    <circle id="amberLight" cx="129" cy="205" r="25" fill="yellow"/>
    <circle id="greenLight" cx="129" cy="265" r="25" fill="green"/>
  </svg>
```

SVG also supports the same basic shape-drawing functions as the canvas context. The following code segment shows the use of the polyline, polygon, line, and ellipse:

```
  <svg>
    <polygon points="10,15 30,35 10,85 100,85, 70,35,100,15" fill="purple"/>
    <polyline points="10,150 30,170 50,132 62,196 78,165 96,170"
    style="stroke:orange; fill:none; stroke-width:5;"/>
    <line x1="150" y1="100" x2="150" y2="150" style="stroke:blue;stroke-width:3"/>
    <ellipse cx="250" cy="150" rx="30" ry="55" fill="green"/>
    <text x="10" y="10" style="stroke: black;stroke-width:1;">
    Examples of SVG Shapes and Text</text>
  </svg>
```

SVG also supports rendering existing graphics in the form of external image files, as shown here:

```
  <svg id="mySVG">
    <image href="orange.jpg" width="250" height="100"/>
  </svg>
```

### Important!

In some cases, using SVG graphics is simpler than using the ```<canvas>``` element. As the examples have shown, you can create SVG images declaratively directly within the HTML itself. However, as you increase the number of objects in an SVG rendering, performance can become a concern. **In cases where performance is a consideration**, using the ```<canvas>``` element is a preferable approach.

## Sources

[MDN](https://developer.mozilla.org/)

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)