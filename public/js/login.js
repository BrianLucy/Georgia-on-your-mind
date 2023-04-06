const submitButton = document.getElementById("submit"); //target the submit button

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const userName = document.getElementById("username").value;//get user-input value for username
  const password = document.getElementById("password").value;//get user-input value for password

  await fetch("/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userName,
      password: password,
    }),
  }).then((res) => {
    console.log(res);
    if (res.status == 200) {
      window.location.href = "/";
    }
  });
  console.log("Submitted!")
});