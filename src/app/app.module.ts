import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { SuppliesFormComponent } from './addrecipe/supplies-form/supplies-form.component';
import { RegisterComponent } from './register/register.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/*
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
*/

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RecipesComponent,
    RecipeDetailComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    AddrecipeComponent,
    SuppliesFormComponent,
    RegisterComponent,
    RecipeSearchComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /*
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    */
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
