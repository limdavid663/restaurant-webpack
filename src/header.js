import createElement from "./index.js";
import {createAndAddButton, createImage, addElement} from "./index.js";

export function header() {
    const content = document.querySelector("#content");
    const header = createElement("div", "header", null, null);
    const h1 = createElement("h1", null, null, "Brown Coffee");
    const nav = createElement("nav", null, null, null);

    addElement(content, [header]);
    addElement(header, [h1, nav]);
    createAndAddButton(nav, ["Home", "Menu", "Contact"]);
}
