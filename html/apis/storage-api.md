# Using the (Web) storage API

[Here](examples/storage-api.html) is the example page.

Web Storage can replace the concept of cookies, but it's not supported by all browsers.

There are two forms of Web Storage exist: local and session storage.

The Web Storage API is available as a global object.

Web Storage is implemented as name value pairs and stored as strings. Any data that you can put into a string format can be stored in Web Storage.
You can serialize the object into a JSON string, give it a key, and then store it in web storage: 
```
  localStorage.setItem("item1", JSON.stringify(objectOfItem1));
```

## Local Storage

It is persistent. It is still available even if the user closes the browser. To access local storage, use the *localStorage* object.

## Session Storage

It is available only for the duration of the sesssion. If the user closes the browser, the data is lost. To access session storage, use the *sessionStorage*
object.

## Important!

The localStorage and sessionStorage objects provide exactly the same API. The only difference is the lifetime of the storage. *sessionStorage* is cleared when the session is closed, whereas *localStorage* is still be accessible after a session closes and a new session opens.

## Methods available on storage objects

| Method     | Description                                                                                                                                    |
|------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| setItem    | Adds a key/value pair into storage. If no item with the specified key exists, the item is added; if that key does exist, its value is updated. |
| getItem    | Retrieves data from storage based on a specified key value or index.                                                                           |
| clear      | Clears all storage that has been saved. Use this method to clear out the storage as needed.                                                    |
| key        | Retrieves the key at a specified index. You can use the resultant key to pass as a parameter to one of the other methods that accepts a key.   |
| removeItem | Removes the specified key/value pair from storage.                                                                                             |

The storage objects also expose a length property which returns the number of key/value pairs in storage.

## About Storage API

The benefit to using the Web Storage API instead of cookies is that the data resides locally and stays local. The data doesn’t get sent back and forth to and from the server, as is the case with cookies. Data stored in web storage is organized by root domain. The space allotment is available on a per–root domain basis. For example, domains such as localhost or any other each get their own secure web storage space.

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
