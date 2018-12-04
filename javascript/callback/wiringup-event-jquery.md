# Wiring up an event with jQuery

Aside from being cross-browser friendly, it includes much flexibility in how event handlers are assigned to objects. jQuery can assign styles or events to everything in the result set in one line.

```
  $("document").ready(function () {
    $("td").click(function () { });
  });
```

In this code, all td elements are assigned a click event. It could be one or fifty tds.

```
  $("document").ready(function () {
    $("#GameRow td").click(function () { });
  });
```

This way you can select only the tds inside (children of) a container with id "GameRow".

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)