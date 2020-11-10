const catData = [
    {
        name: "Beef",
        id: 1,
        recipes: [ {name: "Steak",
                    description: "A recipe for a juicy, tender, and perfectly cooked steak.",
                    info: "This recipe will teach you how to consistently make a perfectly cooked, tender steak. It is truly a worthy way of cooking a high quality steaks and also a way to really elevate economical steaks.",
                    time: "45 Mins (10 Mins prep)",
                    ingredients: ["1 - 2 boneless ribeye or scotch fillet, or any steak you can get from your butcher",
                                    "1 tbsp vegetable oil",
                                    "Salt and pepper",
                                    "75g / 5 tbsp unsalted butter",
                                    "6 sprigs fresh thyme or 3 sprigs rosemary",
                                    "5 garlic cloves"],
                    img: "RecipeImage/SteakImage.jpg",
                    guide: [ { step: "Step 1", message: "Step 1 test message" },
                             { step: "Step 2", message: "Step 2 test message" },
                             { step: "Step 3", message: "Step 3 test message" },
                             { step: "Step 4", message: "Step 4 test message" },
                             { step: "Step 5", message: "Step 5 test message" }]
                    },

                    {name: "Ribs",
                    description: "Perfectly tender ribs with a marinade of your choice.",
                    info: "Oven Barbecue Ribs slathered in the most delicious sticky barbecue sauce with a kick of garlic and optional heat! Juicy, tender and melt-in-your-mouth ribs are so easy to make! Double up on incredible flavour with an easy to make dry rub first, then coat them in a seasoned barbecue sauce mixture so addictive you won't stop at one!",
                    time: "2 Hrs 25 Mins (10 Mins prep)",
                    ingredients: [  "2 kg baby back pork ribs",
                                    "2 teaspoons garlic powder",
                                    "1 teaspoon onion powder",
                                    "2 teaspoons paprika",
                                    "2 teaspoons salt",
                                    "1 teaspoon cracked black pepper",
                                    "1/2 teaspoon cumin",
                                    "2 tablespoons olive oil"],
                    img: "RecipeImage/RibsImage.jpg"
                    },

                    {name: "Beef Sandwich",
                     description: "A sandwich made out of juicy beef between two layers of soft bread.",
                     info: "Try this quick top-rated roast beef sandwich that packs big flavor from a creamy horseradish and chili sauce, combined with perfectly tender beef and a crunchy exterior bread layer to top it all off. Making this once will keep you coming back for more!",
                     time: "3 Mins",
                     ingredients: [  "1 tablespoon light mayonnaise",
                                     "2 teaspoons prepared horseradish",
                                     "2 teaspoons chili sauce",
                                     "2 (1-ounce) slices rye bread",
                                     "1 romaine lettuce leaf",
                                     "3 ounces thinly sliced deli roast beef",
                                     "2 (1/4-inch-thick) slices tomato",
                                     "1 (1/8-inch-thick) slice red onion, separated into rings"],
                    img: "RecipeImage/SteakSandwichImage.jpg"
                    },

                    {name: "Hamburger",
                     description: "A thick, restaurant styled burger with whatever toppings you like.",
                     info: "No more dry, lackluster burgers. These are juicy, and spices can be easily added or changed to suit anyone's taste. Baste frequently with your favorite barbeque sauce. If you find the meat mixture too mushy, just add more bread crumbs until it forms patties that hold their shape.",
                     time: "18 Mins",
                     ingredients: [ "1 tablespoon light mayonnaise",
                                     "2 teaspoons prepared horseradish",
                                     "2 teaspoons chili sauce",
                                     "2 (1-ounce) slices rye bread",
                                     "1 romaine lettuce leaf",
                                     "3 ounces thinly sliced deli roast beef",
                                     "2 (1/4-inch-thick) slices tomato",
                                     "1 (1/8-inch-thick) slice red onion, separated into rings"],
                    img: "RecipeImage/HamburgerImage.jpg"
                    }]
    },

    {
        name: "Chicken",
        id: 2,
        recipes: [{name: "Fried Wings", description: "Crunchy on the outside, tender on the inside, the perfect fried chicken!", info: "test", ingredients: "testIngred"},
            {name: "Chicken soup", description: "A classic recipe for the best chicken soup. Perfect for a cold day.", info: "test", ingredients: "testIngred"},
            {name: "Chicken Katsu", description: "Crispy chicken breast with a crunchy breadcrumb coating, served over a bowl of rice.", info: "test", ingredients: "testIngred"},
            {name: "Buffalo wings", description: "Delicious buffalo wings coated with sauce of your choice.", info: "test", ingredients: "testIngred"}]
    },

    {
        name: "Egg",
        id: 3,
        recipes: [{name: "Hard-boiled egg", description: "The easiest recipe for hard-boiled eggs, goes well with about anything!", info: "test", ingredients: "testIngred"},
            {name: "Omlette", description: "A classic, quick and easy omlette."},
            {name: "Scrambled egg", description: "A quick and easy way to prepare a creamy and delicate meal with eggs.", info: "test", ingredients: "testIngred"},
            {name: "Sunny-side-up egg", description: "A creamy, soft and delicate, yet very simple way of preparing and egg. ", info: "test", ingredients: "testIngred"}]
    },

    {
        name: "Pasta",
        id: 4,
        recipes: [{name: "Spaghetti Bolognese", description: "A hot bowl of spaghetti swimming in a robust bolognese sauce.", info: "test", ingredients: "testIngred"},
            {name: "Lasagna", description: "Thinly rolled pasta with multiple layers of delicious sauce and cheese.", info: "test", ingredients: "testIngred"},
            {name: "Macaroni and cheese", description: "Soft macaroni swimming in a pool of hot and melted cheese.", info: "test", ingredients: "testIngred"},
            {name: "Tagliatelle", description: "Another italian way of making a perfect bowl of pasta.", info: "test", ingredients: "testIngred"}]
    },

    {
        name: "Vegetarian",
        id: 5,
        recipes: [{name: "Ceasar salad", description: "A healthy, yet delicious meal with all your favorite vegetables.", info: "test", ingredients: "testIngred"},
            {name: "Roasted carrot and beets", description: "A dish including a combination of roasted carrots and beets.", info: "test", ingredients: "testIngred"},
            {name: "Vegetable soup", description: "A healthy bowl of soup with vegetables of your choice, perfect for a cold winter day.", info: "test", ingredients: "testIngred"},
            {name: "Cauliflower & roast potato's", description: "A delicious combination of cauliflower and roast potato's.", info: "test", ingredients: "testIngred"}]
    },
]

export default catData;