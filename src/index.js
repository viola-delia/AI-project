function displayRecipe(response) {
 
console.log("recipe generated");

  new Typewriter('#recipe', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generateRecipe(event) {
event.preventDefault();

//Build the API URL

let instructionsInput = document.querySelector("#instructions");
let apiKey = "35te54ac48ff3dd030f2e92oaf3b5d78";
let prompt = `Please generate the recipe of ${instructionsInput.value} including all the different steps and ingredients. Show the recipe in basic HTML for a better UX`;
let context = "You are a master chef with a lot of knowledge in recipes from all over the world";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log(`Prompt : ${prompt}`);

//make a call to the API using AXIOS

axios.get(apiUrl).then(displayRecipe);

// DIsplay the generated recipe




}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement = addEventListener("submit", generateRecipe);