import React,{Component} from 'react'

class MenuBar extends Component {
   constructor(){
       super();
       this.state={}
   }
   render(){
       return ( <div className="topnav">
       <a className="active" href="home">Home</a>
       <a href="product">Product</a>
       <a href="about-us">About US</a>
       <a href="contact-us">Contact US</a>
   </div>)
   }
}

export default MenuBar;