document.querySelector("#switch").addEventListener("click", function () {
  const html = document.querySelector('html');
  const currentTheme = html.getAttribute('data-mdb-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-mdb-theme', newTheme);
  const elementR = document.getElementById("R");
  if (newTheme === 'light') {
    elementR.style.color = ' #8e1dff';
  } else {
    elementR.style.color = 'white';
  }
});

function clickFun(element) {
  const pages = document.querySelectorAll(".pages");
  pages.forEach(function (page) {
    page.classList.remove("active");
  });
  console.log(element.dataset.active);
  const sect = document
    .getElementById(element.dataset.activePage)
    .classList.add("active");
}

var typed = new Typed(".typing", {
  strings: [
    "Rahul",
    " a Friend.",
    "a Programmer.",
    "a Gamer.",
    "a Student.",
    "Developer.",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 50,
});


