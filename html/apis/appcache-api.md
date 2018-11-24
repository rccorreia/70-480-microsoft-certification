# Using the AppCache API

This api can make your application available even offline.

AppCache stores files in the application cache in the browser. Just as with
Web Storage, the amount of data the browser can store locally is limited for offline use. Two components make up the AppCache API: the manifest file and a JavaScript API to support it.

## Using AppCache Manifest

Add this attribute to the HTML element in the page to specify you want it to be available offline:

```
  <html manifest="webApp.appcache">
```

The value of the manifest attribute points to a manifest file. The name of
the file is a convention more than a requirement; you can name the file anything, but the file extension is usually ".appcache".

The application cache manifest file must list each and every file and resource required to be stored for offline use. When the browser parses the manifest attribute of the html element, it downloads the manifest and stores it locally. It also ensures that it downloads all the files listed in the manifest so that they are available offline. The manifest file contains three sections: CACHE, NETWORK, and FALLBACK. Each section might appear just once, multiple times in the file, or not at all. Each serves a specific purpose in how application caching functions when dealing with the resources in specific scenarios. A typical manifest file looks like this:

```
CACHE MANIFEST
# My Web Application Cache Manifest
# v.1.0.0.25
#
#Cache Section. All Cached items.
CACHE
/pages/page1.html
/pages/page2.html

#Required Network resources
NETWORK:
login.html

#Fallback items.
FALLBACK:
login.html fallback-login.html
```

The first line in a manifest file must be CACHE MANIFEST. The CACHE section lists all the resources that must be cached offline.

The NETWORK section declares any resources that must be available from the Internet. These items can’t be cached. If such a resource isn’t listed here, the browser won’t know to check on the Internet for it when in offline mode. When the browser is in offline mode, it doesn’t attempt to go to the Internet for anything unless it’s listed in the NETWORK section.

The FALLBACK section enables you to provide fallback instructions to the browser in the event that an item isn’t available in the cache and the browser is in offline mode.

## Using the AppCache API

The application cache is available in JavaScript as a global object.

```
  var appCache = window.applicationCache;
```

One of the more useful things you can do when the page is loaded is verify its status. You achieve this by evaluating the status property of the AppCache object:

### The application cache status property

| Status      | Description                                                                            |
|-------------|----------------------------------------------------------------------------------------|
| Uncached    | The web application isn’t associated with an application manifest.                     |
| Idle        | The caching activity is idle, and the most up-to-date copy of the cache is being used. |
| Checking    | The application manifest is being checked for updates.                                 |
| Downloading | The resources in the application manifest are being downloaded.                        |
| UpdateReady | The resources listed in the manifest have been successfully downloaded.                |
| Obsolete    | The manifest can no longer be downloaded, so the application cache is being deleted.   |

After you know the cache status, two methods on the AppCache object can be useful.

### Methods available with the applicationCache object

| Method    | Description                                                      |
|-----------|------------------------------------------------------------------|
| swapCache | Indicates that the cache be replaced with a newer version.       |
| update    | Tells the browser to update the cache if an update is available. |

When the update method is called, an update to the cache is prepared. When that’s ready to download, the status of the application cache changes to UpdateReady. When this is set, a call to the swapCache method tells the application to switch to the most recent cache.

the AppCache object can raise a series of events that you can handle. The application cache typically operates in the background, and you won’t need these events.

### Events available from the applicationCache object

| Event         | Description                                                                                                                     |
|---------------|---------------------------------------------------------------------------------------------------------------------------------|
| onchecking    | The browser is checking for an update to the application manifest, or the application is being cached for the first time.       |
| onnoupdate    | The application manifest has no update available.                                                                               |
| ondownloading | The browser is downloading what it has been told to do per the manifest file.                                                   |
| onprogress    | Files are being downloaded to the offline cache. This event fires periodically to report progress.                              |
| oncached      | The download of the cache has completed.                                                                                        |
| onupdateready | The resources listed in the manifest have been newly redownloaded, and the swapCache method might be called.                    |
| onobsolete    | A manifest file is no longer available.                                                                                         |
| onerror       | An error has occurred. This could result from many things. Appropriate logging is necessary to get the information and resolve. |

The most common scenario is to handle the onupdateready method and then make a call to the swapCache method, as in this example:

```
  window.onload = function () {
    var appCache = window.applicationCache;
    appCache.oncached = function (e) { alert("cache successfully downloaded."); };
    appCache.onupdateready = function (e) { appCache.swapCache(); };
  }
```

## Important! 

If you really want to change the file extension, you need to configure the web server so that your chosen file extension is returned with a MIME type of text/cache-manifest.

The call to the update method is asynchronous. Therefore, you must handle the
onupdateready event to determine when the update has completed the download process.

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
