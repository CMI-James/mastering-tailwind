const themeToggle = document.getElementById("theme-toggle");
const main = document.querySelector(".main");

themeToggle.addEventListener("click", () => {
  const newTheme = main.classList.contains("light-theme")
    ? "dark-theme"
    : "light-theme";

  setTimeout(() => {
    main.classList.toggle("dark-theme");
    main.classList.toggle("light-theme");
  }, 100);
});
