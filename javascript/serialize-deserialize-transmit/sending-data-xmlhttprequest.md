# Sending data by using XMLHttpRequest

The XMLHttpRequest object itself is agnostic to sending or receiving. It can accomplish both tasks based on how the object is set up. To send data, the send method must have data passed into it, and that data can be transmitted to the endpoint specified in the URL of the open method. The following code sends the XML data to the server:

```
  var xmlData = "<Person firstname='Rick' lastName='Delorme' hairColor='Brown' eyeColor='Brown' /> ";
  var xReq = new XMLHttpRequest();
  xReq.open("POST", "/ReceiveXMLData.aspx", false);
  xReq.responseType
  xReq.send(xmlData);
```
When data is transmitted to the server, it needs to be serialized into a format that the URL endpoint can understand. If the endpoint is expecting XML, the data must be XML; if it’s expecting binary data, the data must be in a binary format.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
