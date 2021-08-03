import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  // oikean palvelimen osoite
  private recipesUrl =
    'https://beautiful-hot-springs-46387.herokuapp.com/recipes';
  // http-asetukset
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}
  /* GET: Haetaan kaikki reseptit */
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipesUrl).pipe(
      tap((_) => this.log('fetched recipes')),
      catchError(this.handleError<Recipe[]>('getRecipes', []))
    );
  }
  /* GET: Haetaan yksittäinen resepti id:n perusteella */
  getRecipe(id: number): Observable<Recipe> {
    const url = `${this.recipesUrl}/${id}`;
    return this.http.get<Recipe>(url).pipe(
      tap((_) => this.log(`fetched recipe id=${id}`)),
      catchError(this.handleError<Recipe>(`getRecipe id=${id}`))
    );
  }

  /** PUT: Päivitetään reseptiä -- EI KÄYTÖSSÄ TÄSSÄ SOVELLUKSESSA*/
  /*
  updateRecipe(recipe: Recipe): Observable<any> {
    return this.http.put(this.recipesUrl, recipe, this.httpOptions).pipe(
      tap((_) => this.log(`updated recipe id=${recipe.id}`)),
      catchError(this.handleError<any>('updateRecipe'))
    );
  }
*/

  /** POST: Lisätään uusi resepti serveriin */
  addRecipe(recipe: any): Observable<Recipe> {
    const mytoken = JSON.parse(sessionStorage['accesstoken']);
    recipe.token = mytoken.token;
    return this.http
      .post<Recipe>(this.recipesUrl, recipe, this.httpOptions)
      .pipe(
        tap((newRecipe: Recipe) =>
          this.log(`added recipe w/ id=${newRecipe.id}`)
        ),
        catchError(this.handleError<Recipe>('addRecipe'))
      );
  }

  /** DELETE: Poistetaan resepti id: perusteella */

  delRecipe(id: string): Observable<Recipe> {
    const mytoken = JSON.parse(sessionStorage['accesstoken']);
    const tokenheaders = {
      headers: new HttpHeaders({ 'x-access-token': mytoken.token }),
    };
    const url = `${this.recipesUrl}/${id}`;
    return this.http
      .delete<Recipe>(url, tokenheaders)
      .pipe(catchError(this.handleErr));
  }

  /* GET recipes whose name contains search term */
  searchRecipes(term: string): Observable<Recipe[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Recipe[]>(`${this.recipesUrl}/?name=${term}`).pipe(
      tap((x) =>
        x.length
          ? this.log(`found recipes matching "${term}"`)
          : this.log(`no recipes matching "${term}"`)
      ),
      catchError(this.handleError<Recipe[]>('searchRecipes', []))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RecipeService: ${message}`);
  }

  /* VIRHEENKÄSITTELY */
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // yksinkertaisempi virheenkäsittely
  private handleErr(error: any): Observable<any> {
    console.error('Tapahtui virhe: ', error);
    return error.message || error;
  }
}
