function showTab(tabId) {
  const contents = document.querySelectorAll(".content");
  const buttons = document.querySelectorAll("button");

  contents.forEach(content => {
    content.classList.remove("active");
  });

  buttons.forEach(button => {
    button.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");
  event.target.classList.add("active");
}