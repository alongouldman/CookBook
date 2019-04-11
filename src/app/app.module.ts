import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { INITIAL_STATE, rootReducer } from './store';
import { LoginModule } from './login/login.module';
import { FormsModule } from './forms/forms.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/services/api.service';
import { AppContainerModule } from './app-container/app-container.module';
import { FeedModule } from './feed/feed.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '**',
		redirectTo: '/feed',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgReduxModule,
		HttpClientModule,
		LoginModule,
		AppContainerModule,
		FeedModule,
		FormsModule,
		RouterModule.forRoot(routes)
	],
	providers: [ApiService],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private ngRedux: NgRedux<any>) {
		this.ngRedux.configureStore(rootReducer, INITIAL_STATE, []);
	}
}
