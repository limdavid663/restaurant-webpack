"use strict"
import homePage from "./home.js";
import {header} from "./header.js";
import { footer } from "./footer.js";
import { menuMain } from "./menu.main.js";
import { contactMain } from "./contact.main.js";
let content = document.querySelector("#content");

export default function createElement(type, id, arrayClasses, content) {
    const element = document.createElement(type);
    if(id) element.id = id;
    if(arrayClasses) arrayClasses.forEach( (myClass) => element.classList.add(myClass) );
    if(content) element.innerHTML = content;

    return element;
}

export function createAndAddButton(parent, arrayContents) {
    for(let i = 0; i < arrayContents.length; i++){
        const btn = createElement("button", null, null, arrayContents[i]);
        parent.appendChild(btn);
    }
}

export function addElement(parent, arrayChilds){
    for(let i = 0; i < arrayChilds.length; i++){
        parent.appendChild(arrayChilds[i]);
    }
}

export function createImage(src) {
    let img = document.createElement("img");
    img.src = src;
    return img
}

export function createMultipleElement(){

}

function home() {
    content.innerHTML = "";
    header();
    homePage();
    footer();
}
function menu() {
    content.innerHTML = "";
    header();
    menuMain();
    footer();
}

function contact() {
    content.innerHTML = "";
    header();
    contactMain();
    footer();
}

document.addEventListener("click", (e) => {
    if(e.target.innerHTML === "Home"){
        home();
    }else if(e.target.innerHTML === "Menu"){
        menu();
    }else if(e.target.innerHTML === "Contact"){
        contact();
    }else{
        return;
    }
})

home()


