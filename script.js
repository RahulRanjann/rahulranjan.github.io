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
