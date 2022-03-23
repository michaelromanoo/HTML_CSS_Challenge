const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("nav-menu");
const infoRow = document.getElementById("info-row");
const navLink = document.querySelectorAll(".nav-link");
const ctaButton = document.getElementById("cta-btn");
const fragment = new DocumentFragment();
const contentFragment = new DocumentFragment();
const menuItems = [
  "Products",
  "About",
  "Contact",
  "Free Trial",
  "Try Boxed Coffee for free",
];
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

// adds an active class on the hamburger menu and the nav-menu which makes the mobile menu open
// use the active class on the hamburger to create that X animation
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// dynamically create nav menu items
// for each menuItem, create a li item within the existing list
menuItems.forEach((element) => {
  let li = document.createElement("li");
  let link = document.createElement("a");

  // set attributes for anchor element
  link.setAttribute("href", "#");
  link.setAttribute("class", "nav-link");
  link.style.color = "inherit";

  // add text to anchor element
  link.appendChild(document.createTextNode(element));
  // remove the active class which closes the menu
  // when users click on menu item, it will lead back to home page
  li.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
  console.log("link", link);
  // add link to menu item element
  li.appendChild(link);
  // li.appendChild(document.createTextNode(element));
  console.log("li", li);
  fragment.appendChild(li);
});

// console.log("fragment children", fragment.children);
navMenu.appendChild(fragment);

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
