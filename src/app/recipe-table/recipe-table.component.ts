import { Component } from '@angular/core';
import { RecipeService } from "../recipe.service";
import { Recipe } from "../recipe";

@Component({
  selector: 'app-recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrls: ['./recipe-table.component.css']
})
export class RecipeTableComponent {
  readonly TAX_PERCENTAGE = 0.1

  constructor(private recipeService: RecipeService) {
  }

  getRecipes() {
    return this.recipeService.recipes;
  }

  getExpense(recipe: Recipe) {
    let expense = 0;
    recipe.recipeIngredients.forEach(recipe => expense += recipe.quantity * recipe.ingredient.costPerUnit);
    return expense;
  }

  getMarkup(recipe: Recipe) {
    return this.getExpense(recipe) * 0.25;
  }

  getTax(recipe: Recipe) {
    return this.TAX_PERCENTAGE * (this.getExpense(recipe) + this.getMarkup(recipe));
  }

  getTotal(recipe: Recipe) {
    return this.getExpense(recipe) + this.getMarkup(recipe) + this.getTax(recipe);
  }
}
