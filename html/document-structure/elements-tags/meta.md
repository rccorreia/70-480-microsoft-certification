# Definition

The HTML ```<meta>``` element represents metadata that cannot be represented by other HTML meta-related elements, like ```<base>```, ```<link>```, ```<script>```, ```<style>``` or ```<title>```.

It must be inside the ```<head>``` element and **within the first 1024 bytes** of the HTML as some browsers only look at those bytes before choosing an encoding.

## Atributes - [source](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#Attributes)

### Charset

Declares the page's character encoding. It must contain a [standard IANA MIME name for character encodings](https://www.iana.org/assignments/character-sets). Although the standard doesn't request a specific encoding, it suggests:
  * Authors are encouraged to use UTF-8.

The Content-Type (from http) header and any Byte-Order Marks override this element.

### Content

This attribute contains the value for the http-equiv or name attribute, depending on which is used. So it holds the content for the meta information informed before.

### Http-equiv

Defines a pragma directive. The attribute is named http-equiv(alent) because all the allowed values are names of particular HTTP headers:

* "content-security-policy": 

  Allows page authors to define a content policy for the current page. Content policies mostly specify allowed server origins and script endpoints which help guard against cross-site scripting attacks.

* "refresh":

  This instruction specifies:
    * The number of seconds until the page should be reloaded - only if the content attribute contains a positive integer.
    
    * The number of seconds until the page should redirect to another - only if the content attribute contains a positive integer followed by the string ';url=', and a valid URL.

### name

This attribute defines the name of a piece of document-level metadata. It should not be set if one of the attributes itemprop, http-equiv or charset is also set.

There is a several possible values, that can be seen [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta), on "name" section.


## Source:

[MDN](https://developer.mozilla.org/)
