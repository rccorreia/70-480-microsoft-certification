window.onload = function () {
  document.getElementById("rotate").onclick = function () {
    this.classList.add("rotate");
  }

  document.getElementById("translate").onclick = function () {
    this.classList.add("translate");
  }

  document.getElementById("skew").onclick = function () {
    this.classList.add("skew");
  }

  document.getElementById("scaleLarger").onclick = function () {
    this.classList.add("scaleLarger");
  }

  document.getElementById("scaleSmaller").onclick = function () {
    this.classList.add("scaleSmaller");
  }

  document.getElementById("scaleFlip").onclick = function () {
    this.classList.add("scaleFlip");
  }
}
