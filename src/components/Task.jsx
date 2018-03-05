import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import ModalTask from './ModalTask'

class Task extends React.Component {
    state = {
        isTaskClicked: false,
        isModalOpen: false,
    }

    toggleModal = () => {
        if (!this.props.isUserSignIn) {
            console.log('popppp')
            return
        }

        this.setState({isTaskClicked: !this.state.isTaskClicked})
    }

    render() {
        const {taskID, groupID, taskTitle, onClickTask} = this.props;

        return (
            <div onClick={onClickTask.bind(this, taskID, groupID)} className="tasks__item" id={taskID}>
                <div onClick={this.toggleModal}>{taskTitle}</div>
            
                {this.state.isTaskClicked &&
                    <ModalTask
                        {...this.props}
                        closeModalTask={this.toggleModal}
                        />
                }
                
            </div>
        )
    }
}

export default Task