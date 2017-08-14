import React, { Component } from 'react';
import {connect} from "react-redux";

//Styles
import '../styles/Style.css';

//Actions
import {putTitle} from '../actions/put.js';



class title extends Component {
	
	constructor(props){
		super(props);

		this.handlePutTitle	= this.handlePutTitle.bind(this);
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
	}



	componentWillMount(){
		this.state = {
			titlePut: false,
			title:this.props.title
		};

	}



	handleChangeTitle(evt){

		this.setState({title:evt.target.value});
	}


	handlePutTitle(id, title){

		if(this.state.titlePut === false){
			this.setState({titlePut:true});
		}else{
			this.setState({titlePut:false});
		}

		this.props.dispatch(putTitle(id, this.state.title));
	}


	render(){


		if(this.state.titlePut){
			return (
					<div className="col-xs-12 title">
						<div className="col-xs-6">
							<textarea type="text" cols="50" value={this.state.title} onChange={this.handleChangeTitle}></textarea>
						</div>
						<div className="col-xs-3">
							<button className="btn btn-primary" onClick={() => this.handlePutTitle(this.props.ID,this.props.title)}>Done Edit</button>
						</div>
					</div>)

		}else{
			return (
					<div className="col-xs-12 title" onClick={() => this.handlePutTitle(this.props.ID,this.props.title)}>
						<h2>{this.state.title}</h2>
					</div>
				)
		}

	}

}

export default connect((store)=>{return {};})(title);