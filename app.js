// shop code

const menu = [
    {
      id: 1,
      title: "Strawberries",
      category: "fruits",
      price: 5.99,
      img: "/images/shop-3.jpg",
      desc: `Small, sweet, and juicy berries that can be grown in containers or gardens, providing a delicious summer treat.`,
      link: "https://www.gardeningexpress.co.uk/veg-kitchen-gardening",
    },
    {
      id: 2,
      title: "Okra",
      category: "Africa",
      price: 3.99,
      img: "/images/shop-1.jpg",
      desc: `Heat-loving vegetable with edible green pods, often used in stews and gumbo; great source of dietary fiber.`,
      link: "https://www.riverford.co.uk/organic-fruit-veg-and-salad",
    },
    {
      id: 3,
      title: "Rosemary",
      category: "herbs",
      price: 6.99,
      img: "/images/shop-8.jpg",
      desc: `A fragrant herb with needle-like leaves and a pine-like aroma; it is commonly used in Mediterranean cuisine, roasted dishes, and as a flavorful seasoning.`,
      link: "https://www.gardeningexpress.co.uk/veg-kitchen-gardening",
    },
    {
      id: 4,
      title: "Sweet Potato",
      category: "Africa",
      price: 2.99,
      img: "/images/shop-4.jpg",
      desc: `Root vegetable with orange flesh and sweet flavor; easy to grow, versatile, and packed with vitamins.`,
      link: "https://www.riverford.co.uk/organic-fruit-veg-and-salad",
    },
    {
      id: 5,
      title: "Thyme",
      category: "herbs",
      price: 4.99,
      img: "/images/shop-9.jpg",
      desc: `A versatile herb with small, aromatic leaves; it adds a savory and earthy flavor to a variety of dishes, including soups, stews, and roasted meats.`,
      link: "https://www.gardeningexpress.co.uk/veg-kitchen-gardening",
    },
    {
      id: 6,
      title: "Groundnut",
      category: "Africa",
      price: 8.99,
      img: "/images/shop-7.jpg",
      desc: `Also known as peanuts, it is a legume widely cultivated in Africa; the nuts are rich in protein, healthy fats, and are used in various dishes, snacks, and sauces.`,
      link: "https://www.riverford.co.uk/organic-fruit-veg-and-salad",
    },
    {
      id: 7,
      title: "Watermelons",
      category: "fruits",
      price: 10.99,
      img: "/images/shop-5.jpg",
      desc: `Juicy and sweet, watermelons are a quintessential summer fruit, perfect for staying hydrated and enjoying as a refreshing snack.`,
      link: "https://www.gardeningexpress.co.uk/veg-kitchen-gardening",
    },
    {
      id: 8,
      title: "Green beans",
      category: "vegetable",
      price: 7.99,
      img: "/images/shop-10.jpg",
      desc: `Tender and flavorful, green beans are easy to grow; they produce an abundant harvest and can be enjoyed fresh, steamed, or stir-fried.`,
      link: "https://www.riverford.co.uk/organic-fruit-veg-and-salad",
    },
    {
      id: 9,
      title: "Blueberries",
      category: "fruits",
      price: 5.99,
      img: "/images/shop-11.jpg",
      desc: `Nutrient-rich berries known for their antioxidant properties; they thrive in acidic soil and are ideal for snacking, baking, or adding to smoothies.`,
      link: "https://www.gardeningexpress.co.uk/veg-kitchen-gardening",
    },
    {
      id: 10,
      title: "Carrots",
      category: "vegetable",
      price: 9.99,
      img: "/images/shop-2.jpg",
      desc: `Root vegetable available in various colors; sweet and crunchy, they are great for snacking, cooking, and adding vibrant color to dishes.`,
      link: "https://www.riverford.co.uk/organic-fruit-veg-and-salad",
    },
    {
        id: 11,
        title: "Bell peppers",
        category: "vegetable",
        price: 12.99,
        img: "/images/shop-12.jpg",
        desc: `Colorful and versatile, bell peppers come in different hues and can be eaten raw or cooked; they add sweetness and crunch to meals.`,
        link: "https://www.gardeningexpress.co.uk/veg-kitchen-gardening",
    },
    {
        id: 12,
        title: "Grapes",
        category: "fruits",
        price: 15.00,
        img: "/images/shop-6.jpg",
        desc: `Versatile and delicious, grapes can be grown in a variety of climates and used for eating fresh, making juice, or even homemade wine.`,
        link: "https://www.riverford.co.uk/organic-fruit-veg-and-salad",
    },
];

const sectionCenter = document.querySelector(".section-center");

const container = document.querySelector(".btn-container");

// load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu)
    displayMenuButtons()
});



function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
      return `
        <article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price"><a href="${item.link}">$${item.price}</a></h4>
            </header>
            <p class="item-text"> ${item.desc} </p>
          </div>
        </article>
      `;
    });
  
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}



function displayMenuButtons() {

    const categories = menu.reduce (
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );

    const categoryBtns = categories.map(function(category) {
        return `
            <button type="button" class="filter-btn" data-id=${category}>
            ${category}
            </button>
        `
    })
    .join("");
    // console.log(categoryBtns);
    container.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll('.filter-btn')


    // filter items
    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function(e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {

                if (menuItem.category === category) {
                    return menuItem;
                }
                
            });

            // console.log (menuCategory);

            if (category === 'all') {
                displayMenuItems(menu)
            }
            else {
                displayMenuItems(menuCategory)
            }
        });
    });

}