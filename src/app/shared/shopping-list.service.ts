import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable()
export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>()

 private ingredients: Ingredient[] = [
        
        new Ingredient('banane',20),
        new Ingredient('banane',20),
        new Ingredient('banane',20),
        new Ingredient('banane',20)
    
    ];

  constructor() { }
  
  getIngredients(){
    return this.ingredients.slice();
  }
  
  addIngredientToList(theNewIngredient: Ingredient){
    this.ingredients.push(theNewIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

    
    addRecipeIngredientsToShopList(ingredientsList: Ingredient[]){
       console.log('hello' + ingredientsList)
        this.ingredients.push(...ingredientsList);
       
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}
