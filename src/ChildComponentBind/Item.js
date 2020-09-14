import React, {Component} from react;

class Item extends Component{
   constructor(props){
       super(props);
       this.handleRemove = this.handleRemove.bind(this);
   }
   handleRemove(event){
       this.props.remove(this.props.value);
   }

   render(){
        return (
            // 1 x
            // 2 x
            // 3 x
            <li>
                {this.props.value}
                <button onClick= {this.handleRemove}> X </button>
            </li>
        );
    }


}
export default Item;