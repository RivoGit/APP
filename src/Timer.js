import React from 'react';
import './App.css';

/*function Timer(props){
//const time = new Date().toLocaleTimeString();
    return (
    <div>
      <h1>{props.date.toLocaleTimeString()} Bonjour  {props.name} </h1>
      
    </div>
    );
    //setInterval(Timer, 1000);
}
export default Timer;*/

class Timer extends React.Component {

  constructor (props) {
  super(props);
  this.state = {date:new Date(), name: 'Rivo'};


}

componentDidMount() {
  this.kapoka = setInterval(
    () => this.tick(),
    1000
  );
}

componentWillUnmount() {
  clearInterval(this.kapoka);
}

tick() {
  this.setState({
    date: new Date()
  });
}

render (){
  return (
    <div>
      <h1>{this.state.date.toLocaleTimeString()} Bonjour  {this.state.name} </h1>
      
    </div>
    );
}

}

export default Timer;