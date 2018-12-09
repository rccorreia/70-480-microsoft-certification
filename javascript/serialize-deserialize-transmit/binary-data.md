# Serializing and deserializing binary data

Capturing dynamic image data follows a similar pattern as with the other techniques reviewed. The key difference is now the responsetype property must be set to blob:

```
  var xReq = new XMLHttpRequest();
  xReq.open("GET", "orange.jpg", false);
  xReq.responseType = 'blob';
  xReq.send(null);
  
  var blob = xReq.response;
  document.getElementById("result").src = URL.createObjectURL(blob);
```

The createObjectURL method gives the img element a URL linking to the BLOB, and the image is displayed in the browser

For the inverse, the data can also be submitted to the server as soon as it’s serialized into a BLOB:

```
  var xReq = new XMLHttpRequest();
  xReq.open("POST", "saveImage.aspx", false);
  xReq.responseType = 'blob';
  xReq.send(data);
```

## Using the Form.Submit method

The form element contains an action attribute that tells the form where to submit its data. Submitting the data in this way submits the
entire HTML page back to the server for processing. However, another available mechanism is to hook up to the form’s submit event and handle the submission through JavaScript. The form element at its simplest is as follows:

```
  <form id="signupForm" action="processSignUp.aspx">
  </form>
```

The other option for handling the form’s submission is to wire up the event in JavaScript:

```
  $("document").ready(function () {
    $("form").submit(function () {
    });
  });
```

Iterating over all the form elements, capturing the data out of them, and constructing a query string for use with an AJAX call would be possible inside the click event. The following code reviews this concept:

```
  $("form").submit(function () {
    var fName = $("#firstName").val();
    var lName = $("#lastName").val();
    var qString = "Last Name=" + lName + "&First Name=" + fName;
    
    $.ajax({
      url: 'processSignUp.aspx',
      type: "POST",
      data: qString,
      success: function (r) {
      }
    });
    return false;
  });
```

Although this method is functional, it has some drawbacks. First, a form with many elements will cause this code to get long. As new elements are added, the code will need to be updated.

## Using the jQuery.serialize method

jQuery provides a seamless way to encode data from an HTML form by traversing the form that’s passed into it and looking for input boxes to construct and return a query string. Then the query string can be posted to the server for processing.

```
  $("form").submit(function () {
    var qString = $(this).serialize();
    
    $.ajax({
      url: 'processSignUp.aspx',
      type: "POST",
      data: qString,
      success: function (r) {
      }
    });
    return false;
  });
```

In this case, the jQuery.serialize method handles the extraction of the data from all the input elements and creates the query string. The advantage of using this method— beyond saving a lot of code—is that the query string is also encoded

The serialize method has some limitations. Only successful controls are serialized. This means that only controls that are in a valid state are serialized. For input controls such as check boxes and radio buttons, only the ones that are in a selected state are considered. For radio buttons, because the name attribute must be the same for them all to be considered in a radio button group, you would specify the value attribute to differentiate them in the query string:

```
  <input type="radio" name="gender" value="m"/>Male
  <input type="radio" name="gender" value="f"/>Female
```

### Important!

The serialize method requires that all elements have the name attribute specified. The preceding code works with the HTML modified as such:

```
  <form id=”signupForm”>
    First Name:
    <input type=”text” id=”firstName” name=”firstName”/><br/>
    Last Name:
    <input type=”text” id=”lastName” name=”lastName”/><br/>
    <button type=”submit”>Submit</button>
  </form>
```

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
