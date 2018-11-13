# Optimizing for screen readers

Screen readers rely on the document outline to parse the structure and present information to the user.

The introduction of the semantic elements changes how the document outline is created. You should explicitly define the sections by using
the appropriate semantics. Also recommended is that ```<h1>``` elements be used solely throughout
an HTML5 document

The example below creates a table of contents that can be read to users:

```
<section>
  <h1>Animals and Plants</h1>
  <section>
    <h1>Animals</h1>
    <section>
      <h1>Mammals</h1>
    </section>
    <section>
      <h1>Reptiles</h1>
    </section>
  </section>
  <section>
    <h1>Plants</h1>
    <section>
      <h1>Trees</h1>
    </section>
    <section>
      <h1>Flowers</h1>
    </section>
  </section>
</section>
```
This leads to the following outline:
```
1. Animals and Plants
  1.1 Animals
    1.1.1 Mammals
    1.1.2 Reptiles
  1.2 Plants
    1.1.1 Trees
    1.1.2 Flowers
```
