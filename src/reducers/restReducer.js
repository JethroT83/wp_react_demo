

export default (state={
	posts:[]
}, action) => {

	switch(action.type){

		case 'GET':
			state ={...state,
				posts: action.payload
			};
			return state;

		case 'PUT':
			state = {...state,
				put: action.payload}
			return state;

		case 'DELETE':
			state = {...state,
				deletecd : action.payload}
			return state;


		default:
			return state;

	}
}