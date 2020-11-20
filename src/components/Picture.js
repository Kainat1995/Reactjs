import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Picture.css'

 

class Picture extends Component{
    render(){
        return(   
        <div className="menu">
            <img src="/images/modern-building.jpg"/>
            <h1 className="heading">WE DESIGN YOUR SPACE</h1>
            <p className="header">All SERVICES ARE AVAILABLE COMPANY</p>
            <button className="button">SEE OUR PRODUCTS</button>
            </div>
            
          )
    }
}
export default Picture; 