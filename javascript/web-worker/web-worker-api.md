# Creating a worker process with the Web Worker API

[Here](examples/web-worker.html) is the example page.

The Web Worker API is based on the JavaScript messaging framework. This underlying structure enables your code to send parameters to a worker and have the worker send results back. A basic web worker is established by creating a separate file to contain the script that will be processed on the separate thread.

```
  var webWorker = new Worker("workercode.js");
```

## Worker object operations

| Method      | Description                                                                                                                                                                                                                                                                                  |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| postMessage | Starts the worker process. This method expects a single parameter containing the data to pass to the worker thread. If nothing is required in the worker thread, an empty string can be supplied.                                                                                            |
| terminate   | Stops the worker process from continuing.                                                                                                                                                                                                                                                    |
| onmessage   | Specifies the function for the worker thread to call back to when complete. This function accepts a single parameter in the form of EventData with a property named data containing the values.                                                                                              |
| onerror     | Specifies a function to call when an error occurs in the worker thread. The onerror method receives event data, including the following:   message: textual message of the error   filename: the filename the error occurred in   lineno: the line number in the file that created the error |

As soon as the Worker object is instantiated, it’s available for use at any time. All that’s needed to start the process is to call the postMessage method:

```
  webWorker.postMessage("");
```

As soon as the webWorker is running, the main application continues as usual. If something occurs that the worker process should be canceled, a call to the terminate method would achieve this:

```
  webWorker.terminate();
```

After the worker process completes and results need to be processed, the onmessage function is called from the worker. This should be set up before starting the worker:

```
  webWorker.onmessage = function(evt) {…}
```

That’s everything required on the calling side or in the web application to create and manage a worker process. Next, you need to create the worker code itself. For this, you create the workercode.js file that was used in the constructor. The first line of the file will be the onmessage property being assigned a function to process:

```
  onmessage = function(e){…}
```

This tells the runtime the entry point to the work to be run within the worker process. Somewhere in the worker process, where a result should be sent back to the calling application, the postMessage method is called:

```
  onmessage = function(e){
    …
    self.postMessage(result);
  }

```

That’s what’s involved in creating a worker process. In the last piece, notice the use of the self keyword. The self keyword is similar to the this keyword. The worker process runs in its own context, meaning that it has its own global namespace. The self keyword gives access to the global namespace within the worker process.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)