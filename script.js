// Sample recipe data
const recipes = [
    {
      id: 1,
      title: "Classic Spaghetti Carbonara",
      description: "A traditional Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
      image: "/placeholder.svg?height=400&width=600",
      category: "non-vegetarian",
      time: "30 min",
      difficulty: "Medium",
      ingredients: [
        "350g spaghetti",
        "150g pancetta or guanciale, diced",
        "3 large eggs",
        "50g pecorino cheese, grated",
        "50g parmesan cheese, grated",
        "Freshly ground black pepper",
        "Salt to taste",
      ],
      instructions: [
        "Bring a large pot of salted water to boil and cook spaghetti according to package instructions.",
        "While pasta is cooking, heat a large skillet over medium heat and cook the pancetta until crispy.",
        "In a bowl, whisk together eggs, grated cheeses, and black pepper.",
        "Drain the pasta, reserving about 1/2 cup of pasta water.",
        "Working quickly, add hot pasta to the skillet with pancetta, remove from heat.",
        "Pour the egg and cheese mixture over the pasta, stirring constantly to create a creamy sauce.",
        "Add a splash of reserved pasta water if needed to loosen the sauce.",
        "Serve immediately with extra grated cheese and black pepper on top.",
      ],
    },
    {
      id: 2,
      title: "Vegetable Stir Fry",
      description: "A quick and healthy vegetable stir fry with a savory sauce.",
      image: "/placeholder.svg?height=400&width=600",
      category: "vegetarian",
      time: "20 min",
      difficulty: "Easy",
      ingredients: [
        "2 tbsp vegetable oil",
        "2 cloves garlic, minced",
        "1 tbsp ginger, grated",
        "1 bell pepper, sliced",
        "1 carrot, julienned",
        "1 cup broccoli florets",
        "1 cup snap peas",
        "2 tbsp soy sauce",
        "1 tbsp rice vinegar",
        "1 tsp sesame oil",
        "1 tsp honey or maple syrup",
        "Sesame seeds for garnish",
      ],
      instructions: [
        "Heat vegetable oil in a large wok or skillet over high heat.",
        "Add garlic and ginger, stir for 30 seconds until fragrant.",
        "Add vegetables, starting with the ones that take longer to cook (carrots, broccoli).",
        "Stir fry for 3-4 minutes, then add quicker cooking vegetables (bell pepper, snap peas).",
        "Continue cooking for 2-3 minutes until vegetables are crisp-tender.",
        "In a small bowl, mix soy sauce, rice vinegar, sesame oil, and honey.",
        "Pour sauce over vegetables and toss to coat.",
        "Cook for another minute until sauce is slightly thickened.",
        "Garnish with sesame seeds and serve over rice or noodles.",
      ],
    },
    {
      id: 3,
      title: "Classic Beef Burger",
      description: "Juicy homemade beef burgers with all the fixings.",
      image: "/placeholder.svg?height=400&width=600",
      category: "non-vegetarian",
      time: "40 min",
      difficulty: "Medium",
      ingredients: [
        "500g ground beef (80% lean)",
        "1 small onion, finely diced",
        "1 clove garlic, minced",
        "1 tbsp Worcestershire sauce",
        "1 egg",
        "Salt and pepper to taste",
        "4 burger buns",
        "4 slices cheese (cheddar or American)",
        "Lettuce leaves",
        "Tomato slices",
        "Red onion slices",
        "Pickles",
        "Ketchup, mustard, and mayo",
      ],
      instructions: [
        "In a large bowl, combine ground beef, diced onion, garlic, Worcestershire sauce, egg, salt, and pepper.",
        "Mix gently with your hands until just combined (don't overmix).",
        "Divide the mixture into 4 equal portions and shape into patties, making a slight indentation in the center.",
        "Heat a grill or skillet over medium-high heat.",
        "Cook burgers for 4-5 minutes per side for medium doneness.",
        "Add cheese slices during the last minute of cooking to melt.",
        "Toast the burger buns lightly.",
        "Assemble burgers with your choice of toppings and condiments.",
        "Serve immediately with fries or a side salad.",
      ],
    },
    {
      id: 4,
      title: "Mushroom Risotto",
      description: "Creamy Italian rice dish with mushrooms and parmesan.",
      image: "/placeholder.svg?height=400&width=600",
      category: "vegetarian",
      time: "45 min",
      difficulty: "Medium",
      ingredients: [
        "1.5L vegetable stock",
        "2 tbsp olive oil",
        "1 onion, finely chopped",
        "2 cloves garlic, minced",
        "300g mixed mushrooms, sliced",
        "300g arborio rice",
        "150ml dry white wine",
        "50g butter",
        "50g parmesan cheese, grated",
        "2 tbsp fresh parsley, chopped",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Heat the vegetable stock in a saucepan and keep at a gentle simmer.",
        "In a large, heavy-based pan, heat olive oil and sauté onion until soft.",
        "Add garlic and mushrooms, cook for 2-3 minutes until mushrooms are soft.",
        "Add rice and stir for 1-2 minutes until translucent around the edges.",
        "Pour in wine and stir until absorbed.",
        "Add hot stock one ladle at a time, stirring constantly and waiting until each addition is absorbed before adding more.",
        "Continue for about 20-25 minutes until rice is creamy but still has a slight bite.",
        "Remove from heat, stir in butter and parmesan cheese.",
        "Season with salt and pepper, garnish with parsley.",
        "Let stand for 2 minutes before serving.",
      ],
    },
    {
      id: 5,
      title: "Chicken Caesar Salad",
      description: "Classic salad with grilled chicken, romaine lettuce, and Caesar dressing.",
      image: "/placeholder.svg?height=400&width=600",
      category: "non-vegetarian",
      time: "25 min",
      difficulty: "Easy",
      ingredients: [
        "2 chicken breasts",
        "1 tbsp olive oil",
        "Salt and pepper to taste",
        "1 large head romaine lettuce, chopped",
        "50g parmesan cheese, shaved",
        "Croutons",
        "For the dressing:",
        "1 clove garlic, minced",
        "2 anchovy fillets, minced (optional)",
        "1 tbsp Dijon mustard",
        "1 tbsp lemon juice",
        "1 tsp Worcestershire sauce",
        "120ml mayonnaise",
        "3 tbsp olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Season chicken breasts with salt, pepper, and olive oil.",
        "Grill or pan-fry for 6-7 minutes per side until cooked through.",
        "Let chicken rest for 5 minutes, then slice.",
        "For the dressing, whisk together garlic, anchovies, mustard, lemon juice, and Worcestershire sauce.",
        "Gradually whisk in mayonnaise and olive oil until smooth.",
        "Season with salt and pepper to taste.",
        "In a large bowl, toss romaine lettuce with enough dressing to coat.",
        "Top with sliced chicken, parmesan shavings, and croutons.",
        "Serve immediately with extra dressing on the side.",
      ],
    },
    {
      id: 6,
      title: "Vegetable Curry",
      description: "Flavorful vegetable curry with coconut milk and aromatic spices.",
      image: "/placeholder.svg?height=400&width=600",
      category: "vegetarian",
      time: "35 min",
      difficulty: "Medium",
      ingredients: [
        "2 tbsp vegetable oil",
        "1 onion, diced",
        "2 cloves garlic, minced",
        "1 tbsp ginger, grated",
        "2 tbsp curry powder",
        "1 tsp ground cumin",
        "1 tsp ground coriander",
        "1/2 tsp turmeric",
        "1 can (400ml) coconut milk",
        "1 can (400g) diced tomatoes",
        "1 bell pepper, diced",
        "1 cauliflower, cut into florets",
        "1 can (400g) chickpeas, drained",
        "2 cups spinach",
        "Fresh cilantro for garnish",
        "Salt to taste",
      ],
      instructions: [
        "Heat oil in a large pot over medium heat.",
        "Add onion and cook until soft, about 5 minutes.",
        "Add garlic and ginger, cook for 1 minute until fragrant.",
        "Stir in curry powder, cumin, coriander, and turmeric, cook for 30 seconds.",
        "Add coconut milk and diced tomatoes, bring to a simmer.",
        "Add bell pepper, cauliflower, and chickpeas.",
        "Cover and simmer for 15-20 minutes until vegetables are tender.",
        "Stir in spinach and cook until wilted.",
        "Season with salt to taste.",
        "Garnish with fresh cilantro and serve with rice or naan bread.",
      ],
    },
  ]
  
  // DOM elements
  const recipeContainer = document.getElementById("recipe-container")
  const searchInput = document.getElementById("search-input")
  const searchButton = document.getElementById("search-button")
  const modal = document.getElementById("recipe-modal")
  const modalContent = document.getElementById("modal-recipe-content")
  const closeButton = document.querySelector(".close-button")
  const categoryLinks = document.querySelectorAll("nav ul li a")
  
  // Display all recipes initially
  displayRecipes(recipes)
  
  // Event listeners
  searchButton.addEventListener("click", searchRecipes)
  searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      searchRecipes()
    }
  })
  
  closeButton.addEventListener("click", () => {
    modal.style.display = "none"
  })
  
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"
    }
  })
  
  // Add event listeners to category links
  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
  
      // Remove active class from all links
      categoryLinks.forEach((l) => l.classList.remove("active"))
  
      // Add active class to clicked link
      this.classList.add("active")
  
      const category = this.getAttribute("data-category")
      filterRecipesByCategory(category)
    })
  })
  
  // Functions
  function displayRecipes(recipesToShow) {
    recipeContainer.innerHTML = ""
  
    recipesToShow.forEach((recipe) => {
      const recipeCard = document.createElement("div")
      recipeCard.className = "recipe-card"
      recipeCard.setAttribute("data-id", recipe.id)
  
      recipeCard.innerHTML = `
              <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
              <div class="recipe-info">
                  <h3 class="recipe-title">${recipe.title}</h3>
                  <p class="recipe-description">${recipe.description}</p>
                  <div class="recipe-meta">
                      <span>${recipe.time}</span>
                      <span class="recipe-tag">${recipe.category}</span>
                  </div>
              </div>
          `
  
      recipeCard.addEventListener("click", () => {
        showRecipeDetails(recipe)
      })
  
      recipeContainer.appendChild(recipeCard)
    })
  }
  
  function searchRecipes() {
    const searchTerm = searchInput.value.toLowerCase().trim()
  
    if (searchTerm === "") {
      displayRecipes(recipes)
      return
    }
  
    const filteredRecipes = recipes.filter((recipe) => {
      // Search in title, description, and ingredients
      return (
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchTerm))
      )
    })
  
    displayRecipes(filteredRecipes)
  }
  
  function filterRecipesByCategory(category) {
    if (category === "all") {
      displayRecipes(recipes)
    } else {
      const filteredRecipes = recipes.filter((recipe) => recipe.category === category)
      displayRecipes(filteredRecipes)
    }
  }
  
  function showRecipeDetails(recipe) {
    modalContent.innerHTML = `
          <h2>${recipe.title}</h2>
          <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">
          <p>${recipe.description}</p>
          <div class="recipe-meta">
              <span>Time: ${recipe.time}</span>
              <span>Difficulty: ${recipe.difficulty}</span>
              <span class="recipe-tag">${recipe.category}</span>
          </div>
          <div class="recipe-detail">
              <h3>Ingredients</h3>
              <ul class="ingredients-list">
                  ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
              </ul>
              <h3>Instructions</h3>
              <ol class="instructions-list">
                  ${recipe.instructions.map((instruction) => `<li>${instruction}</li>`).join("")}
              </ol>
          </div>
      `
  
    modal.style.display = "block"
  }
  