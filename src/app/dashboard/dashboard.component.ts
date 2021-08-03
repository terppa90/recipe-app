import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}
  // Haetaan reseptit sovelluksen käynnistyksen yhteydessä
  ngOnInit() {
    this.getRecipes();
  }
  // slicella määritetään kuinka monta reseptiä näkyy Etusivulla. Nyt näkyy 6 kpl.
  getRecipes(): void {
    this.recipeService
      .getRecipes()
      .subscribe((recipes) => (this.recipes = recipes.slice(0, 6)));
  }
}
