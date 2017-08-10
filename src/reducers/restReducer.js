import DefaultBackground from '../assets/default.jpg';

export default (state={}, action) => {

	switch(action.type){

		case 'GET':
			state ={...state,
				get: action.payload
			};
			return state;

		case 'POST':
			state = {...state,
				post: action.payload}
			return state;

		case 'PUT':
			state = {...state,
				put: action.payload}
			return state;

		case 'DELETE':
			state = {...state,
				delete: action.payload}
			return state;


		default:
			return state;

	}
}