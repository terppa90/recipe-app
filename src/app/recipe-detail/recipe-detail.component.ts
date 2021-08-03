import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getRecipe();
  }
  // Reseptin haku
  getRecipe(): void {
    // id tulee reitistä merkkijonona, pitää muuntaa numeroksi, voidaan tehdä + operaattorilla
    const id = +this.route.snapshot.paramMap.get('id');
    //const id = +this.route.snapshot.paramMap.get('id');
    //const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService
      .getRecipe(id)
      .subscribe((recipe) => (this.recipe = recipe));
  }
  // Takaisin navigointi sivulla
  goBack(): void {
    this.location.back();
  }
}
