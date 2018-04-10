import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import GroupList from './GroupList'
import ModalSignIn from './ModalSignIn';

export default class App extends Component {
    state = {
        isUserSignIn: '',
        isModalOpen: false,
    }

    toggleSignIn = () => {
        const { isUserSignIn, isModalOpen } = this.state;
        
        if (isUserSignIn && !isModalOpen) {
            this.setState({ isUserSignIn: '' })
        } else {
            this.setState({ isModalOpen: true })
        }
    }

    handleLogin = (user) => {
        this.setState({
            isUserSignIn: user,
            isModalOpen: false,
        })
    }

    render() {
        console.log(this.state)
        const { isUserSignIn, isModalOpen } = this.state;

        return (
            <React.Fragment>
    
                <header className="main__header container-fluid clearfix">
                    <h2 className="logo">Trello</h2>
                    <div className="info float-right">
                        <div className="user">{isUserSignIn ? isUserSignIn : 'Guest'}</div>
                        <button onClick={this.toggleSignIn} className="btn btn-primary">
                            {isUserSignIn ? 'Sign out': 'Sign in'}
                        </button>
                    </div>
                </header>

                <GroupList 
                    isUserSignIn={isUserSignIn}
                    flowUser={ (user) => this.setState({ isUserSignIn: user }) }
                />
                
                <footer>
                    #Footer
                </footer>

                {isModalOpen &&
                    !isUserSignIn &&
                        <ModalSignIn closeModalSignIn={this.handleLogin} />
                }

            </React.Fragment>
        )
    }
}