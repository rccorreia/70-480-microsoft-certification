# Animating objects by applying CSS transitions 

[Here](examples/css-transitions.html) is the example page.

Transitions provide a mechanism to alter the style of an object such that the change occurs in a visible gradual fashion. You have the ability to control which style property gets altered and how long it takes to complete its transition from one style to the other.

Transition allows you to specify a comma-separated list of CSS properties and a length of time for the transition of the specified property to take place.

## CSS3 transition properties

| Property Name       | Description                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------------|
| transition-property | Specifies the property to which a transition will be applied                                    |
| transition-duration | Specifies how much time the transition should take from start to finish                         |
| transition-delay    | Specifies how long to wait from the time the property is changed before starting the transition |

### Important! 

When using the individual transition-* properties, you can specify only one property to transition. With the transition shorthand, you are able to specify a comma-separated list.


*transition-timing-function* property allows you to have a bit more control over the speed of the transition.

## Values for transition-timing-function

| Value        | Description                                                                                            |
|--------------|--------------------------------------------------------------------------------------------------------|
| ease         | The default value that applies the effect in such a way that it starts slow, speeds up, then ends slow |
| linear       | Makes the transition constant from start to finish                                                     |
| ease-in      | Causes the transition to have a slow start                                                             |
| ease-out     | Causes the transition to have a slow finish                                                            |
| ease-in-out  | Causes the transition to have a slow start and a slow finish                                           |
| cubic-bezier | Allows you to define values. This takes four parameters that are values from 0 and 1                   |

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
