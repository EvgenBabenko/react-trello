import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import GroupList from './GroupList'
import ModalSignIn from './ModalSignIn';

export default class App extends React.Component {
    state = {
        isUserSignIn: '',
        isModalOpen: false,
    }

    toggleSignIn = () => {
        if (this.state.isUserSignIn && !this.state.isModalOpen) {
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
        return (
            <main className="main">
    
                <header className="main__header container-fluid clearfix">
                    <h2 className="logo">Trello</h2>
                    <div className="info float-right">
                        <div className="user">{this.state.isUserSignIn ? this.state.isUserSignIn : 'Guest'}</div>
                        <button onClick={this.toggleSignIn} className="btn btn-primary">
                            {this.state.isUserSignIn ? 'Sign out': 'Sign in'}
                        </button>
                    </div>
                </header>

                <GroupList 
                    isUserSignIn={this.state.isUserSignIn}
                    flowUser={ (user) => this.setState({ isUserSignIn: user }) }
                />
                
                <footer>
                    #Footer
                </footer>

                {this.state.isModalOpen &&
                    !this.state.isUserSignIn &&
                    <ModalSignIn 
                        closeModalSignIn={this.handleLogin}
                    />
                }
            </main>
        )
    }
}