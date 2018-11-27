# Evaluating expressions

## Conditional and logical operators

| Operator | Type        | Description                                                                                    |
|----------|-------------|------------------------------------------------------------------------------------------------|
| >        | Conditional | Evaluates whether the value on the left is greater than the value on the right                 |
| <        | Conditional | Evaluates whether the value on the right is greater than the value on the left                 |
| >=,<=    | Conditional | Evaluates the same as > or < but with the additional logic that the values can also be equal   |
| !=       | Conditional | Evaluates whether the values aren’t equal                                                      |
| ==       | Conditional | Evaluates whether the values are equal independent of the underlying data type                 |
| ===      | Conditional | Evaluates whether the values are equal both in value and underlying data type                  |
| &&       | Logical     | The AND logical operator, in which the expressions on both sides must evaluate to true         |
| ||       | Logical     | The OR logical operator, in which at least one expression on either side must evaluate to true |

## Using if statements (Important!)

Two conditional operators are available for checking equality: == (equality operator) and === (identity operator). Checking for equality with the == operator will ignore the underlying data type, whereas the === identity operator will consider data type. Look at the following example:

```
  var n = 2000, s = '2000';
  alert(n == s);
  alert(n === s);
```
The first expression, which uses the equality operator, evaluates to true because the string is cast to a number for the purpose of the evaluation. The second expression, which uses the identity operator, evaluates to false because the string ‘2000’ isn’t equal to the integer 2000.

--

When using the logical OR operator in an if statement, the JavaScript engine knows that it can proceed if any of the statements are true. As such, it evaluates the expressions from left to right until it finds one that’s true. As soon as it does, it won’t evaluate any further expressions but will immediately jump into the true code block.

## Using *switch* statements 

The switch statement provides a construct in which you can test a list of values for equality (as with the == operator).

```
  switch (canvas.style.backgroundColor) {
    case 'yellow':
      alert('slow down');
    break;
    default:
      alert('unknown condition');
    break;
  }
```

You can't do logical AND inside switch, only or, like the following:

```
  case 'yellow':
  case 'green':
    alert('proceed');
```

### A valid Switch Statement (Important!)

The values used in the case statement for the purposes of the evaluation must be expressed as a constant. For example, switching on an integer value to determine whether it’s divisible by another number won’t work because the case would require an expression instead of a constant value. For example, case x / 10: would be an invalid case statement.

However, the switch statement itself can accept an expression to evaluate against all cases inside the switch block.

## Using ternary operators

The ternary operator is essentially a shorthand mechanism for an if statement. Example:

```
  canvas.style.backgroundColor == 'green' ? document.write('proceed') :
document.write('stop');
```

## Source

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
