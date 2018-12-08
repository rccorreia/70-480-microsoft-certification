# ```<figure>``` and ```<figcapture>```

# Purpose
```<figure>``` -> Grouping stand-alone content, such as video or image.

```<figcaption>``` -> For use with ```<figure>```, (optionally) used to provide caption.

# Definition

The HTML ```<figure>``` element represents self-contained content, frequently with a caption (```<figcaption>```, that represents a caption or legend for the rest of the contents), and is typically referenced as a single unit.

* Usually a ```<figure>``` is an image, illustration, diagram, code snippet, etc., that is referenced in the main flow of a document, but that can be moved to another part of the document or to an appendix without affecting the main flow.
* Being a sectioning root, the outline of the content of the ```<figure>``` element is excluded from the main outline of the document.
* A caption can be associated with the ```<figure>``` element by inserting a ```<figcaption>``` inside it (as the first or the last child).

# Level
```<figure>``` -> [Block](../level/block.md)
```<figcaption>``` -> [Text](../level/text.md)

## Examples:
```
<!-- Just an image -->
<figure>
  <img
  src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"
  alt="A robotic monster over the letters MDN.">
</figure>

<!-- Image with a caption -->
<figure>
  <img
  src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"
  alt="A robotic monster over the letters MDN.">	
  <figcaption>MDN Logo</figcaption>
</figure>
```

Which corresponds to:

<!-- Just an image -->
<figure>
  <img
  src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"
  alt="A robotic monster over the letters MDN.">
</figure>

<!-- Image with a caption -->
<figure>
  <img
  src="https://developer.cdn.mozilla.net/media/img/mdn-logo-sm.png"
  alt="A robotic monster over the letters MDN.">	
  <figcaption>MDN Logo</figcaption>
</figure>

## Source:

[MDN](https://developer.mozilla.org/)
