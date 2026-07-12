export const home = document.createElement("div");

// hero elements
const heroTitle = document.createElement("h1");
heroTitle.textContent = "Welcome to Loka";
heroTitle.className = "hero-title";
const heroSubTitle = document.createElement("h2");
heroSubTitle.textContent =
  "Asian restaurant with asian-fusion foods from various asian cultures";
heroSubTitle.className = "hero-subtitle";
const heroText = document.createElement("div");
heroText.className = "hero-text";
heroText.appendChild(heroTitle);
heroText.appendChild(heroSubTitle);
const hero = document.createElement("div");
hero.className = "hero-banner";
hero.appendChild(heroText);
home.appendChild(hero);
