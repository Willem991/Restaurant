function contactPage(divElement){
    //background
    const background = document.createElement("div");
    
    background.classList.add("background");

    divElement.appendChild(background);

    //infoPage
    const infoPage = document.createElement("div");
    infoPage.classList.add("infoPage");
    infoPage.classList.add("infoPage");
    infoPage.classList.add('border3');
    infoPage.classList.remove('border1');
    infoPage.classList.remove('border2');
    background.appendChild(infoPage);
};

export default contactPage;