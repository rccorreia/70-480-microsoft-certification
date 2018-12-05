# Understanding web worker limitations

Be aware of the limitations imposed on workers.

## Passing Parameters

The postMessage method accepts a parameter that enables it to pass data to the worker that it might need to operate on or with. The postMessage parameter is a string—it can take any serializable object such as native data types, JSON objects, or XML. The parameter can’t be a function.

```
  var value = document.getElementById("inputValue").value;
  worker.postMessage(value);
```

Then in the worker, the value would be accessed like this:

```
  onmessage = function (evt) {
    var work = evt.data;
  }
```

## Number of workers

Although no limit is imposed on how many workers can be processed or created concurrently, the number of workers used is something that you need to be pay attention to. Creating workers is a heavy operation. Each worker creates threads at the operating system level and their use should be managed accordingly.

## DOM access

Workers operate in their own global context, which means that they don’t have access to the DOM of the page that invoked them. The DOM shouldn’t be manipulated from a worker process. The worker context has no access to the window object, document object, or any parent object.

## Subworkers

Following the same patterns as for a worker from the main webpage, a worker can create workers as well.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)