import axios from "axios";

export function getData(){
	return (dispatch)=>{

		let url = "/wp-content/plugins/wp_react_demo/get.php";

		axios.get(url)
			.then((result) =>{

				let obj = JSON.parse(result.data.replace('<div id="root"></div>',''));
				dispatch({type:"GET",payload: obj});
			});
	}
}