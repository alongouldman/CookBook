import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'post-card',
	templateUrl: './post-card.component.html',
	styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

	@Input() post: any;
	@Output() likeEvent = new EventEmitter();

	constructor() {
	}

	ngOnInit() {
		this.likeEvent.emit({})
	}

}
