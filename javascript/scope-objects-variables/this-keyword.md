# Leveraging the this keyword

The context of the *this* keyword changes depending in what scope you are.

The keyword this is a special term that allows JavaScript developers to reference the containing object directly. The following code snippet demonstrates the context of the this keyword:

```
  <script>
    //Here, "this" references the global namespace
    this.navigator.geolocation
    window.onload = function () {
      //Here, "this" references the window object
      this...
      document.getElementById("aDiv").onclick = function()
      {
        //Here, "this" references the DIV element
        this…
      }
    }
  </script>
```

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
