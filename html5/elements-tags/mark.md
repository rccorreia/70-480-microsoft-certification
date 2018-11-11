# ```<mark>```

# Purpose

Text to be referenced or highlighted.

# Definition

The HTML Mark Text element (```<mark>```) represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context.

# Usage Notes

* When used in a quotation (```<q>```) or block quote (```<blockquote>```), it generally indicates text which is of special interest but is not marked in the original source material, or material which needs special scrutiny even though the original author didn't think it was of particular importance. 

* Think of this like using a highlighter pen in a book to mark passages that you find of interest.
Otherwise, ```<mark>``` indicates a portion of the document's content which is likely to be relevant to the user's current activity. This might be used, for example, to indicate the words that matched a search operation.

* Don't use ```<mark>``` for syntax highlighting purposes; instead, use the ```<span>``` element with appropriate CSS applied to it.

# Important:

Don't confuse ```<mark>``` with the ```<strong>``` element; ```<mark>``` is used to denote content which has a degree of relevance, while ```<strong>``` indicates spans of text of importance.

# Level
[Text](../level/text.md)

# Example:

```<p>This is a very <mark>important</mark> information!</p>```

Which corresponds to:

<p>This is a very <mark>important</mark> information!</p>