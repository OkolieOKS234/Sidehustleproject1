function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const gender = document.getElementById("gender");
    const password = document.getElementById("password");

    
    if (!name.value || !email.value || !phone.value || !gender.value || !password.value) {
      alert("Please fill all fields");
      if (!name.value) {
        name.classList.add("highlight");
      }
      if (!email.value) {
        email.classList.add("highlight");
      }
      if (!phone.value) {
        phone.classList.add("highlight");
      }
      if (!gender.value) {
        gender.classList.add("highlight");
      }
      if (!password.value) {
        password.classList.add("highlight");
      }
      return;
    }

    alert("Successful");
  }