import createElement from "./index.js";
import {createAndAddButton, createImage, addElement} from "./index.js";

export function contactMain(){
    const content = document.querySelector("#content");
    const mainContact = createElement("div", "main-contact", null, null)
    addElement(content, [mainContact]);
    addElement(mainContact, [createElement("h2", null, null, "ToulKouk Phnom Penh")]);
    addElement(mainContact, [createImage("images/restaurant-location.png")]);
    addElement(mainContact, [createElement("h2", null, null, "Contact: 012 98 39 02")]);
}