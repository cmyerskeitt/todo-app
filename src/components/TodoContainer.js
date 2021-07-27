import React from "react"
import TodoList from "./TodoList"

class TodoContainer extends React.Component {
    state= {
        todos: [
            {
                id: 1,
                title:"Setup development environment",
                complete: true 
            },
            {
                id: 2,
                title:"Develop website and add content",
                complete: false
            },
            {
                id: 3,
                title:"Deploy to live sever",
                complete: false 
            }
        ]
    }

    render(){
        return(
            <div>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }

}
export default TodoContainer