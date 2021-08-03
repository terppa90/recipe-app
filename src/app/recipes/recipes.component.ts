import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipeService: RecipeService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getRecipes();
  }
  // Hakee reseptit
  getRecipes(): void {
    this.recipeService
      .getRecipes()
      .subscribe((recipes) => (this.recipes = recipes));
  }

  // poistaa reseptin
  delete(recipe: Recipe): void {
    this.recipes = this.recipes.filter((h) => h !== recipe);
    this.recipeService.delRecipe(String(recipe.id)).subscribe();
  }
}
