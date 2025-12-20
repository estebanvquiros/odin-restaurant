import "./styles/reset.css";
import "./styles/global.css";
import loadHomePage from "./home/home";
import loadMenu from "./menu/menu";

const content = document.querySelector(".content");
const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");

loadHomePage();

homeButton.addEventListener("click", renderHomePage);
menuButton.addEventListener("click", renderMenu);

function renderHomePage() {
	clearContent();
	loadHomePage();
}

function renderMenu() {
	clearContent();
	loadMenu();
}

function clearContent() {
	content.replaceChildren();
}
