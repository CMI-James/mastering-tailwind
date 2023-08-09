const themeToggle = document.getElementById("theme-toggle");
const container = document.querySelector(".container");
const loader = document.querySelector(".loader");

themeToggle.addEventListener("click", () => {
  const newTheme = container.classList.contains("light-theme")
    ? "dark-theme"
    : "light-theme";

  loader.classList.remove("hidden");
  if (newTheme === "dark-theme") {
    loader.style.backgroundColor = "black";
    loader.style.color = "white";
  } else {
    loader.style.backgroundColor = "white";
    loader.style.color = "black";
  }

  setTimeout(() => {
    container.classList.toggle("dark-theme");
    container.classList.toggle("light-theme");

    setTimeout(() => {
      loader.classList.add("hidden");
    }, 400);
  }, 400);
});
