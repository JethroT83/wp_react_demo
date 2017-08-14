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
			content:this.props.title
		};

	}



	handleChangeContent(evt){

		this.setState({content:evt.target.value});
	}


	handlePutContent(id, content){

		if(this.state.titlePut === false){
			this.setState({contentPut:true});
		}else{
			this.setState({contentPut:false});
		}

		this.props.dispatch(putContent(id, this.state.content));
	}



	render(){
		if(this.state.contentPut){
			return (
					<div className="col-xs-12 content">
						<div className="col-xs-6">
							<textarea type="text" cols="50" value={this.state.content} onChange={this.handleChangeContent}></textarea>
						</div>
						<div className="col-xs-3">
							<button className="btn btn-primary" onClick={() => this.handlePutContent(this.props.ID,this.props.content)}>Done Edit</button>
						</div>
					</div>)

		}else{
			return (
					<div className="col-xs-12 content" onClick={() => this.handlePutContent(this.props.ID,this.props.content)}>
						<h2>{this.state.content}</h2>
					</div>
				)
		}

	}


}

export default connect((store)=>{return {};})(content);