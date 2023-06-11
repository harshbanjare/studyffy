const BACKEND_URL =
  "https://asia-east2-studyffy-e595d.cloudfunctions.net/api/api";

const disable_button = () => {
  document.querySelector("#loginButton").disabled = true;
  document.querySelector("#loginButton").innerHTML = "Logging in...";
  document.querySelector("#loginButton").style.backgroundColor = "#8b8b8b";
  document.querySelector("#loginButton").style.cursor = "not-allowed";
};

const enable_button = () => {
  document.querySelector("#loginButton").disabled = false;
  document.querySelector("#loginButton").innerHTML = "Login";
  document.querySelector("#loginButton").style.backgroundColor = "#000";
  document.querySelector("#loginButton").style.cursor = "pointer";
};

const login = async (event) => {
  event.preventDefault();
  disable_button();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (email && password) {
    const response = await fetch(BACKEND_URL + "/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if (data.error) {
      alert(data.error);
      enable_button();
    } else {
      alert("Login Successful");
      console.log(data);
      localStorage.setItem("token", data.token);

      document.location.replace("dashboard.html");
    }
  } else {
    alert("Please fill all the  fields");
    enable_button();
  }
};

window.addEventListener("load", () => {
  if (localStorage.getItem("token")) {
    document.location.replace("dashboard.html");
  }
  document.querySelector("#loginButton").addEventListener("click", login);
});
