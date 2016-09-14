import React,{Component} from 'react';

export default class Dummy extends React.Component{
	render()
	{
		return(
				<div>
				<div>Author :  {this.props.item.author}</div>
				<div>Quote :  {this.props.item.quote}</div> 
				</div>
			  )
	}
}