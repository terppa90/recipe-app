import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm: string;
  recipes: Recipe[];

  private recipesUrl =
    'https://beautiful-hot-springs-46387.herokuapp.com/recipes';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Recipe[]>(this.recipesUrl).subscribe((data: Recipe[]) => {
      this.recipes = data;
    });
  }
}
