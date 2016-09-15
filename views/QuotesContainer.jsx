import React,{Component} from 'react';
import Quote from './Quote';
var $ = require('jquery');
var quotes=[];
var keyNumber=0;
export default class QuoteContainer extends React.Component{
		
	constructor(props){
			super(props);
			this.state ={quotes:[]}
		} 
	componentWillMount(){
		console.log("Inside component will mount")
		var that = this;
		var query = 'query {quotes{quote,author}}'
		var url = '/';
		$.ajax({
			method:"POST",
			url:url,
			contentType:"application/graphql",
			data:query,
		}).done(function(response){
			
			quotes =  response.data.quotes.map(function(quote){
							console.log(quote);
						return	(<Quote key={keyNumber++} quote={quote}/>)
								});
			that.setState({quotes:quotes})
			});
	

	}	

	render(){
			
		return(
				<div>
				{this.state.quotes}
				</div>
			)
	}
			 
		
}