import cupcake from './cupcake1.png';

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

    let contactTitle = document.createElement("h2");
    contactTitle.setAttribute("id", "contactTitle");
    contactTitle.textContent = "Contact Info";
    contactTitle.classList.add("paragraphs");
    contactTitle.style.fontSize = "30px";
    infoPage.appendChild(contactTitle);

    let img1 = document.createElement('img');
    img1.src = cupcake;
    img1.classList.add("contactImages");
    infoPage.appendChild(img1);

    let cel = document.createElement("p");
    cel.textContent = "Cel: 098 765 4321";
    cel.classList.add('paragraphs');
    infoPage.appendChild(cel);

    let img2 = document.createElement('img');
    img2.src = cupcake;
    img2.classList.add("contactImages");
    infoPage.appendChild(img2);

    let email = document.createElement("p");
    email.textContent = "Email: pieshop@pieserver.co.za";
    email.classList.add('paragraphs');
    infoPage.appendChild(email);

    let img3 = document.createElement('img');
    img3.src = cupcake;
    img3.classList.add("contactImages");
    infoPage.appendChild(img3);
};

export default contactPage;