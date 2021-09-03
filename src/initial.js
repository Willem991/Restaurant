import pastry1 from './pastry1.png';

function mainPage(divElement){
    //background
    const background = document.createElement("div");
    
    background.classList.add("background");

    divElement.appendChild(background);

    //infoPage
    const infoPage = document.createElement("div");
    infoPage.classList.add("infoPage");
    background.appendChild(infoPage);

    //text
    const about1 = document.createElement("p");
    
    about1.classList.add("paragraphs");  
    about1.textContent = "Welcome To Peter Williams Pie Palace!";

    const about2 = document.createElement("p");
    
    about2.classList.add("paragraphs");  
    about2.textContent = "If you like pies and pastries you've come to the right place. We've got a pie for just about everyone here, whether the savoury chicken and mushrooms tickle your fancy or the sweeter apple crumbles are more your style.";

    //images
    const firstImage = document.createElement("img");

    firstImage.src = pastry1;
    firstImage.classList.add("firstImage");
    infoPage.appendChild(about1);
    infoPage.appendChild(firstImage);
    infoPage.appendChild(about2);
};

export default mainPage;