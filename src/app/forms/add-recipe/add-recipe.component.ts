import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'add-recipe',
	templateUrl: './add-recipe.component.html',
	styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

	types = ['g', 'ml'];
	ingredients: string[] = [];
	recipeForm: FormGroup;

	private readonly ingredientGroup = {
		name: [null, Validators.required],
		amount: [0, Validators.required],
		type: [this.types[0], Validators.required]
	};

	constructor(private fb: FormBuilder) {
		this.recipeForm = this.fb.group({});
		this.recipeForm.addControl('ingredients', this.fb.array([]));
		this.addIngredientRow();
	}

	addIngredientRow() {
		this.recipeForm.get('ingredients')['push'](this.fb.group(this.ingredientGroup));
	}

	FormToArray() {
		return Array(this.recipeForm.get('ingredients')['length']);
	}

	ngOnInit() {
	}

}
