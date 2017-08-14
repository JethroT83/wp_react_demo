import React, { Component } from 'react';
import {connect} from "react-redux";

//Styles
import '../styles/Style.css';

import {getData} from '../actions/get.js';
import {putTitle, putContent} from '../actions/put.js';
import {deleteData} from '../actions/delete.js';


class app extends Component {
	
	constructor(props){
		super(props);


		this.handleGet=this.handleGet.bind(this);
		this.handlePutTitle=this.handlePutTitle.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.displayPosts = this.displayPosts.bind(this);
		this.displayTitle = this.displayTitle.bind(this);
	}



	componentWillMount(){
		this.state = {
			titlePut: false,
			contentPut:false
		};

		this.handleGet();
	}

	handleGet(){

		this.props.dispatch(getData());
	}

	handleDelete(id){
		this.props.dispatch(deleteData(id));
	}


	displayImage(media_url){

		if(typeof media_url != 'null'){
			return (
					<div className="col-xs-12">
						<img className="media" src={media_url} alt="This developer failed at life."></img>
					</div>
				)
		}
		
		return
	}


	displayTitle(title){
		if(this.state.titlePut === true){
			console.log("mo shit is working");
			return (
					<input value={title}></input>
				);
		}else{
			return(
					<h2>{title}</h2>
				);
		}
	}

	handlePutTitle(id, title){
console.log("this shit is working!!!"+id);
		this.state.titlePut = true;
		this.displayTitle(title);
		this.props.dispatch(putTitle(id))
	}

	//handlePutContent(id){
		//this.props.dispatch(putTitle(id))
	//}

	displayPosts(){

		return this.props.posts.map((data, i) => {

			return (
					<div className="row" key={i}>
						<div className="col-xs-12 title" onClick={() => this.handlePutTitle(data.ID,data.post_title)}>
							{this.displayTitle(data.post_title)}
						</div>
						{this.displayImage(data.media_url)}						
						<div className="col-xs-12">
							<div>{data.post_content}</div>
						</div>
						<div className='col-xs-12'>
							<button className="btn btn-primary" onClick={this.handleDelete}>Delete Shit</button>
						</div>
					</div>

				)
		});
	}



	render(){
		return(	<div className="outterBorder">
					<header>
						<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
					</header>
					<div className="col-xs-12">
						{this.displayPosts()}
					</div>
					<div className='col-xs-8'>
						<button className="btn btn-primary pull-right" onClick={this.handleGet}>Get Shit</button>
					</div>
				</div>
				);
	}
}

export default connect((store)=>{return {posts:store.restReducer.posts};})(app);