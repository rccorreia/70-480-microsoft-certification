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
