# Adding or modifying HTML elements

You should modify the layout of your webpages at run time depending on what your users do. This is how to access or reference the elements so you can manipulate them:

## DOM

The Document Object Model (DOM) connects web pages to scripts or programming languages.

It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

The browser produces an outline based on the HTML hierarchy presented to it and displays this in the browser to the user. Behind the scenes, unknown to the user, the browser constructs a DOM. The DOM’s application programming interface (API) is exposed as objects with properties and methods, enabling you to write JavaScript code to interact with the HTML elements rendered to the page.

Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

For example, the standard DOM specifies that the getElementsByTagName method in the code below must return a list of all the ```<P>``` elements in the document:

```
var paragraphs = document.getElementsByTagName("P");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
```

All of the properties, methods, and events available for manipulating and creating web pages are organized into objects (e.g., the document object that represents the document itself, the table object that implements the special HTMLTableElement DOM interface for accessing HTML tables, and so forth).

## Selecting itens in the DOM

You have a few choices when it comes to using JavaScript to access the DOM. You can access DOM elements through a global object provided by the browser, called **document**, or through the elements themselves after you obtain a reference to one.

| Method                  | Usage description                                                                  |   |   |   |
|-------------------------|------------------------------------------------------------------------------------|---|---|---|
| getElementById          | Gets an individual element on the page by its unique id attribute value            |   |   |   |
| getElementsByClassName  | Gets all the elements that have the specified CSS class applied to them            |   |   |   |
| getElementsByTagName    | Gets all the elements of the page that have the specified tag name orelement name  |   |   |   |
| querySelector           | Gets the first child element found that matches the provided CSS selector criteria |   |   |   |
| querySelectorAll        | Gets all the child elements that match the provided CSS selector criteria          |   |   |   |

You can see examples of this methods [here](examples/html-source-to-work-with-the-DOM.html)

Because the DOM represents the document as nodes and objects, the return of getElementsByTagName is a *NodeList*