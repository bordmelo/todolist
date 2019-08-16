import React, { Component } from 'react';

import Task from './list/Task';

class List extends Component {
    render() {
        return (
            <div className="is-task-list">
                <div>
                    <Task />
                </div>
            </div>
        )
    }
}

export default List;