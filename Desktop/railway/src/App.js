import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Button } from 'antd';
import 'antd/dist/antd.css'; 

 
 
 
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.state.pnr=[];
    this.state.det=[];
    this.state.item="";
  }
  

getPNR(){
  let p=this.state.pnr;
  let d=this.state.det;
  let i=this.state.item;
  
  axios.get("https://api.railwayapi.com/v2/pnr-status/pnr/"+p+"/apikey/6iiwocsv52/")
  .then((res)=>{
    console.log(res.data);
    let obj={ts:res.data.to_station.name}
    d.push(obj);
    console.log(d);
    this.setState({
      det:d
    })    
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
      <div class="align">
      
      <input type="text" placeholder="enter your pnr no." onChange={(e)=>{this.getvalue(e)}}></input>
      <Button type="primary"  icon="search" onClick={()=>{this.getPNR()}}>CHECK PNR</Button>
      <div>
        <h1>{this.getPNR}</h1>
      </div>
      </div>
    </div>
  }
}


export default App;