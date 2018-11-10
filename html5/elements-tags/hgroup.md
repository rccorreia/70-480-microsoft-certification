# Definition



So in the abstract outline produced by the HTML outline algorithm defined in the HTML specification, the ```<hgroup>``` as a whole forms a single logical heading, with the entire set of ```<h1>```–```<h6>``` children of the ```<hgroup>``` going into the outline as one multi-level unit, to comprise that single logical heading in the abstract outline.

Example:
```
<body>
  <hgroup id="document-title">
    <h1>HTML</h1>
    <h2>Living Standard — Last Updated 12 August 2016</h2>
  </hgroup>
  <p>Some intro to the document.</p>
  <h2>Table of contents</h2>
  <ol id=toc>...</ol>
  <h2>First section</h2>
  <p>Some intro to the first section.</p>
</body>
```
A rendered outline for that document might look like the following:
HTML : Living Standard — Last Updated 12 August 2016
|
-- Table of contents
|
-- First section
With the first h2 shown aside the h1, because they are inside the hgroup

## Usage Note:
The ```<hgroup>``` element has been removed from the HTML5 (W3C) specification, but it still is in the WHATWG version of HTML. It is partially implemented in most browsers, though, so is unlikely to go away.
However, given that a key purpose of the ```<hgroup>``` element is to affect how headings are displayed by the outline algorithm defined in the HTML specification—but the HTML outline algorithm is not implemented in any browsers—then the ```<hgroup>``` semantics are in practice only theoretical.
So the HTML5 (W3C) specification provides advice on how to mark up Subheadings, subtitles, alternative titles and taglines without using ```<hgroup>```.