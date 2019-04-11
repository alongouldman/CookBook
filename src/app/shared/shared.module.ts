import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ApiService } from './services/api.service';

@NgModule({
	declarations: [
		LoadingSpinnerComponent
	],
	imports: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		ApiService
	],
	exports: [
		CommonModule,
		FlexLayoutModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		LoadingSpinnerComponent
	]
})
export class SharedModule {
}
