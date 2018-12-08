# Evaluating Regular Expressions

[Here](examples/regex.html) is the example page.

Regular expressions are patterns used to match character combinations in strings. It's a mix of special characters and literal characters that make up the pattern wanted.

## Regular expression special characters

| Symbol | Description                                                                                                                                                                                                                               |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ^      | Denotes the beginning of a string                                                                                                                                                                                                         |
| $      | Denotes the end of a string                                                                                                                                                                                                               |
| .      | Indicates to match on any character                                                                                                                                                                                                       |
| [A-Z]  | Alphabet letters indicate to match any alphabetic character. This is case-sensitive. To match lowercase letters, use [a-z]                                                                                                                |
| \d     | This combination indicates to match any numeric character                                                                                                                                                                                 |
| +      | Denotes that the preceding character or character set must match at least once                                                                                                                                                            |
| *      | Denotes that the preceding character or character set might or might not match. This generates zero or more matches                                                                                                                       |
| [^]    | When included in a character set, the caret denotes a negation. [^a] would match a string that doesn’t have an ‘a’ in it                                                                                                                  |
| ?      | Denotes that the preceding character is optional                                                                                                                                                                                          |
| \w     | This combination indicates to match a word character consisting of any alphanumeric character, including an underscore                                                                                                                    |
| \      | The backslash is an escape character. If any special character should be included in the character set to match on literally, it needs to be escaped with a \. For example, to find a backslash in a string, the pattern would include \\ |
| \s     | This combination indicates to match on a space. When it’s combined with + or *, it can match on one or more spaces                                                                                                                        |

This list encompasses the main functions available when string matching with regular expressions. Building regular expressions requires taking the definition of those characters and essentially creating a mask out of them to be used by the regular expression engine to interpret and decide whether there is a match.

Example:
Canadian Postal Code in Regex:

```
  ^[A-Z,a-z]\d[A-Z,a-z][\s{1}]?\d[A-Z,a-z]\d
```

## Evaluating regular expressions in JavaScript

Just like with strings and integers, regular expressions are objects in JavaScript. As such, they can be created and can provide methods to evaluate strings. Regular expression objects are created in a similar fashion as strings; however, rather than use “ to encapsulate the expression, use the forward slash ```/<expression>/``` instead. JavaScript knows that text surrounded by forward slashes in this way is a regular expression object.

### Method test

When an regex object is created:

```
  var regExpression = /^[A-Z,a-z]\d[A-Z,a-z][\s{1}]?\d[A-Z,a-z]\d/;
```

It can evaluate a string with the test method: 

```
  regExpression.test(str)
```

### Method exec

This method returns the portion of the input string that matches the expression. 
The match is returned as a string array. That the return result is a string array is important to note because using regular expressions can result in multiple matches.

The string object also provides regular expression methods. The string could be used directly to evaluate the expression. The string provides the search and match methods. The search method returns the index of the character in the string where the first match occurred.
The match method returns the part of the string that matches the pattern, much like the exec method. In addition to these two methods, many of the other string methods accept a regular expression object, such as indexOf, split, and replace. This provides some advanced functionality for manipulating strings in JavaScript.

### Important!

In the context where a website is expecting specifically formatted data, you can use regular expressions to validate the incoming data and prevent the possible crashing of the website or at least errors being presented to users.

## Sources

[MDN](https://developer.mozilla.org/)

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)