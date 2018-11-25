# Implementing Inheritance

In object-oriented programming, inheritance is a fundamental concept. If an entity satisfies the “is-a” relationship question, it’s a candidate for inheritance.

In the preceding code sample (Creating custom objects using prototypes and functions), you created an object called Book. But many types of books exist. To extend the definition of Book, you must separate the differences in functionality between, for example, pop-up books and other books. Pop-up books have some extra functionality, such as displaying the pop-up on the current page and perhaps playing a sound. In other words, while a pop-up book “is-a” type of book, it also has this extra functionality that doesn’t apply to all books. In this case, it would be useful to inherit from Book so that all the basic attributes and behaviors of a book are available without you having to re-create them. Then you could add the specific functionality for pop-up books. 

You can extend the Book object in a couple of ways. (Extending is another way of thinking about inheritance—an object is extended into another object.) Here’s the first way to extend
an object:

```
  var popupBook = Object.create(
    Book.protoType
    ,{ 
      hasSound: { value:true },
      showPopUp:{ value: function showPop() {
          //do logic to show a popup
        }
      }
    }
  );
```

Object.create is a method available from the Object class in the global namespace. The create method takes two parameters: the object you want to create and a list of property descriptors.

The first parameter expects to receive the prototype of the object to create or null. If null is specified, the object uses only those functions or properties specified in the second parameter. If an object prototype is specified, as in the case Book.prototype, the object is created with all the properties and functions declared on that object prototype. This is another reason designing code in a proper object-oriented way is important—so that you can leverage this type of functionality to keep code more readable and maintainable.

The second parameter enables you to add properties or behaviors to the object being created. Essentially, you define this additional prototype information inline with the object creation.

Creating objects this way is similar to the inline example in the beginning of the earlier section on custom objects. Again, such an approach isn’t very modular or reusable. For every instance of a pop-up book, you’d need to declare the additional property and method. So again, for objects that you might want to reuse often, extending the Book prototype is better.

Extending the Book prototype is much the same as creating a new prototype. You need only one line of code to tell JavaScript to inherit the functionality and attributes of another object. You do this by initializing the prototype to the parent object:

```
  function PopUpBook() {
    Book.call(this);
  }

  PopUpBook.prototype = Book.prototype;
  PopUpBook.prototype.hasSound = false;
  PopUpBook.prototype.showPopUp = function ShowPop() { };
```

The function PopUpBook makes a method call to Book.call(..). This is a call to the constructor of the super class (the class being inherited from). If the super class has a constructor that takes parameters, this method would enable you to pass the parameter values to the super-class constructors for object initialization.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)