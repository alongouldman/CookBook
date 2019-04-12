import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

enum tags {
	NON_DAIRY = 'non dairy',
	KOSHER = 'kosher',
	VEGAN = 'vegan'
}

@Component({
	selector: 'post-card',
	templateUrl: './post-card.component.html',
	styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

	@Input() recipe: any;
	@Output() likeEvent = new EventEmitter();

	readonly tags = tags;

	constructor() {
	}

	ngOnInit() {
		this.lowercaseTags();
	}

	private lowercaseTags() {
		if(this.recipe.tags) {
			for(let i = 0; i < this.recipe.tags.length; i++) {
				this.recipe.tags[i] = this.recipe.tags[i].toLowerCase();
			}
		}
	}

}
