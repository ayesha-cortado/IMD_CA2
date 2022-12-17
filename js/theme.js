document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);

function toggleTheme() {
  var body = document.body;
  if (body.classList.contains('bg-dark')) {
    body.classList.remove('bg-dark');
    body.classList.add('bg-light');
  } else {
    body.classList.remove('bg-light');
    body.classList.add('bg-dark');
  }
}
