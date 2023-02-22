import { IngredientUnit } from "./ingredient-unit";

export interface Ingredient {
  name: string;
  unit: IngredientUnit;
  costPerUnit: number;
}
