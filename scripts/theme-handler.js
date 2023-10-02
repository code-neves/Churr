const Body = document.body;
const ThemeButton = document.getElementById('themeBut');
const Theme = localStorage.getItem('theme');

if (Theme) {Body.classList.add(Theme);}

ThemeButton.onclick = () => {
  if (Body.classList.contains('light')) {
    Body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    return;
  } else {
    Body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }
};