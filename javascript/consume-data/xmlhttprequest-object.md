# Using the XMLHttpRequest object

JavaScript provides built-in support for receiving HTML data via the XMLHttpRequest object. The object makes a call to a web service, REST API, or other data provider services. The advantage of doing this via JavaScript on the client side is to be able to reload portions of the page from an external source without having to post the entire page back to the server.

XMLHttpRequest makes an HTTP request and expects to receive back data in XML format.

Both synchronous and asynchronous calls are supported.

## Available events of the XMLHttpRequest object

| Events             | Description                                                                                      |
|--------------------|--------------------------------------------------------------------------------------------------|
| Onreadystatechange | Sets an event handler for when the state of the request has changed. Used for asynchronous calls |
| Ontimeout          | Sets an event handler for when the request can’t be completed                                    |

## Available methods of the XMLHttpRequest object

| Method                | Description                                                                  |
|-----------------------|------------------------------------------------------------------------------|
| Abort                 | Cancels the current request                                                  |
| getAllResponseHeaders | Gives a complete list of response headers                                    |
| getResponseHeader     | Returns the specific response header                                         |
| Send                  | Makes the HTTP request and receives the response                             |
| setRequestHeader      | Adds a custom HTTP header to the request                                     |
| Open                  | Sets properties for the request such as the URL, a user name, and a password |

## Available properties of the XMLHttpRequest object

| Property        | Description                                                                                   |
|-----------------|-----------------------------------------------------------------------------------------------|
| readyState      | Gets the current state of the object                                                          |
| Response        | Gets the response returned from the server                                                    |
| responseBody    | Gets the response body as an array of bytes                                                   |
| responseText    | Gets the response body as a string                                                            |
| responseType    | Gets the data type associated with the response, such as blob, text, arraybuffer, or document |
| responseXML     | Gets the response body as an XML DOM object                                                   |
| Status          | Gets the HTTP status code of the request                                                      |
| statusText      | Gets the friendly HTTP text that corresponds with the status                                  |
| Timeout         | Sets the timeout threshold on the request                                                     |
| withCredentials | Specifies whether the request should include user credentials                                 |

In its simplest form, a request to the server using the XMLHttpRequest object looks like this:

```
  <script>
    $("document").ready(function () {
      $("#btnGetXMLData").click(function () {
        var xReq = new XMLHttpRequest();
        xReq.open("GET", "myXMLData.xml", false);
        xReq.send(null);
        $("#results").text(xReq.response);
      });
    });
  </script>
```

## Parameters for the XMLHttpRequest open method

| Parameter | Description                                                                                                                                        |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Method    | The HTTP method being used for the request: GET, POST, etc.                                                                                        |
| URL       | The URL to make the request to.                                                                                                                    |
| async     | A Boolean value to indicate whether the call should be made asynchronously. If true, an event handler needs to be set for the onreadystatechanged. |
| User name | A user name if the destination requires credentials.                                                                                               |
| Password  | A password if the destination requires credentials.                                                                                                |

### Important!

The open method doesn’t make any server requests. If the user name and password is specified, it doesn’t send this information to the server in the open method. When the send method is called, the user name and password aren’t passed to the server either. The credentials are passed to the server only in response to a 401 security response from the server.

## Handling errors

The XMLHttpRequest object provides some mechanisms for handling errors. The most common error to account for is a timeout error. By default, the value of the timeout is zero, which is infinite. A timeout value should always be specified. The timeout is expressed in milliseconds. The code is updated as follows:

```
  var xReq = new XMLHttpRequest();
  xReq.open("GET", "myXMLData.xml", false);
  xReq.timeout = 2000;
  xReq.ontimeout = function () {
    $("#results").text("Request Timed out");
  }
  xReq.send(null);
  $("#results").text(xReq.response);
```

## Asynchronous call

```
  var XMLHTTPReadyState_COMPLETE = 4;
  
  var xReq = new XMLHttpRequest();
  xReq.open("GET", "myXMLData.xml", true);
  xReq.timeout = 2000;
  xReq.ontimeout = function () {
    $("#results").text("Request Timed out");
  }

  xReq.onreadystatechange = function (e) {
    if (xReq.readyState == XMLHTTPReadyState_COMPLETE) {
      if (xReq.status = "200") {
        $("#results").text(xReq.response);
      } else {
        $("#results").text(xReq.statusText);
      }
    }
  }
  xReq.send(null);
```

## JSon instead of XML

The same code that has been used so far to retrieve XML data can also be used to make a request for JSON data. 
The only difference is the name of the URL being passed. The endpoint is a data source that returns JSON-formatted data instead of XML.

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)