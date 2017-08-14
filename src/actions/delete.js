import axios from "axios";

//Actions 
import {getData} from "./get";

export function deleteData(id){
	return (dispatch)=>{

		let url = "/headMotor/wp-content/plugins/wp_react_demo/delete.php?id="+id;

		axios.get(url)
			.then((result) =>{


				let obj = JSON.parse(result.data.replace('<div id="root"></div>',''));
				console.log(obj);

				dispatch({type:"DELETE",payload: obj});

				//Refresh list after a post has been deleted
				dispatch(getData());
			});

	}
}