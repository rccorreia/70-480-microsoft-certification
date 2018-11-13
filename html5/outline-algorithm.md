# Outlining and sectioning elements in HTML5:

HTML5 brings precision to the sectioning and heading features, allowing document outlines to be predictable and used by the browser to improve the user experience.

## [The HTML5 outline algorithm](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#The_HTML5_outline_algorithm)

How HTML handles sections and outlines:

### [Defining Sections](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Defining_sections)

All content lying inside the ```<body>``` element is part of a section. Sections in HTML5 can be nested. Beside the main section, defined by the ```<body>``` element, section limits are defined either explicitly or implicitly. Explicitly-defined sections are the content within ```<body>```,  ```<section>```,  ```<article>```,  ```<aside>```, and ```<nav>``` tags. 

Example:
```
<section>
  <h1>Forest elephants</h1> 
  <section>
    <h1>Introduction</h1>
    <p>In this section, we discuss the lesser known forest elephants.</p>
  </section>
  <section>
    <h1>Habitat</h1>
    <p>Forest elephants do not live in trees but among them.</p>
  </section>
</section>
```
This leads to the following outline:
```
1. Forest elephants
   1.1 Introduction
   1.2 Habitat
```

### [Defining headings](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Defining_headings)

While the HTML Sectioning elements define the structure of the document, an outline also needs headings to be useful. The basic rule is simple: the first HTML heading element (one of ```<h1>```, ```<h2>```, ```<h3>```, ```<h4>```, ```<h5>```, ```<h6>```) defines the heading of the current section.

The heading elements have a rank given by the number in the element name, where ```<h1>``` has the highest rank, and ```<h6>``` has the lowest rank. Relative ranking matters only within a section; the structure of the sections determines the outline, not the heading rank of the sections. For example, consider this code:

```
<section>
  <h1>Forest elephants</h1>    
  <p>In this section, we discuss the lesser known forest elephants. 
    ...this section continues...
  <section>
    <h2>Habitat</h2>  
    <p>Forest elephants do not live in trees but among them.
        ...this subsection continues...
  </section>
</section>
<section>
  <h3>Mongolian gerbils</h3>
  <p>In this section, we discuss the famous mongolian gerbils. 
     ...this section continues...
</section>
```
This leads to the following outline:
```
1. Forest elephants
   1.1 Habitat
2. Mongolian gerbils
```
Note that the rank of the heading element (in the example ```<h1>``` for the first top-level section, ```<h2>``` for the subsection and ```<h3>``` for the second top-level section) is not important. (Any rank can be used as the heading of an explicitly-defined section, although this practice is not recommended.)

### [Implicit sectioning](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Implicit_sectioning)

Because the HTML5 Sectioning Elements aren't mandatory to define an outline, to keep compatibility with the existing web dominated by HTML4, there is a way to define sections without them. This is called implicit sectioning.

The heading elements (```<h1>``` to ```<h6>```) define a new, implicit section when they aren't the first heading of their parent, explicit, sections. The way this implicit section is positioned in the outline is defined by its relative rank with the previous heading in its parent section. If it is of a lower rank than the previous heading, it opens an implicit sub-section of the section.
```
<section>
  <h1>Forest elephants</h1>  
  <p>In this section, we discuss the lesser known forest elephants.
    ...this section continues...
  <h3 class="implicit subsection">Habitat</h3>
  <p>Forest elephants do not live in trees but among them.
    ...this subsection continues...
</section>
```
This leads to the following outline:
```
1. Forest elephants
   1.1 Habitat (implicitly defined by the h3 element)
```
If it is of the same rank as the previous heading, it closes the previous section (which may have been explicit!) and opens a new implicit one at the same level.

```
<section>
  <h1>Forest elephants</h1>  
  <p>In this section, we discuss the lesser known forest elephants.
    ...this section continues...
  <h1 class="implicit section">Mongolian gerbils</h1>
  <p>Mongolian gerbils are cute little mammals.
    ...this section continues...
</section>
```
This leads to the following outline:
```
1. Forest elephants
2. Mongolian gerbils (implicitly defined by the h1 element, which closed the previous section at the same time)
```
If it is of a higher rank than the previous heading, it closes the previous section and opens a new implicit one at the higher level.

```
<h1>Mammals</h1>
<h2>Whales</h2>
<p>In this section, we discuss the swimming whales.
  ...this section continues...
<section>
  <h3>Forest elephants</h3>  
  <p>In this section, we discuss the lesser known forest elephants.
    ...this section continues...
  <h3>Mongolian gerbils</h3>
    <p>Hordes of gerbils have spread their range far beyond Mongolia.
        ...this subsection continues...
  <h2>Reptiles</h2>
    <p>Reptiles are animals with cold blood.
        ...this section continues...
</section>
```
This leads to the following outline:
```
1. Mammals
   1.1 Whales (implicitly defined by the h2 element)
   1.2 Forest elephants (explicitly defined by the section element)
   1.3 Mongolian gerbils (implicitly defined by the h3 element, which closes the previous section at the same time)
2. Reptiles (implicitly defined by the h2 element, which closes the previous section at the same time)
```

### Sectioning roots

A sectioning root is an HTML element that can have its own outline, but the sections and headings inside it do not contribute to the outline of its ancestor. Beside ```<body>``` which is the logical sectioning root of a document, these are often elements that introduce external content to the page: ```<blockquote>```, ```<details>```, ```<fieldset>```, ```<figure>``` and ```<td>```.
```
<section>
  <h1>Forest elephants</h1> 
  <section>
    <h2>Introduction</h2>
    <p>In this section, we discuss the lesser known forest elephants</p>
  </section>
  <section>
    <h2>Habitat</h2>
    <p>Forest elephants do not live in trees but among them. Let's
       look what scientists are saying in "<cite>The Forest Elephant in Borneo</cite>":</p>
    <blockquote>
       <h1>Borneo</h1>
       <p>The forest element lives in Borneo...</p>
    </blockquote>
  </section>
</section>
```
This leads to the following outline:
```
1. Forest elephants
   1.1 Introduction
   1.2 Habitat
```
This outline doesn't contain the internal outline of the ```<blockquote>``` element, which, being an external citation, is a sectioning root and isolates its internal outline.

### Sections outside the outline

HTML5 introduces two new elements that allow defining sections that don't belong to the main outline of a web document:

* The HTML Aside Section Element (```<aside>```) defines a section that, though related to the main element, doesn't belong to the main flow, like an explanation box or an advertisement. It has its own outline, but doesn't belong to the main one.

* The HTML Navigational Section Element (```<nav>```) defines a section that contains navigation links. There can be several of them in a document, for example one with page internal links like a table of contents, and another with site navigational links. These links are not part of the main document flow and outline, and are generally not initially rendered by screen readers and similar assistive technologies.

### Headers and Footers

HTML5 also introduces two new elements that can be used to mark up the header and the footer of a section:

* The HTML Header Element (```<header>```) defines a page header — typically containing the logo and name of the site and possibly a horizontal menu — or section header, containing perhaps the section's heading, author name, etc. ```<article>```, ```<section>```, ```<aside>```, and ```<nav>``` can have their own ```<header>```. Despite its name, it is not necessarily positioned at the beginning of the page or section.

* The HTML Footer Element (```<footer>```) defines a page footer — typically containing the copyright and legal notices and sometimes some links — or section footer, containing perhaps the section's publication date, license information, etc. ```<article>```, ```<section>```, ```<aside>```, and ```<nav>``` can have their own ```<footer>```. Despite its name, it is not necessarily positioned at the end of the page or section.
These do not create new sections in the outline, rather, they mark up content inside sections of the page.
