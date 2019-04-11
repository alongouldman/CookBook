import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PostCardComponent } from './post-card/post-card.component';

const routes: Routes = [
	{
		path: 'feed',
		component: FeedComponent
	}
];

@NgModule({
	declarations: [
		FeedComponent,
		PostCardComponent
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
