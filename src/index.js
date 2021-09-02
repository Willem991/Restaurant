import './style.css';
import mainPage from './initial';

function start(){
    const mainBody = document.querySelector("body");

    //heading
    const heading = document.createElement("div");
    heading.setAttribute("id", "heading");
    mainBody.appendChild(heading);

    const title = document.createElement('h1');
    title.textContent = "Peter William's Pie Palace"
    title.classList.add("paragraphs");
    heading.appendChild(title);

    const list = document.createElement("ul");
    heading.appendChild(list);
    
    const homeTab = document.createElement("li");
    homeTab.textContent = "Home Tab";
    homeTab.classList.add("active");
    list.appendChild(homeTab);

    const menu = document.createElement("li");
    menu.textContent = "Menu";
    menu.classList.add("inactive");
    list.appendChild(menu);

    const contact = document.createElement("li");
    contact.textContent = "Contact Us";
    contact.classList.add("inactive");
    list.appendChild(contact);

    //body
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    mainBody.appendChild(content);

    //navbar events
    homeTab.onclick = function(){
        homeTab.classList.remove("inactive");
        homeTab.classList.add("active");

        menu.classList.remove("active");
        menu.classList.add("inactive");

        contact.classList.remove("active")
        contact.classList.add("inactive");

        const content = document.querySelector("#content");
        removeChild(content);
        mainPage(content);
    };

    menu.onclick = function(){
        homeTab.classList.remove("active");
        homeTab.classList.add("inactive");

        menu.classList.remove("inactive");
        menu.classList.add("active");

        contact.classList.remove("active");
        contact.classList.add("inactive");


    };

    contact.onclick = function(){
        homeTab.classList.remove("active");
        homeTab.classList.add("inactive");

        menu.classList.remove("active");
        menu.classList.add("inactive");

        contact.classList.remove("inactive");
        contact.classList.add("active");

    }; 
};

function removeChild(parent){

    let child = parent.lastElementChild;

    while(child){
        parent.removeChild(child);
        child = parent.lastElementChild;
    };
};

start();

const content = document.querySelector("#content");

mainPage(content);