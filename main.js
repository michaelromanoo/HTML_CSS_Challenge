const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("nav-menu");
const menuItems = ["Products", "About", "Contact", "Free Trial"];

// dynamically create nav menu items
// for each menuItem, create a li item within the existing list
menuItems.forEach((element) => {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(element));
  console.log("li", li);
  navMenu.appendChild(li);
});

console.log("nav menu", navMenu);

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
