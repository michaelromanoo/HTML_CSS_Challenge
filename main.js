const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("nav-menu");
const infoRow = document.getElementById("info-row");
const fragment = new DocumentFragment();
const contentFragment = new DocumentFragment();
const menuItems = ["Products", "About", "Contact", "Free Trial"];
const infoItems = [
  {
    img: "/img/icon-delivery.png",
    alt: "Delivered Fast",
    title: "Delivered Fast",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptates. ",
  },
  {
    img: "/img/icon-coffee.png",
    alt: "Delivered Hot",
    title: "Delivered Hot",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptates. ",
  },
  {
    img: "/img/icon-time.png",
    alt: "Delivered Now",
    title: "Delivered Now",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, voluptates. ",
  },
];

// dynamically create nav menu items
// for each menuItem, create a li item within the existing list
menuItems.forEach((element) => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(element));
  // console.log("li", li);
  fragment.appendChild(li);
});

// console.log("fragment children", fragment.children);
navMenu.appendChild(fragment);

// console.log("nav menu", navMenu);

infoItems.forEach((element) => {
  // create column div for each info element
  let infoColumn = document.createElement("div");

  // each info element with contain an image and text
  let columnImg = document.createElement("div");
  let img = document.createElement("img");

  let columnContent = document.createElement("div");
  let heading = document.createElement("h1");
  let br = document.createElement("br");
  let description = document.createElement("p");

  // set attributes for the divs
  infoColumn.setAttribute("class", "info-column");
  columnImg.setAttribute("class", "column-img");
  columnContent.setAttribute("class", "column-content");

  // column img content
  img.src = element.img;
  img.setAttribute("alt", element.alt);
  columnImg.appendChild(img);
  infoColumn.appendChild(columnImg);

  // column content
  heading.appendChild(document.createTextNode(element.title));
  description.appendChild(document.createTextNode(element.description));
  columnContent.appendChild(heading);
  columnContent.appendChild(br);
  columnContent.appendChild(description);
  infoColumn.appendChild(columnContent);

  // console.log("column content", columnContent);

  // console.log("info column", infoColumn.innerHTML);
  infoRow.appendChild(infoColumn);
  // console.log("info row", infoRow.innerHTML);
});

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
