import createElement from "./index.js";
import {createAndAddButton, createImage, addElement} from "./index.js";

export function footer() {
    const content = document.querySelector("#content");
    const footer = createElement("div", "footer", null, null);
    
    addElement(content, [footer]);
    addElement(footer, [createElement("h3" , null, null, "Copyright © 2021 by limdavid.663")]);
}