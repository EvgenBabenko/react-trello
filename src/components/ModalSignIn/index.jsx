import React from 'react'
import {createPortal} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

export default class ModalSignIn extends React.Component {
    state = {
        emailValue:''
    }

    componentWillMount() {
        this.root = document.createElement('div');
        this.root.className = "signin container-fluid d-flex justify-content-center align-items-center"
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    onChangeEmail = ({ target }) => {
        this.setState({emailValue: target.value})
    }
    
    render() {
        return createPortal(
            <div className="col-md-5 text-center">
                <h1>Trello</h1>
                <form>
                    <div onChange={this.onChangeEmail} className="form-group">
                        <input className="email form-control" type="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" placeholder="Password" />
                    </div>
                    <button onClick={this.props.closeModalSignIn.bind(this, this.state.emailValue)} className="btn btn-primary btn-block">Sign in</button>
                </form>
                {this.props.children}
            </div>,
            this.root
        )
    }
}