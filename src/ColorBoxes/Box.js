import React, {Component} from react;
import {helper} from './helper'
class Box extends Component{
    static defaultProps={
        allColors : ['purple', 'ble', 'yellow']
    }
    constructor(props){
        super(props);
        this.state= {color: helper(this.props.colors)};
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor(){
        let newcolor;
        do{
            newcolor = choice(this.props.colors);

        }while(newcolor === this.state.color);
        this.setState({color: newcolor});
    }
    handleClick(){
        this.pickColor();
    }
    render(){
        return(
            <div 
               className="box"
               onClick={this.handleClick}
            />
        
        );
    }

}
export default Box;