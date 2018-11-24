# Keep objects out of the global namespace

The global namespace is where all the native JavaScript libraries live. In Internet Explorer, the window object references the global namespace.

The global namespace is available to all code within an application session. Naming conflicts are a problem. Names of classes within a namespace must be unique. **This is why keeping your objects out of the global namespace is important**.

One strategy to avoid name collisions is to create your own namespaces for your JavaScript libraries. The following code demonstrates this strategy to create a namespace for a library developed for a bookstore:

```
  var com = {};
  com.Bookstore = {};
  
  com.Bookstore.Book = {
    title: 'my book',
    genre: 'fiction'
  };

  com.Bookstore.Author = {
    firstName: 'R',
    lastName: 'D'
  }
```

By creating the objects in this way, you can be reasonably certain that if another developer creates a useful library to manage books that you want to include in your site, you won’t have to worry about a naming collision between your Book and Author objects and those provided by the other library. When developing reusable JavaScript libraries, never implement your objects in the global namespace.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
