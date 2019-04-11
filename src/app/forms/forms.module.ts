import { NgModule } from '@angular/core';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'add-recipe',
		component: AddRecipeComponent
	}
];

@NgModule({
	declarations: [AddRecipeComponent],
	imports: [
		SharedModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		AddRecipeComponent
	]
})
export class FormsModule {
}
