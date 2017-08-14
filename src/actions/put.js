import axios from "axios";

//Actions 
import {getData} from "./get";

export function putTitle(id,post_title){
	return (dispatch)=>{

		let url = "/headMotor/wp-content/plugins/wp_react_demo/put.php?id="+id+"&post_title="+post_title;

		axios.get(url)
			.then((result) =>{
				dispatch(getData());
			});
	}
}

export function putContent(id,post_content){
	return (dispatch)=>{

		let url = "/headMotor/wp-content/plugins/wp_react_demo/put.php?id="+id+"&post_content="+post_content;

		axios.get(url)
			.then((result) =>{
				dispatch(getData());
			});
	}
}