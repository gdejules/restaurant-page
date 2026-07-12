export const home = document.createElement("div");
home.id = "home";

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
hero.id = "hero-banner";
hero.appendChild(heroText);
home.appendChild(hero);

// about section elements
export const aboutSection = document.createElement("div");
aboutSection.id = "about-section";
const aboutTitle = document.createElement("h2");
aboutTitle.textContent = "About Loka Restaurant";
const aboutDesc = document.createElement("span");
aboutDesc.textContent =
  "We are an asian restaurant located in Seminyak, Bali, Indonesia. We serve a mix of various asian foods from Balinese, Indonesia, Japanese, and other asian countries. Our place can host gatherings with 50 people capacity or dinner with family in an intimate room.";
const menuButton = document.createElement("button");
menuButton.className = "menu-button";
menuButton.textContent = "See our menus";
const gallery = document.createElement("div");
gallery.className = "gallery";
const photoOne = document.createElement("img");
const photoTwo = document.createElement("img");
const photoThree = document.createElement("img");
photoOne.src =
  "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFzaWFuJTIwZm9vZHN8ZW58MHwwfDB8fHwy";
photoTwo.src =
  "https://images.unsplash.com/photo-1763647818427-326fa8e6699f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFzaWFuJTIwZm9vZHN8ZW58MHwwfDB8fHwy";
photoThree.src =
  "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFzaWFuJTIwZm9vZHN8ZW58MHwwfDB8fHwy";
gallery.appendChild(photoOne);
gallery.appendChild(photoTwo);
gallery.appendChild(photoThree);

aboutSection.appendChild(aboutTitle);
aboutSection.appendChild(aboutDesc);
aboutSection.appendChild(menuButton);
aboutSection.appendChild(gallery);
home.appendChild(aboutSection);
