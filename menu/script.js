// array of items
const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "Breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "Lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "Shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "Breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut. `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "Lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "Shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "Breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "Lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "Dinner",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

//selecting an element
const menuContainer = document.querySelector(".menu-container");
const btnContainer = document.querySelector(".button");

//load items
window.addEventListener("DOMContentLoaded", () => {
    createItems(menu);
    createbuttons();

});

//creating food items
function createItems(menuitems) {
    let displayContainer = menuitems.map((e) => {
        return `<div class="menu-items">
                <span><img src="${e.img}"></span>
                <div class="item-body">
                    <div class="item-head">
                        <div class="title">${e.title}</div>
                        <div class="price">$${e.price}</div>
                    </div>
                    <hr class="item-underline">
                    <p class="item-description">${e.desc}</p>
                </div> 
             </div> `
    }).join("");
    menuContainer.innerHTML = displayContainer;
}

// creating button dynamically
function createbuttons() {
    const categories = menu.reduce((value, item) => {
        if (!value.includes(item.category)) {
            value.push(item.category)
        }
        return value;
    }, ['All']);

    const buttonContainer = categories.map((category) => {
        return `<button data-id="${category}" class="btn">${category}</button>`
    }).join("");
    btnContainer.innerHTML = buttonContainer;

    // filtering items 
    const btn = document.querySelectorAll(".btn");
    btn.forEach((btns) => {
        btns.addEventListener("click", (e) => {
            let filtereditems = menu.filter((items) => {
                if (items.category === e.target.dataset.id) {
                    return items;
                }
            })

            if (e.target.dataset.id === 'All') {
                createItems(menu);
            }
            else {
                createItems(filtereditems);
            }
        })
    });
}




