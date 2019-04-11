import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { INITIAL_STATE, rootReducer } from './store';
import { LoginModule } from './login/login.module';
import { FormsModule } from './forms/forms.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/services/api.service';

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

		FormsModule
	],
	providers: [ApiService],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private ngRedux: NgRedux<any>) {
		this.ngRedux.configureStore(rootReducer, INITIAL_STATE, []);
	}
}
