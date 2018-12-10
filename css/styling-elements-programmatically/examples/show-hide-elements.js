window.onload = function () {
  document.getElementById("btnHideAnElement").onclick = function () {
    if (document.getElementById("innerDiv").style.display == 'inline') {
      document.getElementById("innerDiv").style.display = 'none';
    }
    else {
      document.getElementById("innerDiv").style.display = 'inline';
    }
  }
}
