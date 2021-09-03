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
    background.appendChild(infoPage);
};

export default menuPage;