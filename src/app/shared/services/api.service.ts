import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

	private readonly baseUrl = 'http://localhost:8000';

	constructor(private http: HttpClient) {
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

	private post(url: string, body: any): Observable<any> {
		return this.http.post(this.baseUrl + url, body);
	}

	private get(url: string): Observable<any> {
		return this.http.get(this.baseUrl + url);
	}
}
