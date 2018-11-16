import { Injectable ,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe('Lontong Kupang','Lontong Kupang Lontong kupang or kupang lontong is the name of a typical East Java food. This food is famous especially in Surabaya, Sidoarjo and Pasuruan. On the east coast of East Java, the famous kupang rice cake is Kupang Keraton. The name of the palace is taken from a regional name or a sub-district name in Pasuruan Regency. For a long time the inhabitants of this area have been searching for and trading mussels. either sold raw or in the form of culinary (lontong kupang).'
    ,'../src/app/img/lontongkupang.jpg',
    [
      new Ingredient('lontong',2),
      new Ingredient('Sate Kupang',5)
    ]),
    new Recipe('Burger','Burger or Hamburger is a kind of Sandwich food. Consisting of round bread slightly flat and halved. In the middle there is a slice of seasoned minced meat, served with slada leaves, sliced ​​tomatoes, cucumber and various sauces.'
  ,'../src/app/img/burger.jpg',
  [
    new Ingredient('meal',1),
    new Ingredient('tomato',3)
  ]),];
  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  getRecipe(index:number){
    return this.recipes[index];
  }

constructor(private slsService: ShoppingListService) { }

}
