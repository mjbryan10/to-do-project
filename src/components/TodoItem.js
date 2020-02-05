import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <label>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>    
                </label>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired

}

//STYLES
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    boxShadow: '-5px 10px 24px -9px rgba(0,0,0,0.75)',
    float: 'right'
}

export default TodoItem
