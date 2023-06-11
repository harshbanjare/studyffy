const close_class_modal = function () {
  document.querySelector("#set_class_modal").close();
};



const show_all_students = function () {
  const all_students_view = document.getElementById("all_student_view");
  all_students_view.classList.remove("hide");

  const all_students_btn = document.getElementById("all_students_btn");
  all_students_btn.classList.add("active");

  const set_class_view = document.getElementById("set_class_view");
  set_class_view.classList.add("hide");

  const set_class_btn = document.getElementById("set_class_btn");
  set_class_btn.classList.remove("active");
};

const show_set_class = function () {
  const all_students_view = document.getElementById("all_student_view");
  all_students_view.classList.add("hide");

  const all_students_btn = document.getElementById("all_students_btn");
  all_students_btn.classList.remove("active");

  const set_class_view = document.getElementById("set_class_view");
  set_class_view.classList.remove("hide");

  const set_class_btn = document.getElementById("set_class_btn");
  set_class_btn.classList.add("active");
};

const show_registered_students = () => {
  const registered_students_tab = document.querySelector(
    "#registered_students_tab"
  );
  const pending_students_tab = document.querySelector("#pending_students_tab");

  const verified_students_tab = document.querySelector(
    "#verified_students_tab"
  );

  registered_students_tab.classList.add("active");
  pending_students_tab.classList.remove("active");
  verified_students_tab.classList.remove("active");

  const registered_students = document.querySelector("#registered_students");
  const pending_students = document.querySelector("#pending_students");
  const verified_students = document.querySelector("#verified_students");

  registered_students.classList.remove("hideTable");
  pending_students.classList.add("hideTable");
  verified_students.classList.add("hideTable");
};

const show_pending_students = () => {
  const registered_students_tab = document.querySelector(
    "#registered_students_tab"
  );
  const pending_students_tab = document.querySelector("#pending_students_tab");

  const verified_students_tab = document.querySelector(
    "#verified_students_tab"
  );

  registered_students_tab.classList.remove("active");
  pending_students_tab.classList.add("active");
  verified_students_tab.classList.remove("active");

  const registered_students = document.querySelector("#registered_students");
  const pending_students = document.querySelector("#pending_students");
  const verified_students = document.querySelector("#verified_students");

  registered_students.classList.add("hideTable");
  pending_students.classList.remove("hideTable");
  verified_students.classList.add("hideTable");
};

const show_verified_students = () => {
  const registered_students_tab = document.querySelector(
    "#registered_students_tab"
  );
  const pending_students_tab = document.querySelector("#pending_students_tab");

  const verified_students_tab = document.querySelector(
    "#verified_students_tab"
  );

  registered_students_tab.classList.remove("active");
  pending_students_tab.classList.remove("active");
  verified_students_tab.classList.add("active");

  const registered_students = document.querySelector("#registered_students");
  const pending_students = document.querySelector("#pending_students");
  const verified_students = document.querySelector("#verified_students");

  registered_students.classList.add("hideTable");
  pending_students.classList.add("hideTable");
  verified_students.classList.remove("hideTable");
};

const show_basic_student = () => {
  const basic_students_tab = document.querySelector("#basic_students_tab");
  const standard_students_tab = document.querySelector(
    "#standard_students_tab"
  );

  const premium_students_tab = document.querySelector("#premium_students_tab");
  const special_students_tab = document.querySelector("#special_students_tab");

  basic_students_tab.classList.add("active");
  standard_students_tab.classList.remove("active");
  premium_students_tab.classList.remove("active");
  special_students_tab.classList.remove("active");

  const basic_students = document.querySelector("#basic_students");
  const standard_students = document.querySelector("#standard_students");
  const premium_students = document.querySelector("#premium_students");
  const special_students = document.querySelector("#special_students");

  basic_students.classList.remove("hideTable");
  standard_students.classList.add("hideTable");
  premium_students.classList.add("hideTable");
  special_students.classList.add("hideTable");
};

const show_standard_student = () => {
  const basic_students_tab = document.querySelector("#basic_students_tab");
  const standard_students_tab = document.querySelector(
    "#standard_students_tab"
  );

  const premium_students_tab = document.querySelector("#premium_students_tab");
  const special_students_tab = document.querySelector("#special_students_tab");

  basic_students_tab.classList.remove("active");
  standard_students_tab.classList.add("active");
  premium_students_tab.classList.remove("active");
  special_students_tab.classList.remove("active");

  const basic_students = document.querySelector("#basic_students");
  const standard_students = document.querySelector("#standard_students");
  const premium_students = document.querySelector("#premium_students");
  const special_students = document.querySelector("#special_students");

  basic_students.classList.add("hideTable");
  standard_students.classList.remove("hideTable");
  premium_students.classList.add("hideTable");
  special_students.classList.add("hideTable");
};

const show_premium_student = () => {
  const basic_students_tab = document.querySelector("#basic_students_tab");
  const standard_students_tab = document.querySelector(
    "#standard_students_tab"
  );

  const premium_students_tab = document.querySelector("#premium_students_tab");
  const special_students_tab = document.querySelector("#special_students_tab");

  basic_students_tab.classList.remove("active");
  standard_students_tab.classList.remove("active");
  premium_students_tab.classList.add("active");
  special_students_tab.classList.remove("active");

  const basic_students = document.querySelector("#basic_students");
  const standard_students = document.querySelector("#standard_students");
  const premium_students = document.querySelector("#premium_students");
  const special_students = document.querySelector("#special_students");

  basic_students.classList.add("hideTable");
  standard_students.classList.add("hideTable");
  premium_students.classList.remove("hideTable");
  special_students.classList.add("hideTable");
};

const show_special_student = () => {
  const basic_students_tab = document.querySelector("#basic_students_tab");
  const standard_students_tab = document.querySelector(
    "#standard_students_tab"
  );

  const premium_students_tab = document.querySelector("#premium_students_tab");
  const special_students_tab = document.querySelector("#special_students_tab");

  basic_students_tab.classList.remove("active");
  standard_students_tab.classList.remove("active");
  premium_students_tab.classList.remove("active");
  special_students_tab.classList.add("active");

  const basic_students = document.querySelector("#basic_students");
  const standard_students = document.querySelector("#standard_students");
  const premium_students = document.querySelector("#premium_students");
  const special_students = document.querySelector("#special_students");

  basic_students.classList.add("hideTable");
  standard_students.classList.add("hideTable");
  premium_students.classList.add("hideTable");
  special_students.classList.remove("hideTable");
};
