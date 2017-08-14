import axios from "axios";

export function deleteData(id){
	return (dispatch)=>{

		let url = "/headMotor/wp-content/plugins/wp_react_demo/delete.php?id="+id;

		axios.get(url)
			.then((result) =>{


				let obj = JSON.parse(result.data.replace('<div id="root"></div>',''));
				console.log(obj);

				dispatch({type:"DELETE",payload: obj});
			});

	}
}