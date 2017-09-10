import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient} from './ingredient.model';

@Injectable()
export class RecipeService {

private recipes: Recipe[] = [
        new Recipe('Recipe name 1', 'Recipe description 1', 'http://selection.readersdigest.ca/wp-content/uploads/2010/01/saumon-tian-recette.jpg',
        [new Ingredient('banane',20),
        new Ingredient('banane',20)]),
         
         new Recipe('Recipe name 2', 'Recipe description 2', 'http://selection.readersdigest.ca/wp-content/uploads/2010/01/saumon-tian-recette.jpg',
         [new Ingredient('banane',20),
        new Ingredient('banane',20)])
    ];
  constructor() { }
  
 getRecipes(){
    return this.recipes.slice();
  }
  recipeSelectedToShow = new EventEmitter<Recipe>();

    showRecipeDetail(id: number){
        this.recipes[id]
    }
}
