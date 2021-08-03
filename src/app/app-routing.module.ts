import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// REITIT, [AuthGuard]:lla on suojattu reitit joihin ei pääse ellei ole kirjautunut
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // oletusreitti tai uudelleenohjaus palvelimen juuresta
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'detail/:id', component: RecipeDetailComponent }, // reitti yksittäiseen reseptiin
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard] }, // reitti komponenttiin joka näyttää kaikki reseptit
  { path: 'login', component: LoginComponent }, // reitti kirjautumiskomponenttiin
  { path: 'register', component: RegisterComponent }, // reitti rekisteröitymiskomponenttiin
  {
    path: 'addrecipe',
    component: AddrecipeComponent,
    canActivate: [AuthGuard],
  }, // reitti komponenttiin josta voi lisätä reseptejä
  { path: '**', component: PageNotFoundComponent }, // Sivustoa ei löydy -ilmoitus kun virheellinen url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
