import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is description of recipe', "https://source.unsplash.com/user/c_v_r/100x100"), new Recipe('An another recipe', 'This is the second description of recipe', "https://source.unsplash.com/user/c_v_r/100x100")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(fromRecipeElHTML: Recipe) {
    this.recipeWasSelected.emit(fromRecipeElHTML)
  }

}
