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
const heroPhotoCredit = document.createElement("span");
heroPhotoCredit.className = "hero credit";
heroPhotoCredit.textContent =
  "Source: Ginger Moon Restaurant Seminyak (https://gingermoonbali.com/)";
const heroPhotoContainer = document.createElement("div");
heroPhotoContainer.className = "hero container";
hero.appendChild(heroText);
heroPhotoContainer.appendChild(hero);
heroPhotoContainer.appendChild(heroPhotoCredit);
home.appendChild(heroPhotoContainer);

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
const photoOneCredit = document.createElement("span");
photoOneCredit.className = "menu credit";
const photoOneContainer = document.createElement("div");
photoOneContainer.className = "menu container";

const photoTwo = document.createElement("img");
const photoTwoCredit = document.createElement("span");
photoTwoCredit.className = "menu credit";
const photoTwoContainer = document.createElement("div");
photoTwoContainer.className = "menu container";

const photoThree = document.createElement("img");
const photoThreeCredit = document.createElement("span");
photoThreeCredit.className = "menu credit";
const photoThreeContainer = document.createElement("div");
photoThreeContainer.className = "menu container";

photoOne.src =
  "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFzaWFuJTIwZm9vZHN8ZW58MHwwfDB8fHwy";
photoOneCredit.textContent = "8-Low Ural on Unsplash";
photoOneContainer.appendChild(photoOne);
photoOneContainer.appendChild(photoOneCredit);

photoTwo.src =
  "https://images.unsplash.com/photo-1763647818427-326fa8e6699f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFzaWFuJTIwZm9vZHN8ZW58MHwwfDB8fHwy";
photoTwoCredit.textContent = "Christopher Yiu Chung on Unsplash";
photoTwoContainer.appendChild(photoTwo);
photoTwoContainer.appendChild(photoTwoCredit);

photoThree.src =
  "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFzaWFuJTIwZm9vZHN8ZW58MHwwfDB8fHwy";
photoThreeCredit.textContent = "Abhishek Sanwa Limbu on Unsplash";
photoThreeContainer.appendChild(photoThree);
photoThreeContainer.appendChild(photoThreeCredit);

gallery.appendChild(photoOneContainer);
gallery.appendChild(photoTwoContainer);
gallery.appendChild(photoThreeContainer);

aboutSection.appendChild(aboutTitle);
aboutSection.appendChild(aboutDesc);
aboutSection.appendChild(menuButton);
aboutSection.appendChild(gallery);
home.appendChild(aboutSection);
