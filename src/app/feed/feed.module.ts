import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '/feed',
		component: FeedComponent
	}
];

@NgModule({
	declarations: [
		FeedComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		FeedComponent
	]
})
export class FeedModule {
}
