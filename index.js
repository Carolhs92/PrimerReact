import React, {Component} from "react";
import ReactDOM from "react-dom";

const name = " Carol";

class Clock extends Component {
  constructor(props){
    super(props);
      this.state = {
        date: new Date(),
        count: 0,
        say: "Hello"
      }
    }

    componentDidMount(){
      this.timeId = setInterval( () => {
        this.setState( (prevState) => ({
              date: new Date(),
              count: prevState.count + 1
            }));
      }, 1000);
    }

    componentWillUnmount(){
      clearInterval(this.timeId);
    }

    render(){
      return (
        <div>
        <h1> Hello Worls! </h1>
        <p> It is {this.state.date.toLocaleTimeString()}</p>
        <p> It is {this.state.count}</p>
        <p> It is {this.state.say + name}</p>
        </div>
      )
    }
}

ReactDOM.render( <Clock/>, document.getElementById("root") );
