/*
  THE GREENER TABLE · RECIPES
  Every recipe on the site lives in this file. recipe.html displays one recipe
  (recipe.html?r=<slug>) and recipes.html lists them all, in the order below.

  To add a recipe: copy one whole { ... } block, paste it at the end of the list,
  give it a new unique slug, and replace the content. Fields:
    slug        short id used in the link, lowercase with hyphens (for example miso-soup)
    pdf         optional: file name of the original PDF in this recipes folder
    title, subtitle, region, intro, origin
    glance      prep and cook minutes, and servings
    mise        prep tasks as [label, task] pairs
    ingredients groups of [name, amount] pairs; optional swap note per group
    prepNote    optional extra prep note under the ingredients
    steps       each step has a title and items (simple <b> and <i> tags allowed); optional note
    extra       optional sub-recipe such as a sauce
    tips        [label, tip] pairs
    nutrition   name, facts (short chips), notes
    learn       questions and answers for the notebook section
  To feature a recipe on the home page menu, also add it to the menu in index.html.
*/
window.RECIPES = [
  {
    "slug": "vietnamese-rice-paper-rolls",
    "pdf": "vietnamese-rice-paper-rolls.pdf",
    "title": "Vietnamese Rice Paper Rolls",
    "subtitle": "with peanut dipping sauce",
    "region": "South Vietnam",
    "intro": "Packed with bright, fresh ingredients and served with an insanely delicious peanut dipping sauce. Also known as gỏi cuốn, or summer rolls, they make a fresh, light, and healthy Vietnamese appetizer or snack.",
    "origin": "Rice paper rolls (gỏi cuốn) come from South Vietnam, a staple dish born from local agricultural traditions. They are characterized by fresh herbs, a protein (tofu, pork, or shrimp), and vermicelli wrapped in thin, edible rice paper (bánh tráng). Known as “salad rolls” in the South and “nem cuốn” in the North, they are a healthy, fresh, non-fried alternative to traditional spring rolls.",
    "glance": {
      "prep": "20",
      "cook": "30",
      "serves": "6 to 8"
    },
    "mise": [
      [
        "Marinate",
        "Tofu in soy sauce, ponzu, garlic, and red pepper flakes"
      ],
      [
        "Soak",
        "Rice noodles in boiling water until softened"
      ],
      [
        "Chop",
        "Lettuce, tofu, carrots, cucumbers, and avocado"
      ],
      [
        "Tools",
        "A griddle"
      ]
    ],
    "ingredients": [
      {
        "group": "Plant protein",
        "items": [
          [
            "Extra firm tofu",
            "2 packages"
          ]
        ]
      },
      {
        "group": "Fresh produce & aromatics",
        "items": [
          [
            "Butter lettuce",
            "8 leaves"
          ],
          [
            "Persian cucumbers, julienned",
            "6"
          ],
          [
            "Large carrots, julienned or shredded",
            "2"
          ],
          [
            "Avocados, thinly sliced",
            "2"
          ],
          [
            "Fresh mint",
            "a handful"
          ],
          [
            "Bean sprouts",
            "for the gỏi cuốn"
          ]
        ]
      },
      {
        "group": "Pantry staples & seasonings",
        "items": [
          [
            "Garlic cloves, finely chopped",
            "3"
          ],
          [
            "Red pepper flakes",
            "1 tsp"
          ],
          [
            "Soy sauce",
            "2 tbsp"
          ],
          [
            "Ponzu",
            "1 tbsp"
          ],
          [
            "Rice paper",
            "1 package"
          ],
          [
            "Rice noodles (vermicelli)",
            "1 package"
          ]
        ]
      },
      {
        "group": "To finish",
        "items": [
          [
            "Sesame seeds",
            "for garnish"
          ]
        ]
      }
    ],
    "steps": [
      {
        "title": "Prepare",
        "items": [
          "<b>Tofu:</b> slice and marinate in the soy sauce, ponzu, and chopped garlic.",
          "<b>Vegetables:</b> cut each one and arrange each type on its own plate.",
          "<b>Rice noodles:</b> place in a bowl of boiling water to soften, about 5 to 8 minutes."
        ]
      },
      {
        "title": "Pre-cook",
        "items": [
          "Place the tofu on the griddle (or air fry it) and lightly sauté on both sides. Set on a plate to cool.",
          "Soften the noodles."
        ]
      },
      {
        "title": "Form the rolls",
        "items": [
          "Have all of your ingredients in front of you.",
          "Hold a sheet of rice paper and quickly dip it under water.",
          "Lay it on a plate and gently massage it until pliable.",
          "Add the fillings one at a time."
        ],
        "note": {
          "title": "We will make two versions",
          "items": [
            "<b>Authentic gỏi cuốn:</b> lettuce, tofu, bean sprouts, rice noodles, carrots, and mint, with sesame seeds on top, folded into a square. <i>Tip:</i> wrap the tofu, bean sprouts, vermicelli, and mint in the lettuce first, then roll or lightly scrunch it so it holds together before rolling it in the rice paper. Much easier to handle!",
            "<b>My summer rolls:</b> tofu, avocado, carrots, and cucumbers, folded like an egg roll."
          ]
        }
      },
      {
        "title": "Fold and roll tightly",
        "items": [
          "Fold the sides in first, then roll to the end, like an egg roll. You can also fold them into a square."
        ]
      },
      {
        "title": "Griddle to crisp",
        "items": [
          "Place some of the rolls on the griddle with a sprinkle of sesame seeds and turn until crispy on both sides."
        ]
      }
    ],
    "extra": {
      "eyebrow": "For dipping",
      "title": "Peanut Sauce",
      "versions": [
        {
          "name": "Classic",
          "items": [
            [
              "Peanut butter, preferably smooth (crunchy is fine too)",
              "1 tbsp"
            ],
            [
              "Hoisin sauce",
              "2 tbsp"
            ],
            [
              "Vinegar or lime juice",
              "½ tbsp"
            ],
            [
              "Water",
              "⅓ cup"
            ],
            [
              "Garlic clove, minced",
              "1"
            ],
            [
              "Crushed chili flakes",
              "½ tsp"
            ]
          ]
        },
        {
          "name": "Less authentic, still yummy",
          "items": [
            [
              "Smooth peanut butter",
              "½ cup"
            ],
            [
              "Sugar",
              "1 tbsp"
            ],
            [
              "Hoisin sauce",
              "4 tbsp"
            ],
            [
              "Sweet soy sauce (kecap manis, thick like syrup)",
              "1 tbsp"
            ],
            [
              "Garlic, minced",
              "2 small cloves or 1 large"
            ],
            [
              "Bird’s eye chili, finely chopped",
              "1"
            ],
            [
              "Sesame oil",
              "1 tbsp"
            ],
            [
              "Lime juice",
              "2 tbsp"
            ],
            [
              "Water",
              "as needed"
            ]
          ]
        }
      ],
      "method": "Combine the sauce ingredients and mix briefly (it won’t come together right away), then microwave for 30 seconds. Mix again until smooth and set aside to cool. Adjust the sourness with vinegar, the saltiness with salt, and the spice to taste. Once cooled, thin with milk or water as needed."
    },
    "tips": [
      [
        "Flavor boost",
        "Add mint."
      ],
      [
        "Substitution",
        "Vary the fillings. Firm tofu works too, but press out all the water before cooking. You can also add other cooked proteins, such as shrimp, chicken, or pork."
      ],
      [
        "Meal prep hack",
        "Don’t make these ahead. Prepare them and serve immediately, since the rolls don’t last long in the refrigerator. A damp paper towel on top helps keep them fresh."
      ]
    ],
    "nutrition": [
      {
        "name": "Firm tofu",
        "facts": [
          "90 to 144 calories per 100 g",
          "10 to 14 g protein",
          "7 g fiber",
          "2 g carbs",
          "0 cholesterol"
        ],
        "notes": "Heart-healthy polyunsaturated fat. Includes calcium, manganese, iron, copper, selenium, phosphorus, magnesium, zinc, and vitamins A, B1, B2 and B5."
      },
      {
        "name": "Carrots",
        "facts": [
          "25 calories per carrot",
          "9 to 9.6 g carbs, with 3 to 5 g natural sugars",
          "2.7 to 3 g fiber",
          "0.8 to 1 g protein",
          "under 0.3 g fat"
        ],
        "notes": "A micronutrient “superfood,” especially for vitamins A, K1, B6, and B7, and potassium."
      },
      {
        "name": "Cucumbers",
        "facts": [
          "28 calories per 100 g",
          "2 g fiber",
          "1 g protein",
          "very low fat"
        ],
        "notes": "Packed with vitamins (especially C, A, B6, K and E) and minerals (potassium, folate), with antioxidants and fiber for digestive health."
      },
      {
        "name": "Avocado",
        "facts": [
          "160 calories per 100 g",
          "2 g protein",
          "7 g fiber",
          "8.5 g carbs",
          "15 g healthy fats, mostly monounsaturated"
        ],
        "notes": "Around 20 different vitamins and minerals, notably potassium, vitamins K, B9, C, E and B6, magnesium, and copper."
      },
      {
        "name": "Lettuce",
        "facts": [
          "17 calories per 100 g",
          "2 g fiber",
          "1 g protein",
          "3 g carbs",
          "very little fat"
        ],
        "notes": "Dense in micronutrients, including vitamins K, A, C and B9, and potassium."
      },
      {
        "name": "Rice noodles",
        "facts": [
          "100 calories per 100 g",
          "1 g fiber",
          "2 g protein",
          "24 g carbs",
          "very low fat and sodium"
        ],
        "notes": "Made from rice flour, rice noodles are a quickly digested, high-energy carb. Gluten-free, a good source of selenium, with modest manganese and phosphorus."
      },
      {
        "name": "Peanut butter",
        "facts": [
          "188 calories per 2 tbsp",
          "7 g protein",
          "16 g fat",
          "7 g carbs",
          "2 g fiber",
          "3 g sugar"
        ],
        "notes": "Nutrient dense, with protein, monounsaturated fats, fiber, and minerals like phosphorus, potassium, and niacin. Its fat and protein keep you full longer, which can help with weight management."
      }
    ],
    "learn": [
      {
        "q": "What is tofu, and is it good for you?",
        "paras": [
          "Tofu is a nutrient-dense, plant-based protein made from curdled soy milk pressed into blocks. It is a complete protein, containing all nine essential amino acids, and it is high in iron and calcium. It is generally considered very healthy: it supports heart health, may reduce the risk of certain cancers, and aids weight management. It is low in fat, cholesterol-free, and safe to eat every day.",
          "Its nutrition varies mainly with firmness. Firmer varieties hold less water, so they carry more protein, fat, and calories per serving."
        ],
        "list": {
          "title": "By firmness",
          "items": [
            [
              "Extra firm",
              "15 to 17 g protein and about 145 calories"
            ],
            [
              "Firm",
              "8 to 10 g protein and 70 to 80 calories"
            ],
            [
              "Silken or soft",
              "Higher in water, with about 4 to 7 g protein and 40 to 62 calories"
            ]
          ]
        },
        "benefits": {
          "title": "Key health benefits",
          "items": [
            [
              "Heart health",
              "Cholesterol-free and low in saturated fat, tofu may help reduce LDL cholesterol. Studies show eating at least one serving a week may lower heart disease risk by 18%."
            ],
            [
              "Nutrient-rich",
              "A good source of iron, manganese, selenium, phosphorus, and calcium, especially when made with calcium sulfate."
            ],
            [
              "Cancer risk reduction",
              "Tofu contains isoflavones, which have antioxidant and anti-inflammatory properties and potential protective effects against breast, prostate, and colorectal cancers."
            ],
            [
              "Bone health",
              "Its high calcium and magnesium content helps prevent osteoporosis."
            ]
          ]
        }
      }
    ]
  },
  {
    "slug": "khao-soi",
    "pdf": "khao-soi-thai-coconut-noodle-soup.pdf",
    "title": "Khao Soi",
    "subtitle": "Thai coconut noodle soup",
    "region": "Chiang Mai, Northern Thailand",
    "intro": "My son Max introduced me to this soup. The coconut broth is fragrant and rich, coating every noodle. It is crazy flavorful and a crowd pleaser!",
    "origin": "Khao soi hails from Chiang Mai in Northern Thailand, where the weather stays a bit cooler.",
    "glance": {
      "prep": "20",
      "cook": "30",
      "serves": "6 to 8"
    },
    "mise": [
      [
        "Air fry",
        "Tofu, seasoned with salt and pepper and a light coat of cooking spray"
      ],
      [
        "Soak",
        "Kaffir lime leaves for 20 minutes"
      ],
      [
        "Chop",
        "Garlic, lemongrass, and shallots"
      ],
      [
        "Slice",
        "Mushrooms finely, and julienne the bell peppers"
      ],
      [
        "Tools",
        "An air fryer and a soup pot"
      ]
    ],
    "ingredients": [
      {
        "group": "Plant protein",
        "items": [
          [
            "Firm or extra firm tofu, sliced lengthwise about 1 inch thick",
            "2 blocks"
          ]
        ]
      },
      {
        "group": "Fresh produce & aromatics",
        "items": [
          [
            "Baby bella mushrooms, thinly sliced and halved",
            "3 cups"
          ],
          [
            "Shallots, finely chopped",
            "2"
          ],
          [
            "Red bell peppers",
            "2"
          ],
          [
            "Limes (one for the broth, one for garnish)",
            "2"
          ]
        ]
      },
      {
        "group": "Noodles",
        "items": [
          [
            "Lo mein noodles (fresh is best)",
            "1 package"
          ]
        ]
      },
      {
        "group": "For the broth",
        "items": [
          [
            "Coconut oil",
            "2 tbsp"
          ],
          [
            "Shallots, finely diced (or half an onion)",
            "2 large"
          ],
          [
            "Lemongrass, minced",
            "6 tbsp"
          ],
          [
            "Garlic, roughly chopped",
            "8 cloves"
          ],
          [
            "Thai red curry paste (more for extra heat)",
            "2 tbsp"
          ],
          [
            "Turmeric",
            "1 tsp"
          ],
          [
            "Curry powder",
            "1 tsp"
          ],
          [
            "Cardamom",
            "1 tsp"
          ],
          [
            "Light coconut milk",
            "2 cans (14 oz each)"
          ],
          [
            "Vegetable broth, plus 2 cups water",
            "1 cup"
          ],
          [
            "Kaffir lime leaves",
            "15"
          ],
          [
            "Fish sauce",
            "4 tbsp"
          ],
          [
            "Soy sauce (2 dark, 2 light)",
            "4 tbsp"
          ],
          [
            "Brown sugar",
            "4 tbsp"
          ],
          [
            "Chili garlic sauce",
            "2 tbsp"
          ],
          [
            "Salt and pepper",
            "to taste"
          ],
          [
            "Lime",
            "1"
          ]
        ],
        "swap": "Plant-based swap: use a vegan fish sauce."
      },
      {
        "group": "To finish",
        "items": [
          [
            "Bean sprouts, cilantro or crunchy noodles, Thai basil, and lime wedges",
            "for garnish"
          ]
        ]
      }
    ],
    "prepNote": "For the lemongrass, trim the woody top and stay away from the purple ring, then slice the rest and mince it finely.",
    "steps": [
      {
        "title": "Prepare",
        "items": [
          "Cut each vegetable and arrange each type on its own plate."
        ]
      },
      {
        "title": "Pre-cook",
        "items": [
          "Cook the tofu in the air fryer, or lightly sauté it on both sides on a griddle."
        ]
      },
      {
        "title": "Make the broth",
        "items": [
          "Have all of your ingredients in front of you.",
          "In a large pot, heat the oil over medium heat. Add the shallot, garlic, and lemongrass and sauté until fragrant and golden, about 3 to 4 minutes.",
          "Add the mushrooms and cook until softened. Add the red curry paste and spices and sauté for 1 minute.",
          "Add the coconut milk, broth, and lime leaves and bring to a simmer, stirring. Once gently simmering, add the fish sauce, sugar, soy sauce, and chili garlic sauce.",
          "Add the tofu and simmer gently, covered. Avoid a high flame so the coconut milk doesn’t separate.",
          "Add the peppers and simmer for 20 to 30 minutes.",
          "Give it a generous squeeze of lime. Taste, adding more lime, salt, pepper, or curry paste as needed. Find the balance between salty, sweet, sour, and spicy."
        ],
        "note": {
          "title": "If the broth lacks depth",
          "items": [
            "Add more fish sauce, soy sauce, or salt, and make sure it is piping hot."
          ]
        }
      },
      {
        "title": "Cook the noodles",
        "items": [
          "Place the fresh noodles in boiling water for 4 minutes, then rinse in cold water."
        ]
      },
      {
        "title": "Serve",
        "items": [
          "Divide the noodles among bowls and ladle the hot soup over the top, which makes it easier to handle.",
          "Garnish with bean sprouts, cilantro or crunchy noodles, Thai basil, and more lime wedges."
        ]
      }
    ],
    "tips": [
      [
        "Flavor boost",
        "Add more soy sauce and chili to taste."
      ],
      [
        "Substitution",
        "Add bok choy, and any mushrooms you enjoy."
      ],
      [
        "Meal prep hack",
        "Keeps well for days in the refrigerator, and it freezes beautifully."
      ]
    ],
    "nutrition": [
      {
        "name": "Firm tofu",
        "facts": [
          "90 to 144 calories per 100 g",
          "10 to 14 g protein",
          "7 g fiber",
          "2 g carbs",
          "0 cholesterol"
        ],
        "notes": "Heart-healthy polyunsaturated fat. Includes calcium, manganese, iron, copper, selenium, phosphorus, magnesium, zinc, and vitamins A, B1, B2 and B5."
      },
      {
        "name": "Mushrooms",
        "facts": [
          "28 calories per cup",
          "2.9 g protein",
          "5.2 g carbs",
          "0.3 g fat"
        ],
        "notes": "High in B vitamins, vitamin D2, and antioxidants. May help lower cholesterol, regulate blood sugar, and support the immune system."
      },
      {
        "name": "Bell peppers",
        "facts": [
          "28 calories per 100 g",
          "2 g fiber",
          "1 g protein",
          "very low fat"
        ],
        "notes": "Packed with vitamins (especially C, A, B6, K and E) and minerals (potassium, folate), with antioxidants and fiber for digestive health."
      },
      {
        "name": "Wheat noodles",
        "facts": [
          "123 to 340 calories per 100 g",
          "5 to 9 g protein",
          "2 to 5 g fiber",
          "0 to 3 g fat"
        ],
        "notes": "Low in fat and cholesterol-free, and high in complex carbohydrates for sustained energy, with iron, potassium, and B vitamins (thiamin, niacin). Whole wheat versions provide more fiber."
      }
    ],
    "learn": [
      {
        "q": "What is tofu, and is it good for you?",
        "paras": [
          "Tofu is a nutrient-dense, plant-based protein made from curdled soy milk pressed into blocks. It is a complete protein, containing all nine essential amino acids, and it is high in iron and calcium. It is generally considered very healthy: it supports heart health, may reduce the risk of certain cancers, and aids weight management. It is low in fat, cholesterol-free, and safe to eat every day.",
          "Its nutrition varies mainly with firmness. Firmer varieties hold less water, so they carry more protein, fat, and calories per serving."
        ],
        "list": {
          "title": "By firmness",
          "items": [
            [
              "Extra firm",
              "15 to 17 g protein and about 145 calories"
            ],
            [
              "Firm",
              "8 to 10 g protein and 70 to 80 calories"
            ],
            [
              "Silken or soft",
              "Higher in water, with about 4 to 7 g protein and 40 to 62 calories"
            ]
          ]
        },
        "benefits": {
          "title": "Key health benefits",
          "items": [
            [
              "Heart health",
              "Cholesterol-free and low in saturated fat, tofu may help reduce LDL cholesterol. Studies show eating at least one serving a week may lower heart disease risk by 18%."
            ],
            [
              "Nutrient-rich",
              "A good source of iron, manganese, selenium, phosphorus, and calcium, especially when made with calcium sulfate."
            ],
            [
              "Cancer risk reduction",
              "Tofu contains isoflavones, which have antioxidant and anti-inflammatory properties and potential protective effects against breast, prostate, and colorectal cancers."
            ],
            [
              "Bone health",
              "Its high calcium and magnesium content helps prevent osteoporosis."
            ]
          ]
        }
      }
    ]
  },
  {
    "slug": "black-pepper-soy-curls",
    "pdf": "black-pepper-soy-curls.pdf",
    "title": "Black Pepper Soy Curls",
    "subtitle": "with sticky rice",
    "region": "Inspired by Sichuan, China",
    "intro": "Delicious flavor with colorful veggies, and it’s vegan! Super easy, too. Soy curls are a great staple for vegetarians and vegans because they are protein-based and so versatile: spice them up or marinate them, bake them, pan fry them, shred them, crisp them.",
    "origin": "Inspired by Sichuan pepper chicken. Szechuan chicken comes from Sichuan province in southwestern China, a region renowned for its bold, spicy, aromatic cuisine. It is defined by “mala” flavor, a combination of numbing Sichuan peppercorns and spicy chili peppers. Authentic versions stir-fry crispy chicken with dried chilies and peppercorns.",
    "glance": {
      "prep": "15",
      "cook": "35",
      "serves": "6 to 8"
    },
    "mise": [
      [
        "Soak",
        "Soy curls in water for 10 minutes, then marinate them in broth"
      ],
      [
        "Rinse",
        "The rice"
      ],
      [
        "Blanch",
        "Broccoli in boiling water for 4 minutes, then drain into ice water"
      ],
      [
        "Chop",
        "Peppers, onions, broccoli, garlic, and ginger"
      ],
      [
        "Assemble",
        "All of the sauces and spices"
      ],
      [
        "Tools",
        "A knife, a rice cooker, and a bowl of ice water for blanching"
      ]
    ],
    "ingredients": [
      {
        "group": "For the soy curls",
        "items": [
          [
            "Soy curls",
            "2½ cups"
          ],
          [
            "Vegetable broth",
            "2 cups"
          ],
          [
            "Garlic powder",
            "2 tsp"
          ],
          [
            "Ground pepper",
            "1 tsp"
          ],
          [
            "Soy sauce",
            "4 tsp"
          ],
          [
            "Rice flour, enough to coat",
            "about ¼ cup"
          ]
        ]
      },
      {
        "group": "For the sauce",
        "items": [
          [
            "Soy sauce",
            "4 tbsp"
          ],
          [
            "Maple syrup",
            "2 tbsp"
          ],
          [
            "Oyster sauce",
            "3 tbsp"
          ],
          [
            "Crushed black pepper",
            "1 tsp"
          ],
          [
            "Mirin",
            "1 tbsp"
          ],
          [
            "Vegetable broth (powder or homemade)",
            "1 cup"
          ],
          [
            "Arrowroot",
            "4 tsp"
          ]
        ],
        "swap": "Plant-based swap: use a vegetarian (mushroom) oyster sauce."
      },
      {
        "group": "For the vegetables",
        "items": [
          [
            "Sesame oil",
            "4 tsp"
          ],
          [
            "Green and red bell peppers, chopped medium",
            "2 cups"
          ],
          [
            "Broccoli, cut medium and blanched",
            "½ bunch"
          ],
          [
            "Onion, in ½ inch pieces",
            "1 cup"
          ],
          [
            "Scallions",
            "1 bunch"
          ],
          [
            "Garlic, minced",
            "4 cloves"
          ],
          [
            "Ginger, minced",
            "1 inch"
          ]
        ]
      },
      {
        "group": "To serve",
        "items": [
          [
            "Sticky rice",
            "2 cups"
          ],
          [
            "Sesame seeds and peanuts",
            "for garnish"
          ]
        ]
      }
    ],
    "steps": [
      {
        "title": "Make the rice",
        "items": [
          "Add 2 cups of rice to the rice cooker and rinse until the water is no longer cloudy. Add water up to the first line of your pointer finger ☺"
        ]
      },
      {
        "title": "Soak the soy curls",
        "items": [
          "Warm the broth in a medium bowl in the microwave, add the soy curls, and soak for 15 minutes.",
          "Drain, reserving the soaking liquid, and press lightly to remove excess moisture. Transfer to a bowl."
        ]
      },
      {
        "title": "Crisp the soy curls",
        "items": [
          "In a small bowl, mix the garlic powder, black pepper, and rice flour.",
          "Toss the soy curls with the soy sauce, then coat them with the rice flour mixture.",
          "Pan fry in a skillet over medium heat with a generous coat of cooking spray and 1 teaspoon of oil, crisping each side for 3 to 4 minutes. Move to a separate bowl.",
          "Meanwhile, mix all of the sauce ingredients in a bowl and set aside."
        ]
      },
      {
        "title": "Sauté the vegetables",
        "items": [
          "Once the soy curls are done, heat a large nonstick skillet over medium heat and add the oil.",
          "When the oil is hot, add the onions and peppers. Once half cooked, add the garlic and ginger, then the broccoli and a pinch of salt. Toss well.",
          "Cook for a minute or two. The vegetables should stay crunchy, and the garlic should just start to turn golden."
        ]
      },
      {
        "title": "Bring it together",
        "items": [
          "As soon as the garlic turns golden, add the sauce mixture. Bring to a boil and cook for about a minute, until the sauce thickens.",
          "Add the crispy soy curls, toss well, and take off the heat.",
          "Taste and adjust: a little more maple syrup for sweetness, more oyster sauce for depth, or more black pepper or red pepper flakes for heat."
        ]
      },
      {
        "title": "Serve",
        "items": [
          "Spoon over a small bowl of rice or cooked grains, garnish with sesame seeds and peanuts, and enjoy!"
        ]
      }
    ],
    "tips": [
      [
        "Flavor boost",
        "The longer you marinate the soy curls, the tastier they will be."
      ],
      [
        "Substitution",
        "Try other vegetables, like water chestnuts, bamboo shoots, carrots, green beans, or Chinese eggplant. You can also swap the soy curls for seitan."
      ]
    ],
    "nutrition": [
      {
        "name": "Broccoli",
        "facts": [
          "35 calories",
          "2.3 g protein",
          "5.6 g carbs",
          "2.2 g fiber",
          "0.3 g fat"
        ],
        "notes": "A nutrient powerhouse rich in vitamins C, K, A and folate, minerals, fiber, and antioxidants that support immunity, digestion, heart health, and brain function, and may reduce inflammation and the risk of certain cancers."
      },
      {
        "name": "Bell peppers",
        "facts": [
          "26 to 31 calories per 100 g",
          "2 to 2.1 g fiber",
          "1 g protein",
          "very low fat"
        ],
        "notes": "Packed with vitamins (especially C, A, B6, K and E) and minerals (potassium, folate), with antioxidants and fiber for digestive health."
      },
      {
        "name": "Onions",
        "facts": [
          "38 calories",
          "0.8 g protein",
          "8.6 g carbs",
          "1.9 g fiber",
          "0.1 g fat"
        ],
        "notes": "Rich in antioxidants like quercetin and prebiotic fibers, supporting gut health and heart health by helping lower cholesterol and blood pressure."
      },
      {
        "name": "Soy curls",
        "facts": [
          "120 calories per 30 g",
          "11 g protein",
          "0 mg sodium"
        ],
        "notes": "Very low in saturated fat, with no cholesterol."
      }
    ],
    "learn": [
      {
        "q": "What are soy curls, and are they good for you?",
        "paras": [
          "Yes! Soy curls are made from non-GMO whole soybeans, without chemical pesticides, preservatives, or additives. They are also a great source of protein, fiber, iron, and potassium."
        ]
      },
      {
        "q": "What’s the difference between soy curls and tofu?",
        "paras": [
          "Tofu is minimally processed but not a whole food. It provides high-quality protein, healthy fats, and often added calcium. Soy curls are closer to a whole food than most processed soy products, retaining the fiber and protein of whole soybeans, though some nutrients are lost in processing."
        ]
      }
    ]
  }
];
