# ```<progress>```

# Purpose

Display an indicator showing the completion progress.

# Definition

The ```<progress>``` element represents the progress of an objective or task. The two supported
types of progress tasks are determinate and indeterminate.

Use a determinate progress task when you know in advance the amount of work to be completed; in other words, you know the starting and ending values. 

Use indeterminate tasks when you don’t know how long a task will take to complete but still want to show users that some work is occurring and that they should wait. You still use the ```<progress>``` element but remove the value attribute. When you don’t specify the value attribute, the browser can infer that the ```<progress>``` element represents an indeterminate task.

# Attributes

* max: This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than zero and be a valid floating point number. The default value is 1.

* value: This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max, or between 0 and 1 if max is omitted. If there is no value attribute, the progress bar is indeterminate; this indicates that an activity is ongoing with no indication of how long it is expected to take.

# Level
[Block](../level/block.md)

# Example

```
Determinate:
<progress value="70" max="100"></progress>

Indeterminate:
<progress max="5"></progress>
```

Which corresponds to:

Determinate:

<progress value="70" max="100"></progress>

Indeterminate:

<progress max="5"></progress>
