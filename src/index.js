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
    list.appendChild(homeTab);

    const menu = document.createElement("li");
    menu.textContent = "Menu";
    list.appendChild(menu);

    const contact = document.createElement("li");
    contact.textContent = "Home Tab";
    list.appendChild(contact);

    //body
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    mainBody.appendChild(content);
};

start();
mainPage(content);