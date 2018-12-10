var globalVar = "global";
window.onload = function () {
  var localVar = "local";
  document.getElementById("Div1").onclick = function () {
    var insideDiv1Click = "insideDiv1";
    alert(globalvar);
    alert(localVar);
    alert(insideDiv1Click);
  };

  document.getElementById("Div2").onclick = function () {
    alert(globalVar);
    alert(localVar);
    alert(insideDiv1Click);
  };

  document.getElementById("Div3").onclick = function () {
    var insideDiv3 = "Div3";
    AFunction();
    BFunctionWithParam(insideDiv3);
  };

  function AFunction() {
    var x;
    alert(insideDiv3);
  }

  function BFunctionWithParam(p) {
    alert(p);
    alert(localVar);
  }
}
