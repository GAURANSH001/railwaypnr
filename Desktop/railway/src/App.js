import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

 
 
 
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.state.pnr=[];

  }
  

getPNR(){
  let p=this.state.pnr;
  axios.get("https://api.railwayapi.com/v2/pnr-status/pnr/"+p+"/apikey/6iiwocsv52/")
  .then((res)=>{
    console.log(res.data);
  })
}
getvalue(e){
  console.log(e.target.value);
  this.setState({
 pnr: e.target.value   
  })
}

  render(){
    return <div>
      <h1><center>  <b>INDIAN RAILWAYS WELCOME YOU </b></center></h1>
      <input type="text" placeholder="enter your pnr no." onChange={(e)=>{this.getvalue(e)}}></input>
      <button onClick={()=>{this.getPNR()}}>CHECK PNR</button>
    </div>
  }
}


export default App;