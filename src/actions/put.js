import axios from "axios";

export function putTitle(id,post_title){
	return (dispatch)=>{

		let url = "/headMotor/wp-content/plugins/wp_react_demo/put.php?id="+id+"&post_title="+post_title;
console.log(url);
		/*axios.get(url)
			.then((result) =>{


				let obj = JSON.parse(result.data.replace('<div id="root"></div>',''));
				console.log(obj);

				dispatch({type:"PUT",payload: obj});
			});*/
	}
}



export function putContent(id,post_content){
	return (dispatch)=>{

		let url = "/headMotor/wp-content/plugins/wp_react_demo/put.php?id="+id+"&post_content="+post_content;

		axios.get(url)
			.then((result) =>{


				let obj = JSON.parse(result.data.replace('<div id="root"></div>',''));
				console.log(obj);

				dispatch({type:"PUT",payload: obj});
			});
	}
}