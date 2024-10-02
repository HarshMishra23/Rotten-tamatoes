document.getElementById("regsiterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  let username = document.getElementById("username");
  let usernameValue = username.value;
  let regex = /(\d)/g;
  console.log(regex.test(usernameValue));
  if (regex.test(usernameValue)) {
    window.location.href = "index.html";
  }
});