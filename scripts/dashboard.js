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

window.onload = () => {
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
};
