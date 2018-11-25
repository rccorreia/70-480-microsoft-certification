# Create custom objects and custom properties for native objects using prototypes and functions

## Creating Custom Objects

Create custom objects to encapsulate functionality within logical entities.

The next example represents a book object. This is a dynamic object, meaning that it’s created inline with a variable declaration.

```
  var book = {
    ISBN: "55555555",
    Length: 560,
    genre: "programming",
    covering: "soft",
    author: "John Doe",
    currentPage: 5
  }
```

The properties of an object represent its state, whereas the methods of an object provide its behavior. At this point, the book object has only properties. To give the book object some behavior, you can add the following code:

```
  var book = {
    ISBN: "55555555",
    Length: 560,
    genre: "programming",
    covering: "soft",
    author: "John Doe",
    currentPage: 5,
    title: "My Big Book of Wonderful Things",

    flipTo: function flipToAPage(pNum) {
      this.currentPage = pNum;
    },
    
    turnPageForward: function turnForward() {
      this.flipTo(this.currentPage++);
    },
    
    turnPageBackward: function turnBackward() {
      this.flipTo(this.currentPage--);
    }
  }
```

The interesting parts of this code are the function declarations themselves. For example, when you look at the code for the flipTo function, you might think that the function is called FlipToAPage because that’s what was declared. However, this isn’t the
case. The methods are called using the alias property that assigned the function. When using
the code, the runtime knows that it’s a method, not a property, and it expects the method to be called with parentheses:

```
  //This line throws an exception because the object does not support this method
  book.FlipToAPage(15);
  
  //This line works because this is what the method has been named.
  book.flipTo(15);
```

## Create custom objects and custom properties for native objects using prototypes and functions

Creating objects inline as the book object is in the previous code sample is useful only when it is used in the page where it’s defined, and perhaps only a few times. However, if you plan to use an object often, consider creating a prototype for it so that you can construct one whenever you need it.

A prototype provides a definition of the object so that you can construct the object using the new keyword. The following code creates a prototype for the book object:

```
  function Book() {
    this.ISBN = "55555555";
    this.Length = 560;
    this.genre= "programming";
    this.covering = "soft";
    this.author = "John Doe";
    this.currentPage = 5,
    
    this.flipTo = function FlipToAPage(pNum) {
      this.currentPage = pNum;
    },

    this.turnPageForward = function turnForward() {
      this.flipTo(this.currentPage++);
    },

    this.turnPageBackward = function turnBackward() {
      this.flipTo(this.currentPage--);
    }
  }

  var books = new Array(new Book(), new Book(), new Book());
  books[0].Length
```

The following code creates a prototype containing two constructors that support the needs of any users of the Book object:

```
  function Book()
  {
    //just creates an empty book.
  }

  function Book(title, length, author) {
    this.title = title;
    this.Length = length;
    this.author = author;
  }

  Book.prototype = {
    ISBN: "",
    Length: -1,
    genre: "",
    covering: "",
    author: "",
    currentPage: 0,
    title: "",
    
    flipTo: function FlipToAPage(pNum) {
      this.currentPage = pNum;
    },

    turnPageForward: function turnForward() {
      this.flipTo(this.currentPage++);
    },

    turnPageBackward: function turnBackward() {
      this.flipTo(this.currentPage--);
    }
  };

  var books = new Array(new Book(), new Book("First Edition",350,"Random"));
```

With this new code, you can create an empty Book object by using the constructor with no parameters, or you can create a Book object by using specific parameters to initialize some fields.

You could insert an object inside another, like the author could become an object:

```
  Book.prototype = {
  …
    author: new Author(),
  …

  function Author(){ }

  function Author(firstName, lastName, gender)
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }

  Author.prototype = {
    firstName:"",
    lastName:"",
    gender:"",
    BookCount: 0
  }

  var books = new Array(new Book(), new Book("First Edition",350, new Author("Random","Author","M"))
);
```

## Important!!

### 1:

JavaScript consists of objects. Everything in JavaScript is an object. Each object is based on a prototype. Whenever you create a new instance of an object, that instance is based on the object’s prototype.

### 2:

You can add properties to a prototype dynamically rather than use the preceding method. The following code achieves the same outcome. Using such code is just a matter of preference.

```
  Book.prototype.ISBN = "";
  Book.prototype.Length = 350;
  Book.prototype.genre = "";
  Book.prototype.covering = "";
  Book.prototype.author = new Author();
  Book.prototype.currentPage = 0;
  Book.prototype.title = "";
```

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)