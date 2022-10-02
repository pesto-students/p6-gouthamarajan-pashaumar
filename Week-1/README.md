
# When a user enters an URL in the browser, how does the browser fetch the desiredresult ?

When a user enters an URL in the browser

A) The browser checks the cache for a DNS record to find the corresponding IP address of the url.

* DNS(Domain Name System) is a database that maintains the name of the website (URL) and the particular IP address it links to.

B) If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server that hosts url.

* ISP is Internet Service Provider.
* The purpose of a DNS query is to search multiple DNS servers on the internet until it finds the correct IP address for the website.

C) The browser initiates a TCP connection with the server.
* Once the browser receives the correct IP address, it will build a connection with the server that matches the IP address to transfer information.
* To transfer data packets between your computer(client) and the server, it is important to have a TCP connection established. This connection is established using a process called the TCP/IP three-way handshake. This is a three-step process where the client and the server exchange SYN(synchronize) and ACK(acknowledge) messages to establish a connection.

D) The browser sends an HTTP request to the webserver.
* Once the TCP connection is established, it is time to start transferring data!

* The browser will send a GET request asking for the web page. Requests can be POST,PUT,PATCH,DELETE as well!

* This request will also contain additional information such as browser identification (User-Agent header), types of requests that it will accept (Accept header), and connection headers asking it to keep the TCP connection alive for additional requests. It will also pass information taken from cookies the browser has in store for this domain.

E) The server handles the request and sends back a response.

* The server contains a webserver (i.e., Apache, IIS) that receives the request from the browser and passes it to a request handler to read and generate a response.
* The request handler is a program (written in ASP.NET, PHP, Ruby, etc.) that reads the request, its’ headers, and cookies to check what is being requested and also update the information on the server if needed.

* Then it will assemble a response in a particular format (JSON, XML, HTML).
F) The server sends out an HTTP response.
* The server response contains the web page you requested as well as the status code, compression type (Content-Encoding), how to cache the page (Cache-Control), any cookies to set, privacy information, etc.
G) The browser displays the HTML content.

* The browser displays the HTML content in phases. First, it will render the bare bone HTML skeleton.
* Then it will check the HTML tags and send out GET requests for additional elements on the web page, such as images, CSS stylesheets, JavaScript files, etc.
* These static files are cached by the browser, so it doesn’t have to fetch them again the next time you visit the page.




![App Screenshot](https://camo.githubusercontent.com/c21d5ded784e7a75464b87fcf9881c2b99ae9b03648a60587661c76987ea3903/68747470733a2f2f646576656c6f7065722e6d6f7a696c6c612e6f72672f656e2d55532f646f63732f4c6561726e2f47657474696e675f737461727465645f776974685f7468655f7765622f486f775f7468655f5765625f776f726b732f73696d706c652d636c69656e742d7365727665722e706e67)

# What is the main functionality of the browser?

* A web browser, also known as a “browser,” is an application software that allows users to find, access, display, and view websites. Microsoft Internet Explorer, Google Chrome, Mozilla Firefox, and Apple Safari are all popular web browsers.

* A web browser’s primary function is to render HTML, the code that is used to design or “mark up” web pages. When a browser loads a web page, it processes the HTML, which may contain text, links, and references to images and other items like CSS and JavaScript functions. The browser then renders these objects in the browser window after processing them.

# What are High Level Components of a browser?

A) The user interface
* this includes the address bar, back/forward button, bookmarking menu, etc.
* Every part of the browser display except the window where you see the requested page.

B) The browser engine
* marshals actions between the UI and the rendering engine.

C) The rendering engine
* responsible for displaying requested content.
D) Networking
* for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

E) UI backend
* used for drawing basic widgets like combo boxes and windows.

* This backend exposes a generic interface that is not platform specific.

* Underneath it uses operating system user interface methods.

F) JavaScript interpreter
* Used to parse and execute JavaScript code.

G) Data storage

* The browser may need to save all sorts of data locally, such as cookies.
* Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

    ![App Screenshot](https://camo.githubusercontent.com/54639881eb2644b76d4ef373219deb7d733cd4335df490b4ec4a591b71c56b15/68747470733a2f2f7765622d6465762e696d6769782e6e65742f696d6167652f54344679564b707a7534574b46316b424e76586570626930387435322f50675058365a4d794b537746366b42387a4968422e706e673f6175746f3d666f726d617426773d31303030)

# What is rendering Engine and what is its use?

* A rendering engine is software that draws text and images on the screen. The engine draws structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS).

# Parsers and Processors (HTML, CSS, etc)

* The input to the HTML parsing process consists of a stream of code points, which are then passed through a tokenization stage followed by a tree construction stage to produce a Document object as an output.
* Mostly, the data handled by the tokenization stage comes from the network, but it can also come from a script running in the user agent, e.g. using the document.write() API.
* The tokenizer and the tree construction stage have only one set of states, but while the tree construction stage is working with one token, the tokenizer can be resumed.
* Because of this tree construction stage is often considered reentrant. To handle such cases, parsers have a script nesting level, which must initially be set to 0 and a parser pause flag, which must be initialized to false.

    ![App Screenshot](https://camo.githubusercontent.com/ad81a06e6641c7d323a41a09ac12c34209a366672af7acea946a4e53ee2011c8/68747470733a2f2f6d656469612e6765656b73666f726765656b732e6f72672f77702d636f6e74656e742f75706c6f6164732f32303230303531363030313834312f556e7469746c65642d4469616772616d3130372e706e67)

# Render-tree Construction, Layout, and Paint
* The DOM and CSSOM trees are combined to form the render tree.

* Render tree contains only the nodes required to render the page.

* Layout computes the exact position and size of each object.

* The last step is paint, which takes in the final render tree and renders the pixels to the screen.

    ![App Screenshot](https://camo.githubusercontent.com/a2880f16e3a6e56fa4a767d8dca5f75fb2c70de8a7a793f857a8e00e46ef1dd8/68747470733a2f2f7765622d6465762e696d6769782e6e65742f696d6167652f4334376759795759564d4d68446d7459534c4f57617a7579655046322f62365a324775365544317831696d4f7531744a562e706e673f6175746f3d666f726d617426773d31363030)
* Construction of render tree

    i) Starting at the root of the DOM tree, traverse each visible node.

    ii) For each visible node, find the appropriate matching CSSOM rules and apply them.
    
    iii) Emit visible nodes with content and their computed styles.

* The final output is a render tree that contains both the content and style information of all the visible content on the screen. With the render tree in place, we can proceed to the "layout" stage.
* The output of the layout process is a "box model," which precisely captures the exact position and size of each element within the viewport: all of the relative measurements are converted to absolute pixels on the screen.
* Finally, now that we know which nodes are visible, and their computed styles and geometry, we can pass this information to the final stage, which converts each node in the render tree to actual pixels on the screen. This step is often referred to as "painting" or "rasterizing."
* The time required to perform render tree construction, layout and paint varies based on the size of the document, the applied styles, and the device it is running on: the larger the document, the more work the browser has; the more complicated the styles, the more time taken for painting also (for example, a solid color is "cheap" to paint, while a drop shadow is "expensive" to compute and render).






