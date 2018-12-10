window.onload = function () {
  document.getElementById("outer").addEventListener("click", outerDivClick, false);
  document.getElementById("middle").addEventListener("click", middleDivClick, false);
  document.getElementById("inner").addEventListener("click", innerDivClick, false);
  document.getElementById("clearButton").addEventListener("click", clearList);
}
function outerDivClick() {
  appendText("outer Div Clicked");
}
function middleDivClick() {
  appendText("middle Div Clicked");
}
function innerDivClick() {
  appendText("inner Div Clicked");
}
function appendText(s) {
  var li = document.createElement("li");
  li.innerText = s;
  document.getElementById("eventOrder").appendChild(li);
}
function clearList() {
  var ol = document.createElement("ol");
  ol.id = "eventOrder";
  document.getElementById("bodyId").replaceChild(ol,document.
  getElementById("eventOrder"));
}
