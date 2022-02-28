import React, { Component } from "react";
import Switch from "react-switch";
import {Card,Row} from "react-bootstrap"

export default class Gamesetting extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }

  handleChange1(checked1) {
    this.setState({ checked1 });
  }

  handleChange2(checked2) {
    this.setState({ checked2 });
  }

  handleChange3(checked3) {
    this.setState({ checked3 });
  }

  render() {
    return (
 <div style={{display:"flex",justifyContent:"center",marginTop:"5rem"}}>
 <Card style={{width:"50rem", height:"30rem",boxShadow: "10px 10px 5px lightgray"}} >
 <h3 style={{textAlign:"center",color:"gray",marginTop:"40px", textShadow:"2px 2px lightgray"}}>Game Setting</h3>
 <hr ></hr>
     <Row style={{margin:"auto"}}>
    
         <div style={{display:"flex",justifyContent:"space-around"}} > <h3>A</h3> <Switch onChange={this.handleChange1} checked={this.state.checked1} /> </div>
         <div style={{display:"flex",justifyContent:"space-around"}}> <h3>B</h3> <Switch onChange={this.handleChange2} checked={this.state.checked2} /> </div>
        <div style={{display:"flex",justifyContent:"space-around"}}> <h3>C</h3> <Switch onChange={this.handleChange3} checked={this.state.checked3} /> </div>
   
    
     </Row>

</Card>

</div>
       
    );
  }
}