import axios from "axios";

//Actions 
import {getData} from "./get";

export function deleteData(id){
	return (dispatch)=>{

		let url = "/wp-content/plugins/wp_react_demo/delete.php?id="+id;

		axios.get(url)
			.then((result) =>{

				//Refresh list after a post has been deleted
				dispatch(getData());
			});

	}
}