# Overriding inheritance using !important

```
  p {
    font-family: arial;
    color: blue;
  }

  p {
    color: black;
  }
```

These styles are competing. In this case, the last style that the browser reads will win. if you want to override this behavior, use the *!important* keyword:

```
  p {
    font-family: arial;
    color: blue !important;
  }

  p {
    color: black;
  }
```

The paragraph elements will render blue and not black.

## *Author of this repos personal opinion*:

Never use the *!important* keyword.
It is difficult for developers to understand the css hierarch of the website if some rule overcome all the other.


## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
