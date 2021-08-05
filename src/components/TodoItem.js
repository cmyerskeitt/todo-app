import React from 'react' 
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
    render(){

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        const { complete, id, title } = this.props.todo 

        return (
        <li className={styles.item}> 
            <input type="checkbox" className={styles.checkbox} checked={complete} onChange={() =>this.props.handleChangeProps(id)}/>
            <span style= {complete ? completedStyle : null}>
            {title}
            </span><br>
            </br>
            <button onClick={() => this.props.deleteTodoProps(id)}>
                Delete
            </button>
            
        </li>
    )}

}
export default TodoItem 

 