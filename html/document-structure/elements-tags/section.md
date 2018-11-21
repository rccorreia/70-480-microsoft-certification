# ```<section>```

# Purpose

Grouping of content usually with a heading, similar to chapters.

# Definition

The ```<section>``` element subdivides pages into sections. You could continue to break down the sample page with additional ```<article>``` elements; however, the purpose of the ```<article>``` element isn’t to break down a page into more granular details. This is where the ```<section>``` element becomes useful. Each ```<article>``` element contains zero or more ```<section>``` elements to denote the different content sections within the ```<article>``` element. Like an ```<article>``` element, the first element within a ```<section>``` element is typically a header or a header group.

# Level
[Block](../level/block.md)

## Example
```
<article>
  <header>
    <hgroup>
      <h1>Article</h1>
    </hgroup>
  </header>
  <section>
    <h1>Section 1</h1>
      <p>Some details about section 1</p>
  </section>
  <section>
    <h1>Section 2</h1>
  </section>
</article>
```

Which corresponds to:

<article>
  <header>
    <hgroup>
      <h1>Article</h1>
    </hgroup>
  </header>
  <section>
    <h1>Section 1</h1>
      <p>Some details about section 1</p>
  </section>
  <section>
    <h1>Section 2</h1>
  </section>
</article>