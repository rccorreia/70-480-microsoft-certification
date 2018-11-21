# Implementing Media Controls

Look at two new elements added to the HTML5 specification that work with multimedia natively in the web browser and with JavaScript. You also examine the ```<video>``` and ```<audio>``` elements.

## Using the ```<video>``` element

Embedding a video in the page is as simple as adding the following markup:

```
<video src="samplevideo.mp4" autoplay> </video>
```

The key attributes available to use on the ```<video>``` element:

| Attribute                                                                                      | Description                                                                                                                                                                                                                                                                                                                 |
|------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| src                                                                                            | This attribute specifies the video to play. It can be a local resource within your own website or something exposed through a public URL on the Internet.                                                                                                                                                                   |
| autoplay                                                                                       | This attribute tells the browser to start playing the video as soon as it loads. If this attribute is omitted, the video plays only when told to through player controls or JavaScript.                                                                                                                                     |
| controls                                                                                       | This attribute tells the browser to include its built-in video controls, such as play and pause. If this is omitted, the user has no visible way to play the content. You would use autoplay or provide some other mechanism through JavaScript to play the video.                                                          |
| height/width                                                                                   | These attributes control the amount of space the video will occupy on the page. Omitting these causes the video to display in its native size.                                                                                                                                                                              |
| loop                                                                                           | This attribute tells the browser to continuously play the video after it completes. If this attribute is omitted, the video stops after it plays through completely.                                                                                                                                                        |
| poster                                                                                         | This attribute specifies an image to show in the place allocated to the video until the user starts to play the video. Use this when you’re not using autoplay. It’s very useful for providing a professional image or artwork to represent the video. If it’s omitted, the poster appears in the first frame of the video. |


With all this new information about the available attributes, you can provide a bit more detail in your ```<video>``` element to control how you would like it to behave:

```
<video src="samplevideo.mp4" controls poster="picture.jpg" height="400" width="600">
</video>
```

Not all browsers support all video formats. Keep this in mind as you implement your ```<video>``` elements; what each browser supports can (and will) change as well. You need to ensure that you provide options to the browser so that it can choose which video format to play. If you don’t have all the appropriate supported video formats and your page happens to get a visitor with a browser that can’t play the video format you have, you also need to provide an alternative or at least the information that the user’s browser doesn’t support this video. The following code demonstrates this:

```
<video controls height="400" width="600" poster="picture.jpg">
  <source src="samplevideo.ogv" type="video/ogg"/>
  <source src="samplevideo.mp4" type="audio/mp4"/>
  <object>
    <p>Video is not supported by this browser.</p>
  </object>
</video>
```

The ```<video>``` element supports multiple ```<source>``` elements, so you can include one for each video type. A browser goes through the ```<source>``` elements from top to bottom and plays the first one that it supports.

Notice that the example also has an ```<object>``` element to cover the possibility that the client browser has no support for the ```<video>``` element at all. In such cases, you could have a Flash version of the video to play; but if no other version of the video is available to play, you can just display a message that video isn’t supported, as shown in the code snippet. Browsers that don’t support the ```<video>``` element ignore the element altogether but show the ```<object>``` element that they do understand. This lets older browsers “fall back” to previous methods for displaying video, ensuring that you can reach as many users as possible.

**Important**

If the browser supports the HTML5 video element, it doesn’t show the fallback. In this case, make sure that you have the valid <source> element specified for that browser. If you don’t, the video container shows an error in place of the control bar, saying that an invalid link or file is specified.

--/--

Example of an custom view of video element:

You can create your own control bar and substitute the control buttons to enable users to control the video. [This example](examples/html-video-audio-example.html) adds a few custom image elements to the page and wires up some JavaScript to control the video.

--/--

Methods and properties on the ```<video>``` object:

| Method/property | Description                                                                                                             |
|-----------------|-------------------------------------------------------------------------------------------------------------------------|
| play()          | Plays the video from its current position.                                                                              |
| pause()         | Pauses the video at its current position.                                                                               |
| volume          | Allows the user to control the volume of the video.                                                                     |
| currentTime     | Represents the current position of the video. Increase or decrease this value to move forward or backward in the video. |


## Using the ```<audio>``` element

The ```<audio>``` element is essentially identical to the ```<video>``` element. It has all the same attributes and the same methods. The only real difference is how it displays in the browser. Because no video is available to show, the ```<audio>``` element occupies no screen space. However, you can show the default controls—or you can again choose not to show the default controls and to create your own mechanism to control the audio, either through custom user interface elements or behind the scenes in JavaScript. Here is an example of what an ```<audio>``` declaration looks like in your webpage:

```
<audio controls>
  <source src="sample.mp3" type="audio/mp3"/>
  <source src="sample.ogg" type="audio/ogg"/>
  <p>Your browser does not support HTML5 audio.</p>
</audio>
```

Because no other screen space is required as in the video samples, the ```<audio>``` element has no height or width properties available.

[Here](examples/html-video-audio-example.html) is an example.

## Conclusion

The ```<audio>``` and ```<video>``` elements are very similar. The key point regarding these elements is that they provide a standardized way to represent media in HTML pages to simplify reading the HTML code and know exactly what the page is supposed to be doing.

## Sources

[MDN](https://developer.mozilla.org/)

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)