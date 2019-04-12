import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { NgRedux } from '@angular-redux/store';
import { Store } from '../store';

@Component({
	selector: 'feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

	posts: any[];
	loaded: boolean = false;

	constructor(private api: ApiService, private ngRedux: NgRedux<any>) {
		this.api.getRecipes();
		Store.subscribe(this.ngRedux, Store.PATH.POST.RECIPES, response => {
			if(response) {
				this.posts = response;
				this.loaded = true;
			}
		});
	}

	ngOnInit() {
	}

}
