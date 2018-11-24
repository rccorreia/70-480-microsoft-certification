# Using the Geolocation API

[Here](examples/geolocation-api.html) is the example page.

Location services depend on the Global Positioning System (GPS), IP addresses, and other device characteristics.
You can get a reference to the Geolocation API from the window.navigator property, as follows:

```
  var geoLocator = window.navigator.geolocation;
```

The Geolocation API supports three key methods that you use to interact with it: "getCurrentPosition", "watchPosition", and "clearWatch".

## Using the getCurrentPosition method

Users are asked whether they want to allow this application to determine their
location.

Here’s an example of using the getCurrentPosition method:
```
  getCurrentPosition(positionCallback, [positionErrorCallback], [positionOptions])
```

The first parameter is a callback method that the API calls after the current position is determined. The second parameter is optional, but it’s also a
callback function called when an error occurs. The callback method you specify here should handle any errors that can occur when trying to get the current position. The last optional parameter is a special object called PositionOptions, which lets you set some special options that control how the getCurrentPosition method behaves.

### Properties available on the PositionOptions object

| Property           | Description                                                                                                                                                                                                                                                                                                                                  |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| enableHighAccuracy | This causes the method to be more resource intensive if set to true. The default is false. If true, the getCurrentPosition method tries to get as close as it can to the actual location.                                                                                                                                                    |
| timeout            | This specifies a timeout period for how long the getCurrentPosition method can take to complete. This number is measured in milliseconds and defaults to zero. A value of zero represents infinite.                                                                                                                                          |
| maximumAge         | If this is set, the API is being told to use a cached result if available, rather than make a new call to get the current position. The default is zero, so a new call is always be made. If maximumAge is set to a value and the cache isn’t older than the allowable age, the cached copy is used. This value is measured in milliseconds. |

The position object exposes two properties: coords and timestamp. The
timestamp property indicates the time at which the coords were received. The coords property is itself a coordinates object that contains the latitude, longitude, altitude, heading, and speed of the device’s current position and/or relative to the last position acquired.

## Using the watchPosition method

Provides a built-in mechanism that continuously polls for the current position. Here’s an example of using the method:

```
  var watcher = geoLocator.watchPosition(successCallBack,errorCallback,positionOptions)
```

The watcher variable holds a reference to the watchPosition instance being invoked, which can be useful later. The method calls the success callback method every time the Geolocation API detects a new location. The polling continues forever unless it you stop it. You can cancel polling by

## Sources

[Exam Ref 70-480 Programming in HTML5 with JavaScript and CSS3 (MCSD)](https://www.microsoft.com/en-us/p/exam-ref-70-480-programming-in-html5-with-javascript-and-css3-mcsd/fgqpf3h0qll7?activetab=pivot%3aoverviewtab)
