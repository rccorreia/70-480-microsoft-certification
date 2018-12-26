# Create and implement objects and methods

*  Everything in JavaScript is an object—even functions.
*  JavaScript supports native objects and custom objects.
*  Objects are created with the new keyword.
*  Access methods and properties on objects with the dot notation: object.method or
object.property.
*  You can create custom objects dynamically or by using prototypes.
*  Prototypes provide for object definition reuse, whereas dynamic objects require
attributes and methods defined for each use.
*  Inheritance is achieved in JavaScript through the extension of prototypes.

## Review

Create an object like this: 

```
  var variable-name = { 
    propertie: "value" 
    
    method: function () {
      ...
    }
  }
```

Every object is based on a prototype. Changing a object prototype will change how any variable instanced based on this prototype receive the basic values.

Prototype is used to implement inheritance on javascript.
For this purpose, you can use ```Object.create``` and it takes two parameters: the prototype of the object you want to create and a list of property descriptors, that can be properties and methods (behaviors).

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
