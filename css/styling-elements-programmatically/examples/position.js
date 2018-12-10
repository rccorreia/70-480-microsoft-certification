window.onload = function () {
  var top = document.getElementById("topText");
  var left = document.getElementById("leftText");
  var pos = document.getElementById("positioning");

  document.getElementById("btnPosition").onclick = function () {
    var img = document.getElementById("orange2");
    img.style.position = pos.value;
    img.style.left = left.value + "px";
    img.style.top = top.value + "px";
  }
}
