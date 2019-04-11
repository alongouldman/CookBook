import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule, MatDialogModule,
	MatFormFieldModule, MatIconModule,
	MatInputModule, MatMenuModule, MatPaginatorModule, MatRadioModule,
	MatSelectModule, MatSidenavModule, MatSlideToggleModule, MatSnackBarModule,
	MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { MatSortModule } from '@angular/material/typings/sort';

@NgModule({
	declarations: [],
	imports: [
		BrowserAnimationsModule,
		MatCardModule,
		MatTableModule,
		MatButtonModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatToolbarModule,
		MatSidenavModule,
		MatTooltipModule,
		MatIconModule,
		MatMenuModule,
		MatRadioModule,
		MatTabsModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatDialogModule
	],
	exports: [
		BrowserAnimationsModule,
		MatCardModule,
		MatTableModule,
		MatButtonModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatToolbarModule,
		MatSidenavModule,
		MatTooltipModule,
		MatIconModule,
		MatMenuModule,
		MatRadioModule,
		MatTabsModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatDialogModule
	]
})
export class MaterialModule {
}
