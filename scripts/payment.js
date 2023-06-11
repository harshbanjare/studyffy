const BACKEND_URL =
  "https://asia-east2-studyffy-e595d.cloudfunctions.net/api/api";

let plan = null;

const plans = [
  {
    name: "BASIC",
    price: 2500,
  },
  {
    name: "STANDARD",
    price: 3000,
  },
  {
    name: "PREMIUM",
    price: 3500,
  },
  {
    name: "SPECIAL",
    price: 4000,
  },
];
const disable_button = () => {
  document.querySelector("#paymentButton").disabled = true;
  document.querySelector("#paymentButton").innerHTML = "Loading...";
  document.querySelector("#paymentButton").style.backgroundColor = "#8b8b8b";
  document.querySelector("#paymentButton").style.cursor = "not-allowed";
};

const enable_button = () => {
  document.querySelector("#paymentButton").disabled = false;
  document.querySelector("#paymentButton").innerHTML = "Pay";
  document.querySelector("#paymentButton").style.backgroundColor = "#000";
  document.querySelector("#paymentButton").style.cursor = "pointer";
};

const pay = async (event) => {
  event.preventDefault();
  disable_button();
  const transaction_id = document.querySelector("#transaction_id").value;
  const plan_name = plan.name;

  if (!transaction_id) {
    alert("Please fill all the fields");
    enable_button();
    return;
  }
  if (!plan_name) {
    alert("No plan selected");
    enable_button();
    return;
  }

  const response = await fetch(BACKEND_URL + "/user/payment", {
    method: "POST",
    body: JSON.stringify({
      payment_done: true,
      payment_detail: transaction_id.trim(),
      plan: plan_name,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  const data = await response.json();
  if (data.error) {
    alert(data.error);
    enable_button();
  } else {
    alert("Submission Successful");
    console.log(data);
    document.location.replace("dashboard.html");
  }
};

window.addEventListener("load", () => {
  //extract plan from url
  const urlParams = new URLSearchParams(window.location.search);
  const plan_param = urlParams.get("plan");
  if (plan_param == null) {
    document.location.replace("index.html#pricing");
  }
  //check if plan is valid
  const planIndex = plans.findIndex((p) => p.name == plan_param);
  if (planIndex == -1) {
    document.location.replace("index.html#pricing");
  }
  if (!localStorage.getItem("token")) {
    document.location.replace(
      "login.html?redirect=payment.html?plan=" + plan_param
    );
  }

  //set plan

  plan = plans[planIndex];
  document.querySelector("#plan").innerHTML = plan.name;
  document.querySelector("#amount").innerHTML = plan.price;

  document.querySelector("#paymentButton").addEventListener("click", pay);
});
