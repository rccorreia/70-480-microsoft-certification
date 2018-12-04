# Making webpages dynamic with jQuery and AJAX

jQuery is a JavaScript library that specializes
in working with the DOM to make webpages dynamic.

The use of AJAX allows you to make server-side requests via JavaScript without having to request a full page refresh. You can implement AJAX without jQuery.

By requesting data from a server with JavaScript via jQuery and AJAX, you can retrieve data behind the scenes and then use the various DOM manipulation techniques to update specific areas of the page that need to be updated and creates a much more pleasant
user experience.

[Here](examples/jquery-ajax.html) is the example page.

The AJAX call has a few important parameters that you can set.

The first parameter being set is the url that the AJAX call will be requesting. For security reasons, to prevent cross-site scripting, this URL must be within the same domain as the webpage itself.

The second parameter, cache, is optional and indicates whether the call can use a cached copy.

The third parameter, datatype, indicates the expected data type, which could be XML or JavaScript Object Notation (JSON), for example.

The fourth parameter is the type propertie. The default value is GET, but if you want to make a post, just fill this field with "POST".

The fifth parameter is the success property. This parameter takes a function that the results of the AJAX calls should be passed into for the webpage to do some work with. 

The sixth parameter is the error property so that any error conditions can be handled gracefully.

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)