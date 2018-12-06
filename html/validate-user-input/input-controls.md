# Choosing input controls

[Here](examples/user-input.html) is the example page.

The ```<input>``` element in HTML denotes input controls. This element contains a type attribute that specifies the type of input element to render. The exceptions to the ```<input type="">``` rule are the ```<textarea>``` and ```<button>``` elements, which have their own element support.

## HTML5 input elements

| Element  | Description                                                         |
|----------|---------------------------------------------------------------------|
| color    | Provides a color picker                                             |
| date     | Provides a date picker                                              |
| datetime | Provides a date/time picker                                         |
| month    | Enables users to select a numeric month and year                    |
| week     | Enables users to select a numeric week and year                     |
| time     | Enables users to select a time of day                               |
| number   | Forces the input to be numeric                                      |
| Range    | Allows users to select a value within a range by using a slider bar |
| tel      | Formats entered data as a phone number                              |
| url      | Formats entered data as a properly formatted URL                    |
| Radio    | Enables users to select a single value for a list of choices        |
| Checkbox | Enables users to select multiple values in a list of choices        |
| Password | Captures a password and glyphs the entered characters               |
| Button   | Enables users to perform an action such as run script               |
| Reset    | Resets all HTML elements within a form                              |
| Submit   | Posts the form data to a destination for further processing         |

## Using text and textarea input types

The text and textarea input controls are the most flexible. By using these controls, you allow users to enter any text that they want into a regular text box. A text box provides a single-line text entry, whereas a textarea allows for a multiline data entry.

Other attributes that help with controlling how much information is entered into the text fields is the maxlength attribute:

```
  <input type="text" id="firstNameText" maxlength="50"/>
```

## *url* input type

The renderer is instructed that the input type is url, so when users try to submit a form with this type of information on it, it validates that the text in the box matches the format of a valid URL.

### Important!

You can validate data in many ways. Even more options become available in HTML5, such as the url input type. Also available are the pattern attribute and the use of regular expressions in JavaScript.

## Using the *password* input control

The password input control is the standard method of prompting users for sensitive information. As you type your password, each character is replaced with a glyph so that any onlookers can’t see your password.

### Important!

You can’t specify default text in a password box or write to it via JavaScript. This is a security safeguard to help ensure the safety of passwords. However, the browsers provide a mechanism to store a password should a user choose to have the password remembered by the browser.

## Using the *email* input type

You can use the email input type to ensure that the format of the text entered into the text box matches that of a valid email address.
(the @ symbol and ending with a .com or other domain suffix.)

### Important!

Validation of the email input type confirms only that the information entered matches the expected format of a valid email address. It in no way verifies that the email address itself is a valid mailbox that can receive messages.

## Using the *checkbox* input type

In some cases when capturing information from users, you need to be able to capture more than one choice as it relates to a specific question. You can provide a series of check boxes and allow users to select all that apply.

An additional attribute available on the check box is the checked attribute. This attribute provides a way to default a check box to the “checked” (or selected) state.

## Using the *radio* input type

Users can select only a single item from the list. Each radio input type needs a unique id. However, the name attribute ties all the radio buttons together. With the same name specified for each radio type, the browser knows that they are part of a group and that only one radio button of the group can be selected.

You can use the checked attribute too.

## Using the *range* input type

Using the range input type enables users to specify a value within a predefined range by using a slider bar.

## Using the *button* input type

The input type that allows users to submit the form or clear it is button. The
```<input>``` element supports three types of button controls: submit, reset, and button.

The submit input type tells the HTML form to post its information to the server (or, in some cases, to another site or webpage). The reset type automatically clears all form elements to their default values. The button type provides a generic button with no predefined functionality. It can be used to provide a custom function, such as cancel out from this page and return to the home page.

Type button requires some JavaScript to be wired up to actually do something. However, the submit and reset buttons come with the described functionality built in.

To specify text for the button type button, add the value attribute:

```
  <input type="button" value="Cancel"/>
```

### Important!

Anything can be a "button" because most DOM elements have a click event or at least a mousedown and mouseup event, the concept of clicking can be captured and custom actions processed. This can inherently turn any part of the DOM into a "button".

## Using the *button* element

The button element provides a button on the user interface, just as the name implies. However, from a graphical perspective, this element behaves very differently.

The button element also supports a type attribute, like as the ones seen previously: submit, reset, and button.

it doesn’t provide any text on the buttons. The button element provides only the desired click behavior, such as submitting, resetting, or providing a custom behavior like with type=”button”. Everything else must be specified in the HTML, including the label or text that goes on the button. In this way, you have much more control over what’s put on the button.

You can take the button element even further. The element’s contents don’t have to be just plain text. You can embed images within the element by using the ```<img>``` element in addition to text, or embed an entire clickable paragraph. You also can apply cascading style sheets (CSS) to the button to change its appearance, as shown in Figure 3-16. The HTML is as follows:

```
  <button type="button" style="border-radius: 15px;">
    <p>Something exciting lies behind this button</p>
    <img src=".\myimage.jpg"/>
  </button>
```

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)