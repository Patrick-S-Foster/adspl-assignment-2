import { Component } from '@angular/core';
import { IngredientUnit } from "../ingredient-unit";
import { IngredientService } from "../ingredient.service";

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent {
  name: string = '';
  costPerUnit: number = 0;
  unit: IngredientUnit = IngredientUnit.Unit;

  constructor(private ingredientService: IngredientService) {
  }

  getIngredientUnits() {
    return Object.values(IngredientUnit);
  }

  addIngredient() {
    this.ingredientService.ingredients.push({costPerUnit: this.costPerUnit, name: this.name, unit: this.unit});

    this.cancel();
  }

  cancel() {
    this.name = '';
    this.costPerUnit = 0;
    this.unit = IngredientUnit.Unit;
  }
}
