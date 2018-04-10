import React, { Component } from 'react'

import Task from './Task'
import AddTask from './AddTask'

export default class TaskList extends Component {
    state = {
        isAddTask: false,
    }

    handleClickAddTask = (e) => {
        if (!this.props.isUserSignIn) return;
            
        this.setState({ isAddTask: true })
    }

    handleClickCancelAddTask = (e) => {
        e.preventDefault();
        
        this.setState({ isAddTask: false })
    }

    render() {
        const { groupTasks, sortableGroupDecorator } = this.props;
        
        const taskElement = groupTasks.map(task => 
            <Task 
                key={task.id} 
                taskID={task.id} 
                taskTitle={task.title}
                taskDescription={task.description}
                taskDueDate={task["due date"]}
                taskDate={task.date}
                {...this.props}
            />
        )

        return (
            <div className="tasks" ref={sortableGroupDecorator}>

                    {taskElement}

                {this.state.isAddTask
                    ? <AddTask 
                        {...this.props}
                        cancelAddTask={this.handleClickCancelAddTask}
                    />
                    : <div onClick={this.handleClickAddTask} className="add-new">Add a task...</div>}

            </div>
        )
    }
}