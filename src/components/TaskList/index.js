import React, { Component } from 'react'
import { connect } from 'react-redux'

import TaskList from './TaskList'
import { activeActions } from '../../modules/active'

class TaskListWrapper extends Component {
    state = {
        isAddTask: false,
    }

    handleAddTask = () => {
        if (!this.props.user || this.props.hasActive) return;

        this.setState({ isAddTask: true })

        this.props.toggleActive();
    }

    handleCancelAddTask = (e) => {
        e.preventDefault();

        this.setState({ isAddTask: false })

        this.props.toggleActive();
    }

    render() {
        return (
            <TaskList
                handleAddTask={this.handleAddTask}
                handleCancelAddTask={this.handleCancelAddTask}
                {...this.props}
                {...this.state}
            />
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    hasActive: state.hasActive
})

const mapDispatchToProps = dispatch => ({
    toggleActive: () => dispatch(activeActions.toggleActive()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskListWrapper)