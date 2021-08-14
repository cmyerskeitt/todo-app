
import React, {useState} from "react"

const InputTodo = props => {
   const [title, setTitle] = useState("")
   
   const onChange = e => {
       setTitle(e.target.value)
   }

   const handleSubmit = e => {
       e.preventDefault()
       if(title.trim()){
           props.addTodoProps(title)
           setTitle("")
       } else {
           alert("Please write item")
       }
   }

   return(
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">Submit</button>
    </form>
  )

}



export default InputTodo










// import React from 'react'

// class InputTodo extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             title: ""
//         }
//     }

//     onChange = e => {
//         this.setState({
//             title: e.target.value 
//         })
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         if(this.state.title.trim()){
//             this.props.addTodoProps(this.state.title)
//             this.setState({
//             title: ""
//             })
//         } else {
//             alert("Please draft a new Todo item!")
//         }
        
//     }


//     render(){
//         return(
//             <form onSubmit={this.handleSubmit} className="form-container">
//                 <input type="text" className="input-text" placeholder= "Add todo..." value={this.state.title} name="title" onChange={this.onChange} />
//                 <button className="input-submit">Submit</button>
//             </form>
//         )
//     }
// }

// export default InputTodo