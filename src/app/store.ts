import { get, isEmpty } from 'lodash';
import { NgRedux } from '@angular-redux/store';
import { Subscription } from 'rxjs';

export const ACTIONS = {
	SET: 'set',
	LOGOUT: 'logout'
};

export interface Action {
	type: string,
	path: string,
	payload: any
}

export const INITIAL_STATE = {
	post: {
		recipes: null
	}
};

export class Store {

	static readonly PATH = {
		POST: {
			RECIPES: 'post.recipes'
		}
	};

	static setState(ngRedux: NgRedux<any>, action: Action) {
		ngRedux.dispatch(action);
	}

	static subscribe(ngRedux: NgRedux<any>, path: string, callback): Subscription {
		if(isEmpty(path)) {
			return ngRedux.select(state => state).subscribe(callback);
		}
		return ngRedux.select(state => get(state, path)).subscribe(callback);
	}
}


export function rootReducer(lastState, action: Action) {
	switch(action.type) {
		case ACTIONS.SET:
			let newState = {...lastState},
				paths = action.path.split('.');

			let nestedState = newState;
			paths.forEach((path, index) => {
				if(index === paths.length - 1) {
					nestedState[path] = action.payload;
					return;
				}

				nestedState[path] = {...nestedState[path]};
				nestedState = nestedState[path];
			});

			return newState;

		case ACTIONS.LOGOUT:
			return INITIAL_STATE;
	}

	return lastState;
}
