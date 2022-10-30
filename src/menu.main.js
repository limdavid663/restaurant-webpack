import createElement from "./index.js";
import {createAndAddButton, createImage, addElement} from "./index.js";

export function menuMain() {
    const content = document.querySelector("#content");
    const mainMenu = createElement("div", "main-menu", null, null);
    const menuCardContainer = createElement("div", "menu-card-container", null, null);
    
    addElement(content, [mainMenu]);
    addElement(mainMenu, [menuCardContainer]);
    for(let i = 0; i < 4; i++){
        const div = createElement("div", null, ["menu-card"], null);
        addElement(menuCardContainer, [div]);
        addElement(div, [createImage("images/coffee.jpg")])
        addElement(div, [createElement("h2", null, null, "Latte")]);
    }

}