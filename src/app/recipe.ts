import { RecipeIngredient } from "./recipe-ingredient";

export interface Recipe {
  name: string;
  recipeIngredients: RecipeIngredient[];
}
