import React,{Component} from 'react';
export default class Quote extends React.Component{

	
	render()
	{	
		
		return(
				<div>
					 <h3> {this.props.quote.quote} </h3>
					<div></div>
					- <i>{this.props.quote.author}</i>
					<hr />
				</div>
			  )
	}
}
