import React, { Component } from 'react'
import { connect } from 'react-redux'

import Task from './Task'
import { dashboardActions } from '../../modules/dashboard'
import { activeActions } from '../../modules/active'

class TaskWrapper extends Component {
    state = {
        isTaskClicked: false,
    }

    handleTaskClick = () => {
        if (this.props.hasActive) return;

        this.setState({ isTaskClicked: true })
    }

    handleCancelTaskClick = () => {
        this.setState({ isTaskClicked: false })
    }

    render() {
        return (
            <Task
                handleTaskClick={this.handleTaskClick}
                handleCancelTaskClick={this.handleCancelTaskClick}
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
})

export default connect(mapStateToProps)(TaskWrapper)