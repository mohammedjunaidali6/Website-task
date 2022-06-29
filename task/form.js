function Form() {
  var jsonObject={};
  var x = document.forms["myForm"]["id"].value;
  if (x == "") {
    document.getElementById('errorname').innerHTML = "Please enter id";
    id.focus();
    return false;
  } else {
    document.getElementById('errorname').innerHTML = "";
  }
    var z = document.forms["myForm"]["fname"].value;
    if (z == "") {
      document.getElementById('errorname1').innerHTML = "Please enter a valid name";
      fname.focus();
      return false;
    } else {
      document.getElementById('errorname1').innerHTML = "";
    }
    var y = document.forms["myForm"]["lname"].value;
    if (y == "") {
      document.getElementById('errornames').innerHTML = "Please enter your lastname";
      lname.focus();
      return false;
    } else {
      document.getElementById('errornames').innerHTML = "";
    }
    var r = document.forms["myForm"]["mail"].value;
    if (r == "") {
      document.getElementById('errorname9').innerHTML = "Please enter valid mail";
      mail.focus();
      return false;
    } else {
      document.getElementById('errorname9').innerHTML = "";
    }
    var b = document.forms["myForm"]["subject"].value;
    if (b == "") {
      document.getElementById('errorname11').innerHTML = "Please enter your subject";
      subject.focus();
      return false;
    } else {
      document.getElementById('errorname11').innerHTML = "";
    }
    jsonObject = {
      ID:x,
      FirstName:z,
      LastName:y,
      Email:r,
      Subject:b
    }
    document.write(JSON.stringify(jsonObject));
  }
