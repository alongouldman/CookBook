import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';

@Component({
	selector: 'add-recipe',
	templateUrl: './add-recipe.component.html',
	styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {

	types = ['g', 'ml'];
	ingredients: string[] = [];
	recipeForm: FormGroup;
	uploadedImage;

	private readonly ingredientGroup = {
		name: [null, Validators.required],
		amount: [0, Validators.required],
		type: [this.types[0], Validators.required]
	};

	constructor(private api: ApiService, private fb: FormBuilder) {
		// this.api.getUsers();
		this.recipeForm = this.fb.group({
			instructions: [null, Validators.required]
		});
		this.recipeForm.addControl('ingredients', this.fb.array([]));
		this.addIngredientRow();
	}

	addIngredientRow() {
		this.recipeForm.get('ingredients')['push'](this.fb.group(this.ingredientGroup));
	}

	removeIngredientRow($event: Event, index: number) {
		$event.preventDefault();
		this.recipeForm.get('ingredients')['removeAt'](index);
	}

	onImageUpload() {
		document.getElementById('image-upload').click();
	}

	onGotImage($event: Event) {
		let reader = new FileReader();

		reader.onload = (e) => {
			document.getElementById('add-image').setAttribute('src', e.target['result']);
		};

		reader.readAsDataURL($event.target['files'][0]);
	}

	FormToArray() {
		return Array(this.recipeForm.get('ingredients')['length']);
	}

}
