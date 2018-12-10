function CheckString() {
  try {
    var s = $('#regExStringTest').val();
    var regExpression = /^[A-Z,a-z]\d[A-Z,a-z][\s{1}]?\d[A-Z,a-z]\d/;
    if (regExpression.test(s))
      alert("Valid postal code.");
    else
      alert("Invalid postal code.");
  } catch (e) {
    alert(e.message);
  }
}

function CheckStringExec() {
  var s = $('#regExStringExec').val();
  var regExpression = /^[A-Z,a-z]\d[A-Z,a-z][\s{1}]?\d[A-Z,a-z]\d/;
  var results = regExpression.exec(s);
  if (results != null)
    alert("Valid postal code." + results[0]);
  else
    alert("Invalid postal code.");
}
