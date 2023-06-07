const time_limit = 120;

let currentQuestionIndex = null;

let userAnswersValidity = [];

let userSelection = [];

let timer = null;

function fancyTimeFormat(duration) {
  // Hours, minutes and seconds
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;

  return ret;
}

const questions = [
  {
    question:
      'Choose the correct verb to complete the sentence: "I _____ TV every day."',
    options: ["watch", "watching", "am watching", "am watch"],
    answer: 0,
  },
  {
    question:
      'Choose the correct subject-verb agreement: "Neither the boys nor the girls _____ happy."',
    options: ["is", "are", "am", "be"],
    answer: 1,
  },
  {
    question:
      'Identify the correct preposition to complete the sentence: "The cat is sitting _____ the chair." ',
    options: ["in", "of", "at", "under"],
    answer: 3,
  },
  {
    question:
      'Choose the correct article to complete the sentence: "I want to buy _____ apple." ',
    options: ["a", "an", "the", "none of the above"],
    answer: 1,
  },
  {
    question:
      'Identify the correct adjective to complete the sentence: "She is _____ girl."',
    options: ["a happy", "an happy", "a happily", "none of the above"],
    answer: 0,
  },
  {
    question: 'Choose the correct sentence structure:  "She sing very well." ',
    options: [
      "She sings very well",
      "She sing very good",
      "She sing well",
      "none of the above",
    ],
    answer: 0,
  },
  {
    question: 'Identify the correct past tense form: "He eat breakfast."',
    options: [
      "He eated breakfast",
      "He eaten breakfast",
      "none of the above",
      "He ate breakfast",
    ],
    answer: 3,
  },
  {
    question: 'Choose the correct possessive form: "The dog\'s ball." ',
    options: [
      "The dog ball",
      "The dogs ball",
      "The dog's ball",

      "The dogs' ball",
    ],
    answer: 2,
  },
  {
    question: "Which of the following sentences is grammatically correct?",
    options: [
      "I am not agree with you",
      "I am not agreeing with you",
      "I don't agree with you",
      "I don't agreeing with you",
    ],
    answer: 2,
  },
  {
    question: "This is the _____ book I've ever read.",
    options: [
      "most interesting",
      "more interesting",
      "interesting",
      "none of the above",
    ],
    answer: 0,
  },
];

const start = () => {
  setQuestion(0);
  initTimer();
};

const initTimer = () => {
  let time = time_limit;
  timer = setInterval(() => {
    if (time === 0) {
      clearInterval(timer);
      end();
    }
    time--;
    document.getElementById("time").innerHTML = fancyTimeFormat(time);
  }, 1000);
};

const nextQuestion = () => {
  if (currentQuestionIndex === questions.length - 1) {
    return;
  }
  setQuestion(currentQuestionIndex + 1);
};

const prevQuestion = () => {
  if (currentQuestionIndex === 0) {
    return;
  }
  setQuestion(currentQuestionIndex - 1);
};

const end = () => {
  clearInterval(timer);

  //disable all options
  document.querySelectorAll(".option").forEach((option) => {
    option.children[0].disabled = true;
  });

  //disable next, prev and submit buttons
  document.getElementById("next").disabled = true;
  document.getElementById("next").style.backgroundColor = "grey";
  document.getElementById("next").style.cursor = "not-allowed";

  document.getElementById("prev").disabled = true;
  document.getElementById("prev").style.backgroundColor = "grey";
  document.getElementById("prev").style.cursor = "not-allowed";

  document.getElementById("submit").disabled = true;
  document.getElementById("submit").style.backgroundColor = "grey";
  document.getElementById("submit").style.cursor = "not-allowed";

  let score = 0;
  userAnswersValidity.forEach((answer) => {
    if (answer) {
      score++;
    }
  });

  document.getElementById("score").innerHTML = score;
  document.getElementById("total").innerHTML = questions.length;
  document.getElementById("result").showModal();

  // alert(`Your score is ${score} out of ${questions.length}`);
};

const userSelectionHandler = (e) => {
  userSelection[currentQuestionIndex] = parseInt(e.target.value);
  userAnswersValidity[currentQuestionIndex] =
    parseInt(e.target.value) === questions[currentQuestionIndex].answer;
};

const setQuestion = (index) => {
  document.querySelectorAll(".option").forEach((option) => {
    option.children[0].checked = false;
  });

  if (userSelection[index] !== undefined) {
    document.getElementById(`option${userSelection[index] + 1}`).checked = true;
  }

  currentQuestionIndex = index;
  const question = questions[index];

  document.getElementById("question_text").innerHTML = question.question;
  document.querySelectorAll(".option").forEach((option, index) => {
    option.children[1].innerHTML = question.options[index];
  });

  if (currentQuestionIndex === 0) {
    document.getElementById("prev").style.backgroundColor = "grey";
    document.getElementById("prev").style.cursor = "not-allowed";
  } else {
    document.getElementById("prev").style.backgroundColor = "#00c8ff";
    document.getElementById("prev").style.cursor = "pointer";
  }

  if (currentQuestionIndex === questions.length - 1) {
    document.getElementById("next").style.backgroundColor = "grey";
    document.getElementById("next").style.cursor = "not-allowed";
  } else {
    document.getElementById("next").style.backgroundColor = "#00c8ff";
    document.getElementById("next").style.cursor = "pointer";
  }

  document.getElementById("question_number").innerHTML = index + 1;
  document.getElementById("total_questions").innerHTML = questions.length;
};

const calculateScore = () => {};

window.onload = () => {
  start();

  document.querySelectorAll(".option").forEach((option) => {
    option.children[0].addEventListener("change", userSelectionHandler);
  });

  document.getElementById("next").addEventListener("click", nextQuestion);
  document.getElementById("prev").addEventListener("click", prevQuestion);
  document.getElementById("submit").addEventListener("click", end);
};
