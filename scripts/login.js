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

      //check url params for redirect url
      const urlParams = new URLSearchParams(window.location.search);
      const redirect_url = urlParams.get("redirect");
      if (redirect_url) {
        console.log("redirecting to " + redirect_url);
        document.location.replace(redirect_url);
      } else {
        document.location.replace("dashboard.html");
      }
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

  const signup_link = document.querySelector("#signup_page_link");
  signup_link.href = `signup.html?redirect=${
    location.pathname + location.search
  }`;
  document.querySelector("#loginButton").addEventListener("click", login);
});
