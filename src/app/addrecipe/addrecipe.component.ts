import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { FormService } from '../form.service';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { SuppliesFormComponent } from './supplies-form/supplies-form.component';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css'],
})
export class AddrecipeComponent implements OnInit {
  public myForm: FormGroup;

  get suppliesArray(): FormArray {
    return this.myForm?.get('supplies') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // Käytetään get:iä että saadaan templaattiin selkeempää koodia

  get supplies() {
    return this.myForm.get('supplies') as FormArray;
  }

  addSupplies(): FormGroup {
    return new FormGroup({
      name: new FormControl(),
      quantity: new FormControl(),
    });
  }
  // "Generoidaan" uusi lomake
  ngOnInit(): void {
    this.generateMyForm();
  }

  public generateMyForm(): void {
    this.myForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      author: new FormControl('', Validators.required),
      supplies: new FormArray([]),
      recipe: new FormControl('', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });
  }
  // Lisätään uusi ainesosa/raaka-aine
  public addRecipeSupplyItem(): void {
    this.suppliesArray.push(SuppliesFormComponent.addRecipeSupplyItem());
  }
  // Poistetaan ainesosa/raaka-aine
  public deleteSupply(index: number): void {
    this.suppliesArray.removeAt(index);
  }
  // Lomakkeen lähetysmetodi
  public submitRecipeForm(): void {
    console.log(this.myForm.value);
    SuppliesFormComponent.addRecipeSupplyItem();
    this.formService.FormAddRecipe(this.myForm.value).subscribe(
      (response) => {
        console.log('success', response), this.router.navigate(['/recipes']);
      },
      (error) => console.error('Error', error)
    );
  }
}
