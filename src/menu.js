import creamBun from './creambun.png';

function menuPage(divElement){
    //background
    const background = document.createElement("div");
    
    background.classList.add("background");

    divElement.appendChild(background);

    //infoPage
    const infoPage = document.createElement("div");
    infoPage.classList.add("infoPage");
    infoPage.classList.add("infoPage");
    infoPage.classList.add('border2');
    infoPage.classList.remove('border1');
    infoPage.classList.remove('border3');
    infoPage.style.gridTemplateRows = "100px auto";
    background.appendChild(infoPage);

    //menu Title
    const menuHeading = document.createElement('h2');
    menuHeading.textContent = "Menu";
    menuHeading.setAttribute("id", "menuHeading");
    infoPage.appendChild(menuHeading);

    //Menu items
    const menuBody = document.createElement("p");
    menuBody.classList.add("paragraphs");
    menuBody.style.whiteSpace = "pre";
    menuBody.textContent = "Chicken & Mushroom Pie: R20 \r\n\r\n Steak & Kidney Pie: R25 \r\n\r\n Mutton Curry Pie: R25 \r\n\r\n Sausage Roll: R20 \r\n\r\n Apple Crumble: R15 \r\n\r\n Custard Tart: R 20 \r\n\r\n Creampuff: R10 \r\n\r\n Raspberry Swirls: R5"  ;
    infoPage.appendChild(menuBody);


    //Menu footer Image
    const footerImage = document.createElement("img");
    footerImage.src = creamBun;
    infoPage.appendChild(footerImage);
};

export default menuPage;