import { Component, OnInit, Input} from '@angular/core';
import{ Recipe} from '../recipe.model';
import { ShoppingListService } from '../../shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
@Input()theRecipeToDetail:Recipe;
  constructor(private shoppingListService: ShoppingListService) { 

  }

  ngOnInit() {
  }
  moveIngredientsToShoppingList(){
    this.shoppingListService.addRecipeIngredientsToShopList(this.theRecipeToDetail.ingredients)
  }
}
