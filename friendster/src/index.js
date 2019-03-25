import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Friend(props){
	console.log("calling " + props.value);
      return (

        <button className="friend" onClick={props.onClick}>
          {props.value}  
          {props.image}          
        </button>

      );
}


class Board extends React.Component{
	constructor (props){
		super(props);
		this.state = {
			friends: ["sponge_bob","sandy","patrick","squidward", "plankton", "mrkrabs"] // how to read the array from a different file?
		};
	}

	handleClick(e){  // put null to make the friend disappear... but how to navigage to a different component
		//e.preventDefault();
		//console.log(e);
		this.state.friends.splice(e, 1);
		//console.log('this is : ', this.state.friends);
		this.setState(state => ({
			friends: this.state.friends
    }));
	}

	renderFriend(i){
		return(
			<Friend value={i}
							onClick ={() => this.handleClick(i)}
							image = {<img src={require(`../images/${i}.jpg`)}/>}
			/>
		);
	}

	render (){

		return (
			<div className="board-row">
					<div className="banner "> Friendster </div>
					{this.state.friends.map(friend => this.renderFriend(friend)
					)}
			</div>
		)
	}
}


class Friendster extends React.Component{
	render(){
		return(
			<div className="friendster">
				<div className="friendster-friend">
					<Board />
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Friendster />,
	document.getElementById('root')

);