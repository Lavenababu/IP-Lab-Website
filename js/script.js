document.addEventListener("DOMContentLoaded", init);

function init(event) {

    regForm = document.forms["registration"];

  regForm["register"].onclick = validateForm;
}

function validateForm(event) {

  if (!regForm["fname"].value) {
    alert("* Please enter your First Name");
  }

  if (!regForm["lname"].value) {
    alert("* Please enter your Last Name");
  }

  if (!regForm["email"].value) {
    alert("* Please enter your Email");
  }

  if (!regForm["pass"].value) {
    alert("* Please enter your Password");
  }
  if (!regForm["address"].value) {
    alert("* Please enter your Address");
  }

  if (!regForm["state"].value) {
    alert("* Please select your State");
  }
  if (!regForm["zip"].value) {
    alert("* Please enter your zip code");
  }
}

const getAddress = ["Don Bosco Institute of Technology", "Kurla", "Mumbai"];
document.getElementById("clgaddress").innerHTML = getAddress;

const getDate = new Date();
document.getElementById("date").innerHTML = getDate;
