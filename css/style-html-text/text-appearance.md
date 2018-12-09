# Apply styles to text appearance

[Here](examples/style-text.html) is the example page.

Any of these styling techniques can be applied in combination or individually.

## Applying color to text

The color of text can be changed by specifying the color property to the CSS element. CSS3 accepts the color value in any of the following three methods.

* Hexadecimal value: Specify the color as a hexadecimal value, for example as #00FF00 to display the text in green. The first two digits (base 16) are the value for Red, the second two digits are the value for Green, and the last two digits are the value for Blue.

* Color name: Use a word to specify the color value, such as green to display the text in green.

* RGB function: Specify the color value using the RGB function, which takes three parameters, each representing a color spectrum bit value from 0 to 255. For example, rgb(0,255,0) specifies green as the text color.

```
  <style>
    h1{
      color:#00FF00;
    }
    h2 {
      color: green;
    }
    h3{
      color: rgb(0,255,0);
    }
  </style>
```

## Applying bold to text

CSS also provides access to other properties of the text display via the font object. The font object provides the ability to make text bold or italic.

```
  p {
    font-weight: bold;
  }
```

The font-weight CSS property accepts the following values to specify how bold you would like the text to be: lighter, normal, bold, and bolder. In addition, the numeric values 100 (lighter) to 900 (darker) are supported. The values increase by 100, providing nine values in total to control the weight of the text.

## Applying italic style to text

Through the font object, you can also make specific text italic. This is done by specifying the font-style for the text.

```
  p{
    font-style:italic;
  }
```

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
