import React, { Component } from 'react'
import { connect } from 'react-redux'

import Group from './Group'
import { dashboardActions } from '../../modules/dashboard'
import { activeActions } from '../../modules/active'

class GroupWrapper extends Component {
    state = {
        isEditGroup: false,
    }

    handleEditGroup = () => {
        if (!this.props.user || this.props.hasActive) return;

        this.setState({ isEditGroup: true })

        this.props.toggleActive();
    }

    handleCancelEditGroup = (event) => {
        event.preventDefault();

        this.setState({ isEditGroup: false })

        this.props.toggleActive();
    }

    render() {
        return (
            <Group
                handleEditGroup={this.handleEditGroup}
                handleCancelEditGroup={this.handleCancelEditGroup}
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
    getIdGroup: (id) => dispatch(dashboardActions.getIdGroup(id)),
    toggleActive: () => dispatch(activeActions.toggleActive()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupWrapper)