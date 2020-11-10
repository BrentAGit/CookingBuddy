const catData = [
    {
        name: "Beef",
        recipes: [ {name: "Steak",
                    id: 1,
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
                    guide: { recipeName: "Steak Recipe", message: "Bring to room temp! This makes an amazing difference to cooking through evenly rather than ending up with a thick overcooked band in order for the very centre to be cooked to your liking; Pat dry and season the steak generously with salt and pepper – this helps form that amazing crust we all know and love about great steaks; Get your skillet SMOKING HOT before putting the steak in – again, for the crust WARNING: The butter will sputter when you add the thyme, so stand back! Take the steak off the stove BEFORE your desired internal temperature (see chart below) because the internal temperature will continue to rise as it rests; and REST your steak for 5 to 10 minutes so it sucks its own juices back in and the fibres relax. This is a must-do step for any protein you cook hard and fast!" }
                    },

                    {name: "Ribs",
                     id: 2,
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
                    img: "RecipeImage/RibsImage.jpg",
                    guide: { recipeName: "Ribs Recipe", message: "Preheat oven to 160°C/320°F (all oven types) Mix Rub in a small bowl large, enough to fit one rib. Press beef ribs into the rub, coating all sides. Shake off excess. Mix Barbecue Sauce ingredients, except water, in a baking pan. Then mix in water. Place ribs in sauce, turning to coat. Arrange meat side down in the sauce, bone side exposed (sauce won't cover completely, that's ok) .Cover tightly with foil or lid, bake 3 1/2 hours. Remove from oven, remove foil. Turn ribs (some may have fall over, that's ok, just turn them). Spoon over sauce.Bake 30 minutes uncovered, spooning over sauce again halfway through, until surface is caramelised and sticky. Check to ensure ribs are tender - pry a bit apart using two forks. (If not, cover and return to oven, but after 4 hrs they certainly should be!) Remove ribs onto serving plate (use a spoon as meat will barely be attached to bone, if at all). Mix sauce to bring together (Note 3 on adjustments). Serve with ribs!"}
                    },

                    {name: "Beef Sandwich",
                     id: 3,
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
                    img: "RecipeImage/SteakSandwichImage.jpg",
                    guide: { recipeName: "Ribs Recipe", message: "Combine first 3 ingredients. Spread mayonnaise mixture on one bread slice. Top with lettuce leaf, roast beef, tomato slices, onion, and remaining bread slice."}
                    },

                    {name: "Hamburger",
                     id: 4,
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
                    img: "RecipeImage/HamburgerImage.jpg",
                    guide: { recipeName: "Ribs Recipe", message: "Preheat the grill to 375 degrees F (medium-high). In a large bowl, add the beef. Sprinkle evenly with the Worcestershire sauce, seasoning salt, garlic powder, and pepper. Use your hands to mix the ingredients until they are just combined. Divide the meat mixture into fourths. Take 1/4 of the meat mixture and use your hands to press it into the shape of a hamburger patty that is about 3/4 inch thick. Make an indention in the middle of the patty to prevent bulging in the center of the hamburger as it cooks. Repeat with the remaining meat mixture, making 4 hamburgers. Place the burgers on the grill. Cook 4-5 minutes on the first side. Flip the burgers over and cook an additional 4-5 minutes, until the burgers have reached the desired doneness.* If adding cheese, lay a slice of cheese on each burger patty about 1 minute before taking the burgers off the grill, so the cheese has a chance to melt. Serve the burgers on hamburger buns with optional hamburger toppings."}
                    }]
    },

    {
        name: "Chicken",
        recipes: [{name: "Fried Wings", description: "Crunchy on the outside, tender on the inside, the perfect fried chicken!", info: "test", ingredients: "testIngred"},
            {name: "Chicken soup", description: "A classic recipe for the best chicken soup. Perfect for a cold day.", info: "test", ingredients: "testIngred"},
            {name: "Chicken Katsu", description: "Crispy chicken breast with a crunchy breadcrumb coating, served over a bowl of rice.", info: "test", ingredients: "testIngred"},
            {name: "Buffalo wings", description: "Delicious buffalo wings coated with sauce of your choice.", info: "test", ingredients: "testIngred"}]
    },

    {
        name: "Egg",
        recipes: [{name: "Hard-boiled egg", description: "The easiest recipe for hard-boiled eggs, goes well with about anything!", info: "test", ingredients: "testIngred"},
            {name: "Omlette", description: "A classic, quick and easy omlette."},
            {name: "Scrambled egg", description: "A quick and easy way to prepare a creamy and delicate meal with eggs.", info: "test", ingredients: "testIngred"},
            {name: "Sunny-side-up egg", description: "A creamy, soft and delicate, yet very simple way of preparing and egg. ", info: "test", ingredients: "testIngred"}]
    },

    {
        name: "Pasta",
        recipes: [{name: "Spaghetti Bolognese", description: "A hot bowl of spaghetti swimming in a robust bolognese sauce.", info: "test", ingredients: "testIngred"},
            {name: "Lasagna", description: "Thinly rolled pasta with multiple layers of delicious sauce and cheese.", info: "test", ingredients: "testIngred"},
            {name: "Macaroni and cheese", description: "Soft macaroni swimming in a pool of hot and melted cheese.", info: "test", ingredients: "testIngred"},
            {name: "Tagliatelle", description: "Another italian way of making a perfect bowl of pasta.", info: "test", ingredients: "testIngred"}]
    },

    {
        name: "Vegetarian",
        recipes: [{name: "Ceasar salad", description: "A healthy, yet delicious meal with all your favorite vegetables.", info: "test", ingredients: "testIngred"},
            {name: "Roasted carrot and beets", description: "A dish including a combination of roasted carrots and beets.", info: "test", ingredients: "testIngred"},
            {name: "Vegetable soup", description: "A healthy bowl of soup with vegetables of your choice, perfect for a cold winter day.", info: "test", ingredients: "testIngred"},
            {name: "Cauliflower & roast potato's", description: "A delicious combination of cauliflower and roast potato's.", info: "test", ingredients: "testIngred"}]
    },
]

export default catData;