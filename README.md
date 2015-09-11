# Socket.io
I chose to work on web sockets because I was pretty amazed by firebase and wanted to get to know a little more
about the magic making that possible. WebSockets are a more direct means of communicating between a server and client.
In the HTTP req/res cycle, a server cannot initiate communication with a client but only respond to requests. WebSockets are
a two way connection between client and server allowing the server to quickly send messages to the server and receive client
messages, both without the overhead of HTTP req/res. This is necessary for anything being delivered in real-time.

Because WebSockets are a relatively new protocol, Socket.IO will handle graceful degradation for browsers which do not support WebSockets using multiple HTTP requests and long-polling  as an alternative. Because Socket.IO handles communication between the client and server in necessarily has front and back end aspects: 'A server that integrates with (or mounts on) the Node.JS HTTP Server: `socket.io`' and 'A client library that loads on the browser side: `socket.io-client`'.

While many alternative frameworks exist, Socket.IO is one of the most popular and based on my experience working the tutorial,
will be my go to for using Sockets and learning more about them. Socket.IO is an open source project maintained by its contributors. [This article](http://www.html5rocks.com/en/tutorials/websockets/basics/) was particularly helpful in understanding what was going on under the hood. It was originally written in 2010 and seems to be updated as recently as Feb 2012 so there are likely more current resources but the article being written as a presentation of new technology was helpful.

Interview questions might be along the lines of:
1. What problem do WebSockets solve?
2. Where would one not want to use WebSockets?
3. What security considerations need to be made when using WebSockets?

Answers coming soon!

To run this example, just clone the repository and npm install. I would recommend working through [the tutorial](http://socket.io/get-started/chat/) in able to best understand what is going on.
