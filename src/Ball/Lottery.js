import React, {Component} from react;
class Lottery extends Component{
    static defaultProps= {
        title: "Lotto",
        numBalls: 6,
        maxNum: 40
    };
    constructor(props){
        super(props);
         this.state= {numArrays : Array.from({length: this.props.numBalls})};  //from(length: 6)
         this.handleClick = this.handleClick.bind(this);
    }
   generate(){
        this.setState(
                //callback function
                currentState => (
                    { nums: currentState.numArrays.map( n => Math.floor(Math.random() * this.props.maxNum) + 1 ) } //[1,3,5,40,5,3,5]
                )
       );

   }
   handleClick(){
       this.generate();
   }
    render(){
        
        return(
        <section className="Lottery">
            <h1>{this.props.title}</h1>
            <div>
                {   //<BallComponent num={4} />
                    this.state.numArrays.map( p => (<BallComponent numArrays={p} />))
                }
            </div>
            <button onClick = {this.handleClick}>GENERATE</button>
        </section>);
    }

}
export default Lottery;