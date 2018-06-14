import React, { Component } from 'react'
import { connect } from 'react-redux'

import EditGroup from './EditGroup'
import { dashboardActions } from '../../modules/dashboard'
import { activeActions } from '../../modules/active'
import { reduceFormByAttr } from '../../utils/reduceFormByAttr'

class EditGroupWrapper extends Component {
    state = {
        titleGroup: this.props.title,
    }

    changeTitleGroup = (e) => {
        this.setState({ titleGroup: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const ff = reduceFormByAttr('name', e.target)

        console.log(123456789, ff)

        console.log('submit group', this.state.titleGroup, this.props)

        this.props.updateGroup(this.state.titleGroup, this.props.id)

        this.props.handleCancelEditGroup(e)
    }

    handleDeleteGroup = () => {
      this.props.toggleActive()

      this.props.deleteGroup(this.props.id)
    }

    render() {
        return (
            <EditGroup
                changeTitleGroup={this.changeTitleGroup}
                handleSubmit={this.handleSubmit}
                handleDeleteGroup={this.handleDeleteGroup}
                {...this.props}
                {...this.state}
            />
        )
    }
}

const mapStateToProps = state => ({
    hasActive: state.hasActive
})

const mapDispatchToProps = dispatch => ({
    deleteGroup: (id) => dispatch(dashboardActions.deleteGroup(id)),
    updateGroup: (value, id) => dispatch(dashboardActions.updateGroup(value, id)),
    toggleActive: () => dispatch(activeActions.toggleActive()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EditGroupWrapper)