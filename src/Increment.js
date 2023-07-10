import React from "react";
import './App.css';

class Increment extends React.Component {

constructor(props){
    super(props);
    this.state = {n:0};
    this.Increase = this.Increase.bind(this);
}

Increase(e){
    console.log(e);
    setInterval(() => {
        this.setState((state,props)=>({ n: state.n + 1}));
    }, 1000);
    
       
    
}

render(){
  return  (<div>
                Valeur : {this.state.n} <button onClick={this.Increase}>Increase</button>
            </div>);
}




}
export default Increment;