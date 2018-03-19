import React from 'react'
// import Dragula from 'react-dragula';
// import 'dragula/dist/dragula.css'
import Sortable from 'sortablejs';

import Task from './Task'
import AddTask from './AddTask'

export default class TaskList extends React.Component {
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

    // sortable = (componentBackingInstance) => {
    //     if (componentBackingInstance) {
    //         let options = {
    //             mirrorContainer: componentBackingInstance
    //         };
    //         Dragula([componentBackingInstance], options);
    //     }
    // };

    sortable = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {
                animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
                // handle: ".title", // Restricts sort start click/touch to the specified element
                // draggable: ".groups__item", // Specifies which items inside the element should be sortable
                onUpdate: function (evt/**Event*/){
                   var item = evt.item; // the current dragged HTMLElement
                }
            };
            Sortable.create(componentBackingInstance, options);
        }
    }

    componentDidMount() {
        // var drake = dragula({
        //     copy: true
        // });
        // drake.containers.push(this.props.data);
        console.log(11, this.props.groupTasks)
    }

    componentWillReceiveProps() {

    }

    render() {
        const {groupTasks} = this.props;
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
            <div className="tasks">

                    {taskElement}

                {this.state.isAddTask ? 
                    <AddTask 
                        {...this.props}
                        cancelAddTask={this.handleClickCancelAddTask}
                    />
                    :
                    <div onClick={this.handleClickAddTask} className="add-new">Add a task...</div>
                }

            </div>
        )
    }
}