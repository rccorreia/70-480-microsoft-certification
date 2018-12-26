# Implementing content attributes

Input controls provide content attributes that allow you to control their behavior in the browser declaratively rather than have to write JavaScript code.

## Attributes common to all input typesSection

| Attribute    | Description                                                                                                                                               |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| autocomplete | A string indicating the type of autocomplete functionality, if any, to allow on the input                                                                 |
| autofocus    | A Boolean which, if present, makes the input take focus when the form is presented                                                                        |
| disabled     | A Boolean attribute which is present if the input should be disabled                                                                                      |
| form         | The id of the ```<form>``` of which the input is a member; if absent, the input is a member of the nearest containing form, or is not a member of a form at all |
| list         | The id of a ```<datalist>``` element that provides a list of suggested values for the input                                                                     |
| name         | The input's name, to identify the input in the data submitted with the form's data                                                                        |
| readonly     | A Boolean attribute which, if true, indicates that the input cannot be edited                                                                             |
| required     | A Boolean which, if true, indicates that the input must have a value before the form can be submitted                                                     |
| tabindex     | A numeric value providing guidance to the user agent as to the order in which controls receive focus when the user presses the Tab key                    |
| type         | A string indicating which input type the ```<input>``` element represents                                                                                       |
| value        | The input's current value                                                                                                                                 |

## Making controls read-only

Part of the specification for the HTML input controls includes a readonly attribute. If you want to present information to users in elements such as text boxes but don’t want them to be able to alter this data, use the readonly attribute.

```
  <input type="text" readonly value="00XY998BB"/>
```

## Providing a spelling checker

Checking spelling is another method available to validate user input. The spellcheck attribute helps provide feedback to users that a word they’ve entered is misspelled. Again, this attribute is applied to the input element:

```
  <textarea id="otherCommentsText" rows="5" cols="20" spellcheck="true"></textarea>
```

## Specifying a pattern

As you saw with the email and url input types, built-in validation is fairly thorough in ensuring that the information entered is accurate and as expected. However, in some cases you might require looser or stricter validation. Suppose that you don’t want users to have to specify the HTTP protocol in a url type, but you want to allow only .com or .ca websites. This can be achieved by using the pattern attribute, which allows the use of a regular expression to define the pattern that should be accepted.

The following code shows the pattern attribute used to achieve the desired validation:

```
  <input type="text" title="Only .com and .ca are permitted." pattern="^[a-zA-Z0-9\-\.]+\.(com|ca)$"/>
```

When specifying the pattern attribute, you should specify the title attribute as well. The title attribute specifies the error message to users in the tooltip when validation fails.

### Important!

The pattern attribute applies only to text boxes. It can’t be used to override the validation built into the email or url types.

## Using the placeholder attribute

The placeholder attribute enables you to prompt users with what’s expected in a certain text box. this placeholder text doesn’t interfere with users when they start typing their information into the text box.

```
  <input type="email" placeholder="me@mydomain.com" /></td>
```

The placeholder text is slightly lighter in color. As soon as a user puts the mouse cursor into the box to type, the placeholder text disappears and the user’s typing takes over.

## Making controls required

To ensure that a user fills in a field, use the required attribute with the ```<input>``` element. Doing so ensures that users will be told that the field is required.

## Source

[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes)

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
