import React from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo"

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
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
              if (todo.id === id) {
                return {
                    ...todo,
                    complete: !todo.complete,
                    }   
                }
                return todo
            }),
        }))
    }

    deleteTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !==id
                })
            ]
        })
        console.log("deleted", id)
    }

    render(){
        return(
            <div>
                <Header/>
                <InputTodo/>
                <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.deleteTodo} />
            </div>
        )
    }

}
export default TodoContainer