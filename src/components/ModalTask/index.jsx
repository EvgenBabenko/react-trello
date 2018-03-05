import React from 'react'
import {createPortal} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

import ButtonDelete from '../ButtonDelete'
import ButtonCancel from '../ButtonCancel'
import ButtonSubmit from '../ButtonSubmit'
import EditTask from '../EditTask'

class ModalTask extends React.Component {
    state = {
        isTaskEdit: false,
    }

    componentWillMount() {
        this.root = document.createElement('div');
        this.root.className = "modal-task container-fluid d-flex justify-content-center"
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    handleDeleteTask = (event) => {
        event.preventDefault()
        this.props.closeModalTask()
        this.props.deleteTask();
    }

    onClickCancel = (event) => {
        event.preventDefault();

        this.setState({isTaskEdit: false})
    }
    
    render() {
        const {closeModalTask, taskTitle, taskDescription, taskDueDate} = this.props;
        return createPortal(
            <div className="card m-5 p-3 col-md-5 text-center">
                {this.state.isTaskEdit ? 
                    <EditTask 
                        {...this.props}
                        cancelClickTask={this.onClickCancel}
                        />
                    :
                    <div>
                        <h2>{taskTitle}</h2>
                        <h4>Description</h4>
                        <h6>{taskDescription}</h6>
                        <h4>Due date</h4>
                        <h6>{taskDueDate}</h6>
                        <ButtonSubmit onSubmitButtonClick={ () => this.setState({isTaskEdit: true}) } value={'Edit'} />
                        <ButtonCancel onCancelButtonClick={closeModalTask} />
                        <ButtonDelete onDeleteButtonClick={this.handleDeleteTask} />
                    </div>
                }
                {this.props.children}
            </div>,
            this.root
        )
    }
}

export default ModalTask