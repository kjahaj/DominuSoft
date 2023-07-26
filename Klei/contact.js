let styleElement = document.getElementById('customStyles');

if (!styleElement) {
  styleElement = document.createElement('style');
  styleElement.id = 'customStyles';
  document.head.appendChild(styleElement);
}

function validateForm() {
    let name = document.forms["myform"]["fname"].value;
    let surname = document.forms["myform"]["lname"].value;
    let email = document.forms["myform"]["email"].value;
    let message = document.forms["myform"]["message-area"].value;
    if (name == "") {
      
      document.forms["myform"]["fname"].placeholder = "Name can not be empty!";
      
      return false;
    } else if (!/^[A-Za-z]{1,20}$/.test(x)) {
      alert("Name should contain only letters and be no more than 20 characters long.");
      return false;
    }
  }
  