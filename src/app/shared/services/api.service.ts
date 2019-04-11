import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgRedux } from '@angular-redux/store';
import { ACTIONS, Store } from '../../store';

@Injectable()
export class ApiService {

	private state;
	private readonly baseUrl = 'http://localhost:8000';

	constructor(private http: HttpClient, private ngRedux: NgRedux<any>) {
		Store.subscribe(this.ngRedux, null, response => {
			this.state = response;
		});
	}

	getUsers() {
		this.get('/users').subscribe(response => {
			console.log(response);
		})
	}

	addRecipe(recipe) {
		this.post('/add-recipe', recipe).subscribe(response => {
			console.log(response);
		});
	}

	getRecipes() {
		this.get('/recipes').subscribe(response => {
			Store.setState(this.ngRedux, {
				type: ACTIONS.SET,
				payload: response,
				path: Store.PATH.POST.RECIPES
			})
		})
	}

	private post(url: string, body: any): Observable<any> {
		return this.http.post(this.baseUrl + url, body);
	}

	private get(url: string): Observable<any> {
		return this.http.get(this.baseUrl + url);
	}
}
