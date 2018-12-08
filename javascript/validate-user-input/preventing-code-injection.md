# Preventing code injection

## Protecting against user input

A web application accepting user input opens up a potential attack surface for malicious users. If the website takes data and doesn’t do anything with it outside the scope of the current webpage, such as send it to another server or store it in a database, the effects are limited to the current page and browser session. However, if the captured data includes an account creation form or survey, for example, a malicious user has much more potential to do harm—especially when that information is later rendered to the webpage dynamically. This inherently allows anyone to add script to the site, which can open up the site to behavior such as phishing. As a webpage developer, you need to ensure that all user input is scrubbed of script elements. For example, don’t allow ```< >``` text to be entered into the form. Without those characters, a script block can’t be added.

## Using the *eval* function

The eval function is used to run JavaScript dynamically. It takes a string as a parameter and runs it as a JavaScript function. Never use the eval function against any data provided by an external source over which you don’t have 100 percent control.

## Using iFrames

iFrames open up a new opportunity to attackers. The *sandbox* attribute should always be used to restrict what data can be placed into an iFrame. The *sandbox* attribute has four
possible values:

### Available sandbox attribute values

| Value                | Description                                                                             |
|----------------------|-----------------------------------------------------------------------------------------|
| ""                   | An empty string applies all restrictions. This is the most secure                       |
| allow-same-origin    | iFrame content is treated as being from the same origin as the containing HTML document |
| allow-top-navigation | iFrame content can load content from the containing HTML document                       |
| allow-forms          | iFrame can submit forms                                                                 |
| allow-scripts        | iFrame can run script                                                                   |

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)