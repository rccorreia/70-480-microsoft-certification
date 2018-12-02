# Implementing bidirectional communication with the WebSocket API

The use of the WebSocket API allows the connection directly to a server over a socket. This is a much lighter weight connection and is fully bidirectional; both binary and text-based data can be sent and received.

## Note! Accepting Socket Connections

The full implementation of a WebSocket API requires that a webserver have a proper server-side implementation that can accept socket connections. Technologies such as Node.js work well for this purpose. The code samples assume such an  implementation exists.

The use of the WebSocket API is ideal for real-time applications such as messenger/chat applications, server-based games, and more advanced scenarios, such as WebRTC (Web Real-Time Communication) video conferencing. The data transmitted over WebSockets can be text based or binary.

[Here](examples/websocket.html) is the example page.

The WebSocket constructor accepts two parameters:
* The URL of the server-side socket to connect to, which is always prefixed with ws or wss for secure WebSocket connections;
* An optional list of subprotocols.

When the WebSocket constructor is called, the WebSocket API establishes a connection to the server.

When a successful connection is established, you can send and receive messages over the socket. To send messages, the WebSocket API provides the Send function. To receive messages, the WebSocket API provides the onmessage event handler.

The WebSocket API provides a mechanism to check the current status of the connection. To prevent an error, the readyState property is evaluated to ensure that it’s now open. readyState provides four possible values.

## Possible values of the WebSocket readyState

| Value      | Description                                                                                         |
|------------|-----------------------------------------------------------------------------------------------------|
| OPEN       | The connection is open                                                                              |
| CONNECTING | The connection is in the process of connecting and not ready for use yet. This is the default value |
| CLOSING    | The connection is in the process of being closed                                                    |
| CLOSED     | The connection is closed                                                                            |


The close method can be called with no parameters. It also allows the use of two optional parameters. A numerical code and a reason can be provided but isn’t mandatory.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)