import React, {Component} from react;

class Todo extends Component{
   constructor(props){
       super(props);
       this.state = {todo : []};
      
   }
  
    render(){
       
        return (
            <div>
               <button>Edit</button>
               <button>Delete</button>
            </div>
        )
    }


}
export default Todo;