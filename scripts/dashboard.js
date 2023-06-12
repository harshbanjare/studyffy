const BACKEND_URL =
  "https://asia-east2-studyffy-e595d.cloudfunctions.net/api/api";

let user = null;
let classes = null;

const showProfile = () => {
  const profile = document.getElementById("profile_view");
  profile.classList.remove("hide");

  const profile_btn = document.getElementById("profile_btn");
  profile_btn.classList.add("active");

  const class_view = document.getElementById("class_view");
  class_view.classList.add("hide");

  const class_btn = document.getElementById("class_btn");
  class_btn.classList.remove("active");
};

const showClass = () => {
  const profile = document.getElementById("profile_view");
  profile.classList.add("hide");

  const profile_btn = document.getElementById("profile_btn");
  profile_btn.classList.remove("active");

  const class_view = document.getElementById("class_view");
  class_view.classList.remove("hide");

  const class_btn = document.getElementById("class_btn");
  class_btn.classList.add("active");
};

const logout = async () => {
  const data = await fetch(BACKEND_URL + "/user/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  const user_data = await data.json();

  if (user_data.error) {
    localStorage.removeItem("token");
    document.location.replace("login.html");
  }

  localStorage.removeItem("token");
  document.location.replace("login.html");
};

const getUser = async () => {
  const data = await fetch(BACKEND_URL + "/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  const user_data = await data.json();

  if (user_data.error) {
    localStorage.removeItem("token");
    document.location.replace("login.html");
  }

  return user_data;
};

const render_user = (user) => {
  document.querySelector("#profile_name").innerHTML = user.name;

  document.querySelector("#profile_table_name").innerHTML = user.name;
  document.querySelector("#profile_table_email").innerHTML = user.email;
  document.querySelector("#profile_table_phone").innerHTML = user.phoneNo;
  document.querySelector("#profile_table_address").innerHTML = user.address;
  document.querySelector("#profile_table_payment_status").innerHTML =
    user?.payment_status || "N/A";
  document.querySelector("#profile_table_plan").innerHTML = user?.plan || "N/A";
};

const render_classes = (classes) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let html = "";

  classes.forEach((class_) => {
    const date = new Date(class_.date);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];

    html += `
      <div class="day" id="day${day}">
        <div class="date-cont">
          <div class="date">${day}</div>
          <div class="month">${month}</div>
        </div>
        <div class="class-data-container">
        <table>
            <tr>
              <td>Class link</td>
              <td>
                <a href="${class_.class_link}" target="_blank">${class_.class_link}</a>
              </td>
            </tr>
            <tr>
            <td>Class time</td>
            <td>${class_.time}</td>
          </tr>
          <tr>
            <td>Teacher</td>
            <td>${class_.teacher}</td>
          </tr>
          </table>
        </div>
      </div>
      `;
  });

  document.querySelector(".calender-container").innerHTML = html;
};
window.onload = async () => {
  if (!localStorage.getItem("token")) {
    document.location.replace("login.html");
  }

  const profile_btn = document.getElementById("profile_btn");
  profile_btn.addEventListener("click", showProfile);

  const class_btn = document.getElementById("class_btn");
  class_btn.addEventListener("click", showClass);

  const current_url = window.location.href;

  if (current_url.includes("#profile")) {
    showProfile();
  } else if (current_url.includes("#classes")) {
    showClass();
  }

  const logout_btn = document.getElementById("logout_btn");
  logout_btn.addEventListener("click", logout);

  try {
    user = await getUser();
    classes = user?.classes;
    classes.reverse();
  } catch (err) {
    console.log(err);
  }

  render_user(user);

  if (classes.length === 0) {
    document.querySelector(".calender-container").innerHTML =
      "<h5><i>Please Buy A Plan For Classes!</i></h5>";
  } else {
    render_classes(classes);
  }

  document.querySelector("#show_sidebar").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector("#show_sidebar").style.opacity = "0";
  });

  document.querySelector("#hide_sidebar").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector("#show_sidebar").style.opacity = "1";
  });
};
