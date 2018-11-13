# Optimizing for search engines

If you want users to reach your website, you have to ensure that it can be found among the millions of sites that already exists.

Search engine optimization (SEO) is a technique used to make elements of the website easily discoverable and appropriately indexed by search engines, so that when users search for content related to your site, they find your pages. Search engines such as Bing and Google constantly scour the Internet for content. When they find webpages, they go through the HTML and index content such as page and image metadata.

With the semantic markup available in HTML5, you can use more descriptive elements for the page sections. The HTML elements alone make clear the intent of each segment of the page. As search engines scour webpages, they detect the markup and know what to take from it to properly index the page.

The ```<article>``` and ```<section>``` elements are the main ones used by the SEO algorithm. These elements are known to contain the main body of the page. That a page have more than one ```<article>``` and/or ```<section>``` element is acceptable; they all get indexed. Within each ```<article>``` element, the engine then seeks out elements such as ```<hgroup>``` or ```<h1>``` to get the main topic of the ```<article>``` element for relevant indexing. However, this doesn’t mean that if a site doesn’t have ```<article>``` or ```<section>``` elements, it won’t get indexed and be searchable. This speaks only to the quality of indexing the search engines can conduct to make your site more searchable by end users.

How SEO works, based on the previous paragraph:

It looks for the main content of the page, so when it found an article, it looks for the "title" of it, that is contained inside an ```<hn>``` or ```<hgroup>```. This way it knows what that article is about. The same for sections.
