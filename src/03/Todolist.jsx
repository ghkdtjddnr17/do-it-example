import React, {Component} from 'react';

class Todolist extends Component {
    render() {
        const todoList=[
            {name:'빨래하기', finish:false},
            {name:'청소하기', finish:true},
        ]
        return (
            <div>
                {todoList.map((todo)=> <div key={todo.name}>{todo.name}</div>)}
            </div>
        );
    }
}

export default Todolist;