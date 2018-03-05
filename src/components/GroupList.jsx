import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

// import groups from '../fixtures'
// import controller from '../controller'
import Group from './Group'
import AddGroup from './AddGroup'

class GroupList extends React.Component {
    state = {
        data: [],
        currentIDGroup: null,
        currentIndexGroup: null,
        currentTitleGroup: null,

        currentIDTask: null,
        currentIndexTask: null,
        currentTitleTask: null,
        currentDescriptionTask: '',

        isAddGroup: false,
    }

    handleClickGroup = (id) => {
        if (id === this.state.currentIDGroup) return
        
        console.log('handle click id group', id)
        const {currentIndexGroup} = this.findIndex(id);
        const currentTitleGroup = this.state.data[currentIndexGroup].title;

        this.setState({
            currentIDGroup: id,
            currentIndexGroup,
            currentTitleGroup
        })
    }

    handleClickTask = (idTask, idGroup) => {
        if (idTask === this.state.currentIDTask) return
        
        console.log('handle click id task', idTask)
        const {currentIndexTask, currentIndexGroup} = this.findIndex(idGroup, idTask);
        const currentTitleTask = this.state.data[currentIndexGroup].tasks[currentIndexTask].title;
        console.log('task title', currentIndexTask, currentTitleTask)

        this.setState({
            currentIDTask: idTask,
            currentIndexTask,
            currentTitleTask
        })
    }


    handleClickAddGroup = (e) => {
        if (!this.props.isUserSignIn) return;
        
        this.setState({ isAddGroup: true })
    };
    

    handleClickCancelAddGroup = () => {
        this.setState({ isAddGroup: false })
    }
    
    findIndex = (idGroup, idTask) => {
        let currentIndexGroup;
        let currentIndexTask;
        
        this.state.data.forEach((item, index) => {
            if (item.id === idGroup) {
                currentIndexGroup = index
                
                item.tasks.forEach((task, index) => {
                    if (task.id === idTask) {
                        currentIndexTask = index;
                    }
                })
            }
        });
        
        return {currentIndexGroup, currentIndexTask};
    }

    onChangeTitleGroup = (e) => {
        console.log('onChangeGroup', e.target.value)
        this.setState({currentTitleGroup: e.target.value})
    }

    createGroup = (item) => {
        console.log('createGroup', item)
        this.state.data.push(item);

        this.setState({
            data: this.state.data,
            isAddGroup: false,
        })

    }

    updateGroup = (title) => {
        console.log('update', title)
        const groupClone = this.state.data[this.state.currentIndexGroup];
        groupClone.title = title;
        console.log('update', groupClone)
        this.state.data.splice(this.state.currentIndexGroup, 1, groupClone);
        this.setState({data: this.state.data})
    }

    deleteGroup = () => {
        console.log('deleteGroup', this.state.currentIDGroup);

        this.state.data.splice(this.state.currentIndexGroup, 1);
        this.setState({ data: this.state.data })
    }

    createTask = (item) => {
        console.log('createTask', item, this.state.currentIndexGroup)
        this.state.data[this.state.currentIndexGroup].tasks.push(item);

        this.setState({
            data: this.state.data,
        })

        console.log('this.state.data', this.state.data)
    }

    updateTask = (title, description) => {
        console.log('update', title, description)
        const taskClone = this.state.data[this.state.currentIndexGroup].tasks[this.state.currentIndexTask];
        taskClone.title = title;
        taskClone.description = description;
        console.log('update', taskClone)
        this.state.data[this.state.currentIndexGroup].tasks.splice(this.state.currentIndexTask, 1, taskClone)
        this.setState({data: this.state.data})
    }

    deleteTask = () => {
        this.state.data[this.state.currentIndexGroup].tasks.splice(this.state.currentIndexTask, 1);

        this.setState({ data: this.state.data })
    }

    onChangeTitleTask = (e) => {
        console.log('onChangeGroup', e.target.value)
        this.setState({currentTitleTask: e.target.value})
    }

    onChangeDescriptionTask = (e) => {
        console.log('onChangeGroup', e.target.value)
        this.setState({currentDescriptionTask: e.target.value})
    }

    render() {
        console.log(this.props)

        const groupElement = this.state.data.map(group =>
            <Group 
                {...this.props}
                onClickGroup={this.handleClickGroup}
                onClickTask={this.handleClickTask}

                key={group.id} 
                groupID={group.id} 
                groupTitle={group.title} 
                groupTasks={group.tasks}
                
                currentTitleGroup={this.state.currentTitleGroup}
                updateGroup={this.updateGroup}
                deleteGroup={this.deleteGroup}
                onChangeGroup={this.onChangeTitleGroup}

                currentTitleTask={this.state.currentTitleTask}
                currentDescriptionTask={this.state.currentDescriptionTask}
                createTask={this.createTask}
                updateTask={this.updateTask}
                deleteTask={this.deleteTask}
                onChangeTask={this.onChangeTitleTask}
                onChangeTaskDescription={this.onChangeDescriptionTask}
                />
        )
        
        return (
            <div className="dashboard container-fluid">
                <div className="groups">
                    {groupElement}
        
                    <div className="groups__item add-new">
                        <div className="inner">
                        
                            {this.state.isAddGroup ? 
                                <AddGroup
                                    cancelAddGroup={this.handleClickCancelAddGroup}
                                    createGroup={this.createGroup}
                                    /> : 
                                <div onClick={this.handleClickAddGroup} className="new">Add a group...</div>}

                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default GroupList