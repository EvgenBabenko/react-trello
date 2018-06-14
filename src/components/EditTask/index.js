import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditTask from './EditTask'
import { dashboardActions } from '../../modules/dashboard'
import { activeActions } from '../../modules/active'
import { reduceFormByAttr } from '../../utils/reduceFormByAttr'

class EditTaskWrapper extends Component {

    state = {
        titleTask: this.props.title,
        descriptionTask: this.props.description,
    }

    changeTitleTask = (e) => {
        this.setState({ titleTask: e.target.value })
    }

    changeDescriptionTask = (e) => {
        this.setState({ descriptionTask: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const formObject = reduceFormByAttr('name', e.target)

        console.log('reduce form', formObject)

        this.props.updateTask(formObject, this.props.idGroup, this.props.id)

        this.props.handleCancelEditTask(e)
    }

    handleDeleteTask = () => {
        this.props.toggleActive()
        
        this.props.deleteTask(this.props.idGroup, this.props.id)
    }

    render() {
        console.log(123, this.props)
        return (
            <EditTask
                changeTitleTask={this.changeTitleTask}
                changeDescriptionTask={this.changeDescriptionTask}
                handleSubmit={this.handleSubmit}
                handleDeleteTask={this.handleDeleteTask}
                {...this.props}
                {...this.state}
            />
        )
    }
}

const mapStateToProps = state => ({
    idGroup: state.dashboard.idGroup,
})

const mapDispatchToProps = dispatch => ({
    deleteTask: (idGroup, id) => dispatch(dashboardActions.deleteTask(idGroup, id)),
    updateTask: (value, idGroup, idTask) => dispatch(dashboardActions.updateTask(value, idGroup, idTask)),
    toggleActive: () => dispatch(activeActions.toggleActive()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskWrapper)