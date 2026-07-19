import "./styles.css";
import { home } from "./home.js";
import { about } from "./about.js";
import { menu } from "./menu.js";

const content = document.getElementById("content");
content.appendChild(home);

const nav = document.getElementById("navigations");
nav.addEventListener("click", (e) => {
  content.replaceChildren();
  const homeButton = e.target.closest(".home");
  const menuButton = e.target.closest(".menu");
  const aboutButton = e.target.closest(".about");
  if (homeButton) {
    content.appendChild(home);
    return;
  } else if (aboutButton) {
    content.appendChild(about);
    return;
  } else if (menuButton) {
    content.appendChild(menu);
    return;
  }
});
