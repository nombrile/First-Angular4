import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shared/shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    
    @ViewChild('amountInput') amount: ElementRef;
   constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

    addIngredient(nameInput){
        this.shoppingListService.addIngredientToList(new Ingredient(nameInput.value,this.amount.nativeElement.value));
    }
}
