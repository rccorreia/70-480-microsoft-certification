# Serializing and deserializing JSON data

The browser provides native support for working with JSON and XML. The JSON object is available for converting a JSON string to and from an object (serialize/deserialize).
```
  var person = {
    FirstName: "Rick",
    HairColor: "Brown"
  };

  var jsonPerson = JSON.stringify(person);
```

The person object has been serialized into a JSON string that can be sent to an endpoint URL for processing. To return the person back to a person object from a JSON string, the object can be deserialized by using the parse method:

```
  var req = new XMLHttpRequest();
  req.open("GET", "MyJsonData.json", false);
  req.send(null);
  
  var jsonPerson = JSON.parse(req.responseText);
```

When this code runs, the person object is reconstructed from the JSON string.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
