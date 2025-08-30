// let person = prompt("Welcome to Our Website, what's your name?");
// if (person != null) {
//     document.getElementById("username").innerHTML = person;
// }

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
} 

const form = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    let name = formData.get('name');
    let email = formData.get('email');
    let birthday = formData.get('birthday');
    let gender = formData.get('gender');
    let message = formData.get('message');

    document.getElementById("display-name").innerHTML = name;
    document.getElementById("display-email").innerHTML = email;
    document.getElementById("display-birthday").innerHTML = birthday;
    document.getElementById("display-gender").innerHTML = gender;
    document.getElementById("display-message").innerHTML = message;
    document.getElementById("messageSubmit").innerHTML = "Selamat, pesan kamu sudah kami simpan!";

    styleResult = "flex"
    document.getElementById("resultSubmit").style.display = styleResult;
});