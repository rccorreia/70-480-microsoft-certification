window.onload = function () {
  var geoLocator = window.navigator.geolocation;
  var posOptions = {enableHighAccuracy: true,timeout: 45000};
  geoLocator.getCurrentPosition(successPosition, errorPosition,
  posOptions);

  watcher = geoLocator.watchPosition(successPositionWatcher, errorPositionWatcher, posOptions);
}

function successPositionWatcher(pos) {
  var sp = document.createElement("p");
  sp.innerText = "Latitude: " + pos.coords.latitude +
  " Longitude: " + pos.coords.longitude;
  document.getElementById("geoResultsWatcher").appendChild(sp);
  geoLocator.clearWatch(watcher);
}

function successPosition(pos) {
  var sp = document.createElement("p");
  sp.innerText = "Latitude: " + pos.coords.latitude +
  " Longitude: " + pos.coords.longitude;
  document.getElementById("geoResults").appendChild(sp);
}

function errorPositionWatcher(err) {
  var sp = document.createElement("p");
  sp.innerText = "error: " + err.message; + " code: " + err.code;
  document.getElementById("geoResultsWatcher").appendChild(sp);
}

function errorPosition(err) {
  var sp = document.createElement("p");
  sp.innerText = "error: " + err.message; + " code: " + err.code;
  document.getElementById("geoResults").appendChild(sp);
}
