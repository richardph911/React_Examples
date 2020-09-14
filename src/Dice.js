import React, {Component} from react;
class Dice extends Component{
    static defaultProps= {
        options : ["angry", "choe", "duy", "dung"]
    };
    constructor(props){
        super(props);
        this.state= {icons:[]};
        this.addIcon = this.addIcon.bind(this);
    }
    addIcon(){
        let idx = Math.floor(Math.random() * this.props.options.length);
        let newIcon = this.props.options[idx];
        this.setState({icons: [...this.state.icons, newIcon]});

    }
    render(){
        const icons =  this.state.icons.map(it => <i className={`fas fa-${it}`}></i>)
        return(<div>
            <button onClick = {this.addIcon}>ADD ICON</button>
        </div>);
    }

}
export default Dice;