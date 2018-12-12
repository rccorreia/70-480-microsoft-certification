# Implementing a layout using regions, grouping, and nesting

Regions is a new CSS3 construct that allows you to have content flow through various regions in a webpage.

```
  <body>
    <div class="regionLayout">
    <div id="region1"></div>
    <div id="region2"></div>
    <div id="region3"></div>
    …
    <div id="region-n"></div>
    </div>
  </body>
```

Layout of a webpage using regions requires two things: a content source and the regions that will be the content destination. The content can
come from another page via an iframe or another element on the page itself.
By adding an iframe to the page, you can set the iframe src to the content that will be rendered in the regions:

```
  <iframe src="content_source.html"/>
```

CSS is used to control the functionality of the content from the source to the destination. The new CSS properties called flow-into and flow-from are used to assign the role
of the HTML elements in the region layout. The flow-into property is assigned a value to hold the content. This value can be anything

```
  .content_source{
    flow-into: myflow;
  }
```

Then the destination of the content is defined in a class like this:

```
  .content_regions{
    flow-from: myflow;
  }
```

As long as the same name is used in the flow-into and the flow-from, they will work together.
This is called a named flow. All the elements forming the regions to display the content source in the same named flow is called a region chain. You can have multiple sources and multiple region chains. The name assigned to the flow-* properties are used to coordinate which content source goes into which regions.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
