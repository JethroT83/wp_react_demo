import React, { Component } from 'react';
import {connect} from "react-redux";

//Styles
import '../styles/Style.css';

import {putContent} from '../actions/put.js';


class content extends Component {
	
	constructor(props){
		super(props);

		this.handlePutContent	= this.handlePutContent.bind(this);
		this.handleChangeContent = this.handleChangeContent.bind(this);
	}

	componentWillMount(){
		this.state = {
			contentPut: false,
			content:this.props.content
		};

	}

	handleChangeContent(evt){
		this.setState({content:evt.target.value});
	}


	handlePutContent(id, content){

		if(this.state.contentPut === false){
			this.setState({contentPut:true,
							content:this.props.content});
		}else{
			this.props.dispatch(putContent(id, this.state.content));
			this.setState({contentPut:false,
							content:this.props.content});
		}
	}



	render(){
		if(this.state.contentPut){
			return (
					<div className="col-xs-12 contentArea">
						<div className="col-xs-6">
							<textarea type="text" cols="50" rows="5" value={this.state.content} onChange={this.handleChangeContent}></textarea>
						</div>
						<div className="col-xs-3">
							<button className="btn btn-primary" onClick={() => this.handlePutContent(this.props.ID,this.props.content)}>Done Edit</button>
						</div>
					</div>)

		}else{
			return (
					<div className="col-xs-12 contentArea" onClick={() => this.handlePutContent(this.props.ID,this.props.content)}>
						<h2 >{this.props.content}</h2>
					</div>
				)
		}

	}


}

export default connect((store)=>{return {};})(content);