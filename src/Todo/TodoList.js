import React, {Component} from react;
import Todo from './Todo';
class TodoList extends Component{
   constructor(props){
       super(props);
       this.state = {
           todos : [
               {task: "Eat",
                task : "Drink"
            }
           ]
        };
      
   }
  
    render(){
    const todos = this.state.todos.map( tod => { return <Todo task={tod.task} />})
        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                    <li>Todo 1</li>
                    <li>Todo 2</li>
                </ul>
            </div>
        )
    }


}
export default TodoList;