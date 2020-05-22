import {getMenu} from "./menu";
const content = document.querySelector('.content');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');
const logo = document.querySelector('.restaurant-logo');
const footer = document.querySelector('footer');

const menuSection = document.querySelector('.menu-section');
const appetizers = document.querySelector('.appetizers');
const entrees = document.querySelector('.entrees');
const soups = document.querySelector('.soups');
const desserts = document.querySelector('.desserts');

loadHome();
loadMenu();

function loadHome(){
    const about = document.createElement('div');
    about.classList.add('about');

    const aboutHeader = document.createElement('h4');
    const aboutInfo = document.createElement('p');
    const steakImg = document.createElement('img');

    aboutHeader.textContent = "About Us";
    aboutHeader.classList.add('about-header');

    aboutInfo.textContent = "Meat Delight is an authentic steakhouse located in New York City. Our fantastic and exciting dinner options have been leaving customers with a full belly and a big smile since 1996. Our menu hosts a classic collection of USDA Prime beef which is dry aged for 25-30 days in our in-house aging box. This aging process results in an incredible flavor that will make your mouth water. This is a must-try place for all of our fellow meat lovers out there! Come and experience one of the best restaurants NYC has to offer!";
    aboutInfo.classList.add('about-info');

    steakImg.setAttribute("src", "assets/images/filetmig.jpg");
    steakImg.setAttribute("height", "300");
    steakImg.setAttribute("width", "400");
    steakImg.setAttribute("alt", "Filet");

    about.appendChild(aboutHeader);
    about.appendChild(aboutInfo);
    about.appendChild(steakImg);

    content.appendChild(about);
}
  
function loadMenu(){
    const menuList = getMenu();
    menuList.forEach((obj, i) => {
        const item = document.createElement('div');
        const name = document.createElement('h5');
        const price = document.createElement('h5');
        const description = document.createElement('p');
        const hr = document.createElement('hr');

        item.classList.add('item');
        name.classList.add('name');
        price.classList.add('price');
        description.classList.add('description');

        console.log("food: ", obj.name);
        name.textContent = obj.name;

        console.log("price: ", obj.price);
        price.textContent = obj.price;

        console.log("description: ", obj.descripton);
        description.textContent = obj.description;

        item.appendChild(name);
        item.appendChild(price);

        if(obj.foodType == "Appetizer"){
            appetizers.appendChild(item);
            appetizers.appendChild(description);
            appetizers.appendChild(hr);
        } else if(obj.foodType == "Entree"){
            entrees.appendChild(item);
            entrees.appendChild(description);
            entrees.appendChild(hr);
        } else if(obj.foodType == "Soup"){
            soups.appendChild(item);
            soups.appendChild(description);
            soups.appendChild(hr);
        } else if(obj.foodType == "Dessert"){
            desserts.appendChild(item);
            desserts.appendChild(description);
            desserts.appendChild(hr);
        }
    });
}

home.addEventListener("click", function(){
    logo.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});

menu.addEventListener("click", function(){
    menuSection.scrollIntoView({behavior: "smooth"});
});

contact.addEventListener("click", function(){
    footer.scrollIntoView({behavior: "smooth"});
});
