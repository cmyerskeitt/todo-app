import React from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4} from "uuid"
import "./TodoApp.css"

class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: uuidv4(),
                title:"Setup development environment",
                complete: true 
            },
            {
                id: uuidv4(),
                title:"Develop website and add content",
                complete: false
            },
            {
                id: uuidv4(),
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

    addTodoItem = title => {
        const newTodo ={
            id: uuidv4(),
            title: title,
            complete: false 
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render(){
        return(
            <div className="container">
                <div className="inner">
                    <Header/>
                    <InputTodo addTodoProps ={this.addTodoItem}/>
                    <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.deleteTodo} />
                </div>
            </div>
        )
    }

}
export default TodoContainer