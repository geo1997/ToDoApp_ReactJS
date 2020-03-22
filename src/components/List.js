import React, {Component} from 'react';
import ListLayout from './ListLayout'
import ToDoItem from './ToDoItem';


class List extends Component {
    render() {
        return (
            <div>
            <ListLayout/>
            </div>
        );
    }
}

export default List;