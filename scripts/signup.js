const BACKEND_URL =
  "https://asia-east2-studyffy-e595d.cloudfunctions.net/api/api";

const disable_button = () => {
  document.querySelector("#register_button").disabled = true;
  document.querySelector("#register_button").innerHTML = "Creating...";
  document.querySelector("#register_button").style.backgroundColor = "#8b8b8b";
  document.querySelector("#register_button").style.cursor = "not-allowed";
};

const enable_button = () => {
  document.querySelector("#register_button").disabled = false;
  document.querySelector("#register_button").innerHTML = "Create Account";
  document.querySelector("#register_button").style.backgroundColor = "#000";
  document.querySelector("#register_button").style.cursor = "pointer";
};
const register = async (event) => {
  event.preventDefault();
  disable_button();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const password = document.querySelector("#password").value.trim();
  const phoneNo = document.querySelector("#phoneNo").value.trim();
  const address = document.querySelector("#address").value.trim();
  // const pfp = document.querySelector('#pfp').value.trim();
  if (name && email && password && phoneNo && address) {
    const response = await fetch(BACKEND_URL + "/user/create", {
      method: "POST",
      body: JSON.stringify({ name, email, password, phoneNo, address }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    if (data.error) {
      alert(data.error);
      enable_button();
    } else {
      alert("Account Created Successfully");

      const urlParams = new URLSearchParams(window.location.search);
      const redirect_url = urlParams.get("redirect");
      if (redirect_url) {
        console.log("redirecting to " + redirect_url);
        document.location.replace(redirect_url);
      } else {
        document.location.replace("login.html");
      }
    }
  } else {
    enable_button();
    alert("Please fill all the fields");
  }
};

window.addEventListener("load", () => {
  if (localStorage.getItem("token")) {
    document.location.replace("dashboard.html");
  }

  document
    .querySelector("#register_button")
    .addEventListener("click", register);
});
