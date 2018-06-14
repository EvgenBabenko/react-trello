import React from 'react'
import { connect } from 'react-redux'

import { dashboardActions } from '../../modules/dashboard'
import AddNew from '../AddNew'
import { reduceFormByAttr } from '../../utils/reduceFormByAttr'

const AddGroupWrapper = ({ addGroup, handleCancelAddGroup }) => {

    function handleSubmit(e) {
        e.preventDefault();

        const { titleGroup } = reduceFormByAttr('name', e.target)

        if (!titleGroup) return

        addGroup(titleGroup)

        handleCancelAddGroup(e);
    }

    return (
        <AddNew 
            name={'titleGroup'}
            placeholderValue={"New group"}
            cancelClick={handleCancelAddGroup}
            handleSubmit={handleSubmit}
        />
    )
}

const mapDispatchToProps = dispatch => ({
    addGroup: (group) => dispatch(dashboardActions.addGroup(group, Date.now())),
})

export default connect(undefined, mapDispatchToProps)(AddGroupWrapper)