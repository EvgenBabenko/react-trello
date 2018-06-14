import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

import ModalTask from './ModalTask'
import { activeActions } from '../../modules/active'

class ModalTaskWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isTaskEdit: false,
        };

        this.root = document.createElement('div');
        this.root.className = "modal-task container-fluid d-flex justify-content-center align-items-center"
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    handleEditTask = () => {
        if (this.props.hasActive) return;

        this.setState({ isTaskEdit: true })

        this.props.toggleActive()
    }

    deleteTask = (event) => {
        event.preventDefault();

        this.props.handleCancelTaskClick();

        this.props.deleteTask();
    }

    handleCancelEditTask = (event) => {
        event.preventDefault();

        this.setState({ isTaskEdit: false })

        this.props.toggleActive()
    }

    render() {
        return createPortal(
            <ModalTask
                {...this.props}
                {...this.state}
                handleEditTask={this.handleEditTask}
                handleCancelEditTask={this.handleCancelEditTask}
                deleteTask={this.deleteTask}
            />,
            this.root
        )
    }
}

const mapStateToProps = state => ({
    hasActive: state.hasActive
})

const mapDispatchToProps = dispatch => ({
    toggleActive: () => dispatch(activeActions.toggleActive()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalTaskWrapper)