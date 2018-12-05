# Configuring timeouts and intervals

You can set up a web worker to run on a specified interval in the background. This is done by using any existing setTimeout or setInterval methods. The setTimeout method calls a specified function after the specified delay. The setInterval calls the specified function repeatedly after each specified time interval. 

For example, the following code runs the worker after 3 seconds:

```
  var work = new Worker("workerFile.js");
  setTimeout(function(){
    work.postMessage("");
  },3000);
```

However, the following code runs the worker every 3 seconds:

```
  var work = new Worker("workerFile.js");
  setInterval(function(){
    work.postMessage("");
  },3000);
```

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)