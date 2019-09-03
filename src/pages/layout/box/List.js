import React, { Component } from 'react';

import Task from './list/Task';
import MenuTab from './list/MenuTab';
import CreateButton from './list/CreateButton';

class List extends Component {
  render() {
    return (
      <div>
        <CreateButton />
        <MenuTab />
        <div className="is-task-list">
          <div>
            <Task />
          </div>
        </div>
      </div>
    )
  }
}

export default List;