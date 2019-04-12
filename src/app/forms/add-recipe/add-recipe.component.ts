import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
	selector: 'add-recipe',
	templateUrl: './add-recipe.component.html',
	styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {

	@ViewChild('chipInput') chipInput: ElementRef<HTMLInputElement>;
	@ViewChild('auto') matAutocomplete: MatAutocomplete;

	separatorKeysCodes: number[] = [ENTER, COMMA];
	units = ['g', 'ml', 'unit', 'spoon', 'cup','teaspoon'];
	allTags: string[] = ['Vegan', 'Kosher', 'Non Dairy'];
	filteredTags: string[] = [...this.allTags];
	tags: string[] = [];
	ingredients: string[] = [];
	recipeForm: FormGroup;
	uploadedImage;

	private readonly ingredientGroup = {
		name: [null, Validators.required],
		amount: [0, Validators.required],
		unit: [this.units[0], Validators.required]
	};

	constructor(private api: ApiService, private fb: FormBuilder) {
		this.api.getUsers();
		this.recipeForm = this.fb.group({
			title: [null, Validators.required],
			instructions: [null, Validators.required],
			overall_time: [0, Validators.required],
			tags: [null]
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
			this.uploadedImage = e.target['result'];
			document.getElementById('add-image').setAttribute('src', e.target['result']);
		};

		reader.readAsDataURL($event.target['files'][0]);
	}

	FormToArray() {
		return Array(this.recipeForm.get('ingredients')['length']);
	}

	add(event: MatChipInputEvent): void {

		if(!this.matAutocomplete.isOpen) {
			const input = event.input;
			const value = event.value;

			if((value || '').trim()) {
				this.tags.push(value.trim());
			}

			// Reset the input value
			if(input) {
				input.value = '';
			}

			this.filteredTags = this._filter();
			this.recipeForm.get('tags').setValue(null);
		}
	}

	remove(chip: string): void {
		const index = this.tags.indexOf(chip);

		if(index >= 0) {
			this.tags.splice(index, 1);
		}
	}

	selected(event: MatAutocompleteSelectedEvent): void {
		this.tags.push(event.option.viewValue);
		this.chipInput.nativeElement.value = '';
		this.filteredTags = this._filter();
		this.recipeForm.get('tags').setValue(null);
	}

	onSave() {
		if(this.recipeForm.invalid) {
			return;
		}
		const value = this.recipeForm.value;
		value.tags = this.tags;
		value.image = this.uploadedImage;
		this.api.addRecipe(this.recipeForm.value);
	}

	private _filter(): string[] {
		return this.allTags.filter(chip => !this.tags.includes(chip));
	}
}
