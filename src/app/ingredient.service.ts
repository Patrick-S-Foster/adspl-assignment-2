import { Injectable } from '@angular/core';
import { Ingredient } from "./ingredient";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  ingredients: Ingredient[] = []
}
