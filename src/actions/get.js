import axios from "axios";

export function getData(){
	return (dispatch)=>{

		let url = "/headMotor/wp-content/plugins/wp_react_demo/get.php";

		/*axios.get(url)
			.then((result) =>{


				let obj = JSON.parse(result.data.replace('<div id="root"></div>',''));
				console.log(obj);

				dispatch({type:"GET",payload: obj});
			});*/

		//let s = '[{"ID":"67","post_author":"1","post_date":"2017-08-10 00:37:10","post_content":"","post_title":"Auto Draft","meta_value":null},{"ID":"65","post_author":"1","post_date":"2017-08-09 04:42:30","post_content":"[wp_react_demo]","post_title":"react_demo","meta_value":"1"},{"ID":"65","post_author":"1","post_date":"2017-08-09 04:42:30","post_content":"[wp_react_demo]","post_title":"react_demo","meta_value":"1502331164:1"},{"ID":"65","post_author":"1","post_date":"2017-08-09 04:42:30","post_content":"[wp_react_demo]","post_title":"react_demo","meta_value":"template-fullwidth.php"},{"ID":"66","post_author":"1","post_date":"2017-08-09 04:42:16","post_content":"[wp_react_demo]","post_title":"react_demo","meta_value":null}]';
		let s = '[{"ID":"62","post_author":"0","post_date":"2017-04-12 03:18:42","post_content":"","post_title":"17586691_412555542445559_89540584833810432_n-1","media_url":"http:\/\/localhost\/headMotor\/wp-content\/uploads\/2017\/04\/17586691_412555542445559_89540584833810432_n-1.jpg"},{"ID":"62","post_author":"0","post_date":"2017-04-12 03:18:42","post_content":"","post_title":"17586691_412555542445559_89540584833810432_n-1","media_url":"http:\/\/localhost\/headMotor\/wp-content\/uploads\/2017\/04\/17586691_412555542445559_89540584833810432_n-1.jpg"},{"ID":"62","post_author":"0","post_date":"2017-04-12 03:18:42","post_content":"","post_title":"17586691_412555542445559_89540584833810432_n-1","media_url":"http:\/\/localhost\/headMotor\/wp-content\/uploads\/2017\/04\/17586691_412555542445559_89540584833810432_n-1.jpg"},{"ID":"62","post_author":"0","post_date":"2017-04-12 03:18:42","post_content":"","post_title":"17586691_412555542445559_89540584833810432_n-1","media_url":"http:\/\/localhost\/headMotor\/wp-content\/uploads\/2017\/04\/17586691_412555542445559_89540584833810432_n-1.jpg"},{"ID":"62","post_author":"0","post_date":"2017-04-12 03:18:42","post_content":"","post_title":"17586691_412555542445559_89540584833810432_n-1","media_url":"http:\/\/localhost\/headMotor\/wp-content\/uploads\/2017\/04\/17586691_412555542445559_89540584833810432_n-1.jpg"}]';

		let obj = JSON.parse(s);
		dispatch({type:"GET",payload: obj});
	}
}