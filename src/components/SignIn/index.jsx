import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createPortal} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

import './style.css'
import SignIn from './SignIn'
import { reduceFormByAttr} from '../../utils/reduceFormByAttr'
import { userActions } from '../../modules/user'
import { modalActions } from '../../modules/modal'

class SignInWrapper extends Component {
    constructor(props) {
        super(props);

        this.root = document.createElement('div');
        this.root.className = "signin container-fluid d-flex justify-content-center align-items-center"
        document.body.appendChild(this.root);
    }
    
    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { email } = reduceFormByAttr('name', e.target)

        console.log('sign in', email)

        this.props.signIn(email)

        this.props.toggleModal()
    }
    
    render() {
        const { children } = this.props;

        return createPortal(
            <SignIn
                onChangeEmail={this.onChangeEmail}
                handleSubmit={this.handleSubmit}
                {...this.props}
                {...this.state}
            />,
            this.root
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
})

const mapDispatchToProps = dispatch => ({
    signIn: (value) => dispatch(userActions.signIn(value)),
    toggleModal: () => dispatch(modalActions.toggleModal()),
})

export default connect(undefined, mapDispatchToProps)(SignInWrapper)