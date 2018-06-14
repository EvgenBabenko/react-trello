import React from 'react'
import { connect } from 'react-redux'

import User from './User'
import { userActions } from '../../modules/user'
import { modalActions } from '../../modules/modal'

const UserWrapper = (props) => {
    const { user, toggleModal, signOut } = props

    function toggleSignIn() {
        !user ? toggleModal() : signOut('')
    }

    return (
        <User 
            toggleSignIn={toggleSignIn}
            {...props}
        />
    ) 
}

const mapStateToProps = state => ({
    user: state.user,
    hasModal: state.hasModal
})

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(modalActions.toggleModal()),
    signOut: (value) => dispatch(userActions.signOut(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserWrapper)