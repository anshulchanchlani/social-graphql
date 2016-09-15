import ReactDOM from 'react-dom';
import React,{Component} from 'react';
import QuotesContainer from './QuotesContainer';


var dummyItem={
	"author":"Don Corleone",
	"quote": "I will make him an offer he can't refuse."
}
export default class App extends React.Component{
	render(){
		return(
				<QuotesContainer/>
			)
	}
}

ReactDOM.render(<App />,document.getElementById('root'));