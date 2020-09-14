import React, {Component} from react;
class CoinFlipper extends Component{
    static defaultProps= {
        coins:[
            {side: "heads", imgSrc: "https://tinyurl.com/rect-coin-heads-jpg"},
            {side: "tails", imgSrc: "https://tinyurl.com/rect-coin-tails-jpg"},
        ]
    };
    constructor(props){
        super(props);
        this.state= {
            currCoin : null,
            nFlips: 0,
            nHead: 0,
            nTail: 0


        };
       
    }
    
    render(){
       
        return(
        <div className="CoinFlippeer">
            <button onClick = {this.addIcon}>ADD ICON</button>
        </div>);
    }

}
export default CoinFlipper;