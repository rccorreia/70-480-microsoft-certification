window.onload = function () {
  document.getElementById("aRange").addEventListener("change", rangeChangeEvent);
  document.getElementById("aText").addEventListener("change", rangeChangeEvent);
  
  document.getElementById("firstNameText").focus();
  document.getElementById("firstNameText").addEventListener("blur", function () {
    if (this.value.length < 5) {
      document.getElementById("ruleViolation").innerText =
      'First Name is required to be 5 letters.';
      document.getElementById("ruleViolation").style.color = 'red';
      this.focus();
    }else{
      document.getElementById("ruleViolation").innerText = "";
    }
  });

  document.getElementById("lastNameText").addEventListener("keydown", function () {
    document.getElementById("outputText").innerText = window.event.keyCode;
  });

  document.getElementById("yellowBox").addEventListener("click", yellowBoxClick);

  document.getElementById("yellowBox").addEventListener("mouseenter", yellowBoxEnter);
  document.getElementById("yellowBox").addEventListener("mouseleave", yellowBoxLeave);

  var chip = document.getElementById("chip");
  chip.addEventListener("dragstart", function ()
  { window.event.dataTransfer.setData("Text", this.id); });

  var b1 = document.getElementById("bucket1");
  b1.addEventListener("dragenter", function () {
    b1.classList.add("over");
    window.event.returnValue = false;
  });
  b1.addEventListener("dragleave", function () {
    b1.classList.remove("over");
  });
  b1.addEventListener("dragover", function () {
    window.event.returnValue = false;
  });
  b1.addEventListener("drop", function () {
    window.event.returnValue = false;
    var data = event.dataTransfer.getData("Text");
    var d = document.getElementById(data);
    d.classList.remove("begin");
    d.classList.add("dropped");
    this.appendChild(d);
  });
  
  var b2 = document.getElementById("bucket2");
  b2.addEventListener("dragenter", function () {
    b2.classList.add("over");
    window.event.returnValue = false;
  });
  b2.addEventListener("dragleave", function () {
    b2.classList.remove("over");
  });
  b2.addEventListener("dragover", function () {
    window.event.returnValue = false;
  });
  b2.addEventListener("drop", function () {
    window.event.returnValue = false;
    var data = event.dataTransfer.getData("Text");
    var d = document.getElementById(data);
    d.classList.remove("begin");
    d.classList.add("dropped");
    this.appendChild(d);
  });
  
  var b3 = document.getElementById("bucket3");
  b3.addEventListener("dragenter", function () {
    b3.classList.add("over");
    window.event.returnValue = false;
  });
  b3.addEventListener("dragleave", function () {
    b3.classList.remove("over");
  });
  b3.addEventListener("dragover", function () {
    window.event.returnValue = false;
  });
  b3.addEventListener("drop", function () {
    window.event.returnValue = false;
    var data = event.dataTransfer.getData("Text");
    var d = document.getElementById(data);
    d.classList.remove("begin");
    d.classList.add("dropped");
    this.appendChild(d);
  });
}

function rangeChangeEvent() {
  document.getElementById("rangeValue").innerText = this.value;
}

function yellowBoxClick() {
  document.write("Client X: " + window.event.clientX + " ClientY: "
  + window.event.clientY);
  document.write("<BR />");
  document.write("offsetX: " + window.event.offsetX + " offsetY: "
  + window.event.offsetY);
  document.write("<BR />");
  document.write("screen X: " + window.event.screenX + " screenY: "
  + window.event.screenY);
}

function yellowBoxEnter() {
  this.classList.add("scale");
}
function yellowBoxLeave() {
  this.classList.remove("scale");
}
