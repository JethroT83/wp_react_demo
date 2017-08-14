import axios from "axios";

export function putTitle(id,post_title){
	return (dispatch)=>{

		let url = "/headMotor/wp-content/plugins/wp_react_demo/put.php?id="+id+"&post_title="+post_title;

		/*axios.get(url)
			.then((result) =>{


				let obj = JSON.parse(result.data.replace('<div id="root"></div>',''));
				console.log(obj);

				dispatch({type:"PUT",payload: obj});
			});*/

		let s = '[{"ID":"67","post_author":"1","post_date":"2017-08-10 00:37:10","post_content":"","post_title":"Auto Draft","meta_value":null},{"ID":"65","post_author":"1","post_date":"2017-08-09 04:42:30","post_content":"[wp_react_demo]","post_title":"react_demo","meta_value":"1"},{"ID":"65","post_author":"1","post_date":"2017-08-09 04:42:30","post_content":"[wp_react_demo]","post_title":"react_demo","meta_value":"1502331164:1"},{"ID":"65","post_author":"1","post_date":"2017-08-09 04:42:30","post_content":"[wp_react_demo]","post_title":"react_demo","meta_value":"template-fullwidth.php"},{"ID":"66","post_author":"1","post_date":"2017-08-09 04:42:16","post_content":"[wp_react_demo]","post_title":"react_demo","meta_value":null}]';
		let obj = JSON.parse(s);
		dispatch({type:"PUT",payload: obj});
	}
}



export function putContent(id,post_content){
	return (dispatch)=>{

		let url = "/headMotor/wp-content/plugins/wp_react_demo/put.php?id="+id+"&post_content="+post_content;

		/*axios.get(url)
			.then((result) =>{


				let obj = JSON.parse(result.data.replace('<div id="root"></div>',''));
				console.log(obj);

				dispatch({type:"PUT",payload: obj});
			});*/

		let s = '[{"ID":"67","post_author":"1","post_date":"2017-08-10 00:37:10","post_content":"","post_title":"Auto Draft","meta_value":null},{"ID":"65","post_author":"1","post_date":"2017-08-09 04:42:30","post_content":"[wp_react_demo]","post_title":"react_demo","meta_value":"1"},{"ID":"65","post_author":"1","post_date":"2017-08-09 04:42:30","post_content":"[wp_react_demo]","post_title":"react_demo","meta_value":"1502331164:1"},{"ID":"65","post_author":"1","post_date":"2017-08-09 04:42:30","post_content":"[wp_react_demo]","post_title":"react_demo","meta_value":"template-fullwidth.php"},{"ID":"66","post_author":"1","post_date":"2017-08-09 04:42:16","post_content":"[wp_react_demo]","post_title":"react_demo","meta_value":null}]';
		let obj = JSON.parse(s);
		dispatch({type:"GET",payload: obj});
	}
}