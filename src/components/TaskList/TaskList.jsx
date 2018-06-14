import React from 'react'

import Task from '../Task'
import AddTask from '../AddTask'

export default (props) => {
    const { tasks, isAddTask, sortableGroupDecorator, handleAddTask } = props
    
    return (
        <React.Fragment>
        <div className="tasks" ref={sortableGroupDecorator}>
            {tasks.map(task => <Task key={task.id} {...task} />)}
        </div>

        {isAddTask
            ? <AddTask {...props} />
            : <div onClick={handleAddTask} className="add-new">Add a new task...</div>
        }
    </React.Fragment>
    )
    
}