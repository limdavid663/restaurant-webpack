import createElement from "./index.js";
import {createAndAddButton, createImage, addElement} from "./index.js";

export default function homePage() {
    const content = document.querySelector("#content");
    const main = createElement("div", "main", null, null);
    const image = createImage("../dist/images/coffeedrinkersmile.jpeg");

    addElement(content, [main]);
    addElement(main, [createElement("h2" , null, null, "Best coffee in your country")]);
    addElement(main, [createElement("h2" , null, null, "Made with love")]);
    addElement(main, [image]);
    addElement(main, [createElement("h2" , null, null, "Order online or Visit us")]);
}



