import { Component } from '@angular/core';
import { RecipeService } from "../recipe.service";
import { RecipeIngredient } from "../recipe-ingredient";
import { Ingredient } from "../ingredient";
import { IngredientService } from "../ingredient.service";
import { IngredientUnit } from "../ingredient-unit";

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {
  readonly EMPTY_INGREDIENT: Ingredient = {costPerUnit: 0, name: "Create an ingredient...", unit: IngredientUnit.Unit};
  name: string = '';
  recipeIngredients: RecipeIngredient[] = [];
  selectedIngredient: Ingredient =
    this.ingredientService.ingredients.length > 0 ? this.ingredientService.ingredients[0] : this.EMPTY_INGREDIENT;
  quantity: number = 0;

  constructor(private ingredientService: IngredientService, private recipeService: RecipeService) {
  }

  getAvailableIngredients() {
    return this.ingredientService.ingredients;
  }

  addIngredient() {
    if (this.selectedIngredient != this.EMPTY_INGREDIENT) {
      this.recipeIngredients.push({ingredient: this.selectedIngredient, quantity: this.quantity});
    }

    this.selectedIngredient =
      this.ingredientService.ingredients.length > 0 ? this.ingredientService.ingredients[0] : this.EMPTY_INGREDIENT;
    this.quantity = 0;
  }

  addRecipe() {
    this.recipeService.recipes.push({recipeIngredients: this.recipeIngredients, name: this.name});

    this.cancel();
  }

  cancel() {
    this.name = '';
    this.recipeIngredients = [];
  }
}
