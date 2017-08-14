import React, { Component } from 'react';
import {connect} from "react-redux";

//Components
import Title from "./Title";
import Content from "./Content";
import Media from "./Media";


//Styles
import '../styles/Style.css';

import {getData} from '../actions/get.js';
import {deleteData} from '../actions/delete.js';


class app extends Component {
	
	constructor(props){
		super(props);


		this.handleGet=this.handleGet.bind(this);

		this.handleDelete = this.handleDelete.bind(this);
		this.displayPosts = this.displayPosts.bind(this);
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


	displayPosts(){

		return this.props.posts.map((data, i) => {

			return (
					<div className="row" key={i}>
						<Title ID={data.ID} title={data.post_title}></Title>
						<Media media_url={data.media_url}/>
						<Content ID={data.ID} content={data.post_content}></Content>
						<div className='col-xs-12'>
							<button className="btn btn-primary" onClick={()=>this.handleDelete(data.ID)}>Delete Post</button>
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
						<button className="btn btn-primary pull-right" onClick={this.handleGet}>Refresh List</button>
					</div>
				</div>
				);
	}
}

export default connect((store)=>{return {posts:store.restReducer.posts};})(app);