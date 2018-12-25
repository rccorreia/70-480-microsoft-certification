# Create a web worker process summary

* Web workers allow the JavaScript runtime to provide multithreading.
* Web workers can have sub-workers.
* The number of workers that you can use is limitless, but too many workers can hinder performance.
* Web workers can receive a single parameter containing any data needed for the worker.
* Web workers don’t have access to the DOM of the calling page.
* Use setTimeout to delay before running a script function. Use setInterval to repeat a script function after every specified interval.

## Resume

You have to instantiate a new webworker specifying the file where it is, like this:

```
  var webWorker = new Worker("workercode.js");
```

- *postMessage* method starts the webworker. We can pass data with the single parameter it expects.
- *terminate* method is used to stop the worker.
- *onmessage* will be the callback function called by the worker when it complets the job.
- *onerror* it is called when an error occurs.

In the file with the worker code itself, we need to specify the function for the *onmessage* method. This way, we tell the runtime it is the entry point.
To send back the result of the work, do this:

```
  self.postMessage(result);
```

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
