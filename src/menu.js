export const menu = document.createElement("div");
menu.id = "menu";

// menu class
class Menu {
  menuContainer = null;
  nameNode = null;
  priceNode = null;
  imageNode = null;
  descNode = null;
  menuInfo = null;

  constructor(name, price, url) {
    this.menuContainer = document.createElement("div");
    this.menuContainer.className = "menu card";
    this.menuInfo = document.createElement("div");
    this.nameNode = document.createElement("h2");
    this.priceNode = document.createElement("span");
    this.imageNode = document.createElement("img");
    this.descNode = document.createElement("p");
    this.nameNode.textContent = name;
    this.priceNode.textContent = `Rp ${price}`;
    this.imageNode.src = url;
    this.descNode.textContent = "template";
  }

  addDesc(description) {
    this.descNode.textContent = description;
  }

  render(parent) {
    this.menuInfo.appendChild(this.nameNode);
    this.menuInfo.appendChild(this.priceNode);
    this.menuInfo.appendChild(this.descNode);
    this.menuInfo.style.display = "flex";
    this.menuInfo.style.flexDirection = "column";
    this.menuInfo.style.gap = "0.5rem";

    this.menuContainer.appendChild(this.imageNode);
    this.menuContainer.appendChild(this.menuInfo);
    this.menuContainer.style.display = "flex";
    this.menuContainer.style.flexDirection = "row";
    this.menuContainer.style.gap = "1rem";

    parent.appendChild(this.menuContainer);
  }
}

// menu page contents
const menuPageTitle = document.createElement("h1");
menuPageTitle.textContent = "Our Menu";
const menuList = document.createElement("div");
menuList.style.display = "flex";
menuList.style.flexDirection = "column";
menuList.style.gap = "2rem";

// create menu instances
const ramen = new Menu(
  "Ramen with Thai Flavor",
  "88.000",
  "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFzaWFuJTIwZm9vZHN8ZW58MHwwfDB8fHwy",
);

ramen.addDesc(
  "This Thai-inspired ramen noodle is cooked with rich southeast asian spices. This fusion create an interesting fusion that connects the spiciness of Thai food with the Japanese noodle ramen.",
);

ramen.render(menuList);

const thaiSet = new Menu(
  "Set of Thai Dishes",
  "214.000",
  "https://images.unsplash.com/photo-1763647818427-326fa8e6699f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFzaWFuJTIwZm9vZHN8ZW58MHwwfDB8fHwy",
);

thaiSet.addDesc(
  "A set of Thai foods from spicy curry to delicious veggie soup. This set of foods is perfect for family dinner or another group meals with friends.",
);

thaiSet.render(menuList);

const dumplings = new Menu(
  "Various Dumplings",
  "135.000",
  "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFzaWFuJTIwZm9vZHN8ZW58MHwwfDB8fHwy",
);

dumplings.addDesc(
  "Various bite-sized dumplings filled with spiced minced meat, encased in delicate dough. These dumplings are steamed, fried, and pan-fried with flavorful taste that perfect for your communal occasion.",
);

dumplings.render(menuList);

menu.appendChild(menuPageTitle);
menu.appendChild(menuList);
