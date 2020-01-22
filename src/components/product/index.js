import React,{Component} from 'react'
import {connect} from 'react-redux';

class Product extends Component {
   constructor(){
       super();
       this.state={}
   }
   render(){
       const {product} = this.props;
       return (<div>
            <h1>{product.title}</h1>
            <ul>
                {product.productData && product.productData.map((item,index)=>{
                return <li key={index}><a href={`/#${item.id}`}>{item.name}</a></li>
                })}
            </ul>
       </div>)
   }
}

const mapStateToProps = state =>{
    return {product: state.product}
}

const mapDispatchToProps = dispatch =>{

}

export default connect(mapStateToProps, mapDispatchToProps)(Product);