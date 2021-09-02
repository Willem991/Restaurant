function mainPage(divElement){
    //background
    const background = document.createElement("div");
    
    background.classList.add("background");

    divElement.appendChild(background);

    //text
    const about = document.createElement("p");
    
    about.classList.add("paragraphs");  
    about.textContent = "Welcome To Peter Williams Pie Palace! \r\n \r\n If you like pies then you've come to the right place!";

    background.appendChild(about);
};

export default mainPage;