# Applying styles to text hyphenation

[Here](examples/style-text.html) is the example page.

You to control how a sentence or word wraps or breaks at the end of the line. The hyphen attribute can be specified to control this behavior.

## Values available for the hyphen attribute

| Value  | Description                                                                                                                                                 |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| none   | Words will not break with a hyphen and the sentence will only break on whitespace                                                                           |
| auto   | Words will break based on a predefined algorithm                                                                                                            |
| manual | Words will break based on specified hints in the words indicating an appropriate space for the break. This is done using the ```&shy;``` notation within the text |

```
div {
hyphens: none;
}

div {
hyphens: auto;
}

div {
hyphens: manual;
}
```

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
