import React from 'react'
import { connect } from 'react-redux'

import { dashboardActions } from '../../modules/dashboard'
import AddNew from '../AddNew'
import { reduceFormByAttr } from '../../utils/reduceFormByAttr'

const AddTaskWrapper = (props) => {

    function handleSubmit(e) {
        e.preventDefault();

        const { titleTask } = reduceFormByAttr('name', e.target)

        if (!titleTask) return

        props.addTask(titleTask, props.idGroup)

        props.handleCancelAddTask(e);
    }

    return (
        <AddNew 
            name={'titleTask'}
            placeholderValue={"New task"}
            cancelClick={props.handleCancelAddTask}
            handleSubmit={handleSubmit}
        />
    )
}

const mapStateToProps = state => ({
    idGroup: state.dashboard.idGroup,
})

const mapDispatchToProps = dispatch => ({
    addTask: (task, idGroup) => dispatch(dashboardActions.addTask(task, Date.now(), idGroup)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskWrapper)