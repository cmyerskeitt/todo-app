import React from "react"
import TodoList from "./TodoList"
import Header from "./Header"

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

    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo =>{
                if (todo.id === id){
                    todo.complete =!todo.complete 
                }
                return todo
            })
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <TodoList todos={this.state.todos} handleChangeProps={this.handleChange}/>
            </div>
        )
    }

}
export default TodoContainer