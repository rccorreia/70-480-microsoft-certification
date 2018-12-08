# ```<div>```

# Purpose

Used for styling content.

# Definition

The HTML Content Division element (```<div>```) is the generic container for flow content. It has no effect on the content or layout until styled using CSS.

As a "pure" container, the ```<div>``` element does not inherently represent anything. Instead, it's used to group content so it can be easily styled using the class or id attributes, marking a section of a document as being written in a different language (using the lang attribute), and so on.

# Usage Notes

* The ```<div>``` element should be used only when no other semantic element (such as ```<article>``` or ```<nav>```) is appropriate.

# Level
[Block](../level/block.md)

# Example:

```
<div>
  <p>Any kind of content here. Such as
  &lt;p&gt;, &lt;table&gt;. You name it!</p>
</div>
```

Which corresponds to:

<div>
  <p>Any kind of content here. Such as
  &lt;p&gt;, &lt;table&gt;. You name it!</p>
</div>

And can be styled:

```
<div style="background-color: purple">
  <p>Any kind of content here. Such as
  &lt;p&gt;, &lt;table&gt;. You name it!</p>
</div>
```

Which corresponds to:

<div style="background-color: purple">
  <p>Any kind of content here. Such as
  &lt;p&gt;, &lt;table&gt;. You name it!</p>
</div>


## Source:

[MDN](https://developer.mozilla.org/)
