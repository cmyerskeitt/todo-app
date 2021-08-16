import React, {useState, useEffect} from "react"
import Header from "../components/Header"
import InputTodo from "./InputTodo"
import TodosList from "../components/TodoList"
import { v4 as uuidv4} from "uuid"
import "./TodoApp.css"

const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos())

    useEffect(() => {
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
        }, [todos])
    

    function getInitialTodos() {
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || [] 
    }

    const handleChange = id => {
        setTodos(prevState => 
            prevState.map(todo => {
                if (todo.id === id){
                    return {
                        ...todo, 
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )
    }

    const delTodo = id => {
        setTodos([
          ...todos.filter(todo => {
            return todo.id !== id
          }),
        ])
      }
    
      const addTodoItem = title => {
        const newTodo = {
          id: uuidv4(),
          title: title,
          completed: false,
        }
        setTodos([...todos, newTodo])
      }
    
      const setUpdate = (updatedTitle, id) => {
        setTodos(
          todos.map(todo => {
            if (todo.id === id) {
              todo.title = updatedTitle
            }
            return todo
          })
        )
      }

   
      return (
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={addTodoItem} />
            <TodosList
              todos={todos}
              handleChangeProps={handleChange}
              deleteTodoProps={delTodo}
              setUpdate={setUpdate}
            />
          </div>
        </div>
      )
}
    
export default TodoContainer









// class TodoContainer extends React.Component {
//     state = {
//         todos: []
//     }

//     componentDidMount(){
//         const temp = localStorage.getItem("todos")
//         const loadedTodos = JSON.parse(temp)
//             if (loadedTodos) {
//                 this.setState({
//                     todos: loadedTodos
//             })
//         }
//     }

  
//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.todos !== this.state.todos) {
//           const temp = JSON.stringify(this.state.todos)
//           localStorage.setItem("todos", temp)
//         }
//     }

//     handleChange = (id) => {
//         this.setState(prevState => ({
//             todos: prevState.todos.map(todo => {
//               if (todo.id === id) {
//                 return {
//                     ...todo,
//                     complete: !todo.complete,
//                     }   
//                 }
//                 return todo
//             }),
//         }))
//     }

//     deleteTodo = id => {
//         this.setState({
//             todos: [
//                 ...this.state.todos.filter(todo => {
//                     return todo.id !==id
//                 })
//             ]
//         })
//         console.log("deleted", id)
//     }

//     addTodoItem = title => {
//         const newTodo ={
//             id: uuidv4(),
//             title: title,
//             complete: false 
//         }
//         this.setState({
//             todos: [...this.state.todos, newTodo]
//         })
//     }

//     setUpdate = (updatedTitle, id) => {
//         this.setState({
//             todos: this.state.todos.map(todo => {
//                 if (todo.id === id){
//                     todo.title = updatedTitle 
//                 }
//                 return todo
//             })
//         })
//       }

//     render(){
//         return(
//             <div className="container">
//                 <div className="inner">
//                     <Header/>
//                     <InputTodo addTodoProps ={this.addTodoItem}/>
//                     <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.deleteTodo} setUpdate={this.setUpdate} />
//                 </div>
//             </div>
//         )
//     }

// }
// export default TodoContainer