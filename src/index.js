function generateRecipe(event) {
event.preventDefault();

new Typewriter('#recipe', {
  strings: ['tiramisu'],
  autoStart: true,
  cursor: "",
});


}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement = addEventListener("submit", generateRecipe);