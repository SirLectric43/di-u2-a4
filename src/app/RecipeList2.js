import { recipes } from './recipes.js';

function Recipe({ name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList2() {
  return (
    <div>
      <h1>Recetas</h1>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
}