import React from "react"
import TodoItem from "./TodoItem"

class TodoList extends React.Component{
 

    render(){
        const list = this.props.todos.map(todo => (<TodoItem key={todo.id} todo={todo}/> ))
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default TodoList