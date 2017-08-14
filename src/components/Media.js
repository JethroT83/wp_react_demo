import React, { Component } from 'react';
import {connect} from "react-redux";

//Styles
import '../styles/Style.css';



class media extends Component {
	

	render(){

		if(typeof this.props.media_url !== 'null'){
			return (
					<div className="col-xs-12">
						<img className="media" src={this.props.media_url} alt="This developer failed at life."></img>
					</div>
				)
		}
		
		return
	}
}

export default connect()(media);