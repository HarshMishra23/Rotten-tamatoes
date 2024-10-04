let isInValid =false;
let isPasswordInvalid= false;
let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError")
// usernameError.textContent = "";

document.getElementById("regsiterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  

  let username = document.getElementById("username");
  let password = document.getElementById("Password")
  let usernameValue = username.value;
  let passwordValue = password.value
  let username__regex = /^[A-Za-z]{1,6}$/;
  let password__regex = /^[A-Za-z0-9]{8,15}$/;

  if (!username__regex.test(usernameValue)){
    usernameError.textContent="username is invalid";
    usernameError.style.color="red";
    isInValid=true;
  }

  if (!password__regex.test(passwordValue)){
    passwordError.textContent="username is invalid";
    passwordError.style.color="red";
    isInValid=true;
  }

  if (
   username__regex.test(usernameValue) &&
    password__regex.test(passwordValue)
  ){
  if (!localStorage.hasOwnProperty("database")){
    localStorage.setItem(
      "database", 
      JSON.stringify([{username: usernameValue, Password: passwordValue}])
    )
  } else{
    let databaseValue = JSON.parse (localStorage.getItem("database"));
    databaseValue.push({username: usernameValue, Password: passwordValue})
    localStorage.setItem("database", JSON.stringify(databaseValue));
  }
  }
});

document.getElementById("username").addEventListener("input", () =>{
  if(isInValid){
    isInValid= false;
    usernameError.textContent = "";
  }
  let userCount = document.getElementById("usercount")
  userCount.textContent= document.getElementById("username").value.length;
});

document.getElementById("Password").addEventListener("input", (e)=>{
  e.preventDefault()
  if(isInValid){
    isInValid= false;
    passwordError.textContent = "";
  }
  let passCount = document.getElementById("passcount")
  passCount.textContent= document.getElementById("Password").value.length;
});



