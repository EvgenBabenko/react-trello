import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
// import from 'react-dnd'

import GroupList from './GroupList'
import ModalSignIn from './ModalSignIn';
import ButtonSubmit from './ButtonSubmit';

class App extends React.Component {
    state = {
        isUserSignIn: false,
        isModalOpen: false,
    }

    toggleSignIn = () => {
        if (this.state.isUserSignIn && !this.state.isModalOpen) {
            this.setState({ isUserSignIn: false })
        } else {
            this.setState({ isModalOpen: true })
        }
    }

    handleCloseModal = (e) => {
        e.preventDefault()
        this.setState({
            isUserSignIn: true,
            isModalOpen: false
        })
    }

    render() {
        console.log(this.state)
        return (
            <main className="main">
    
                <header className="main__header container-fluid clearfix">
                    <h2 className="logo">Trello</h2>
                    <div className="info float-right">
                        <div className="user">User</div>
                        <ButtonSubmit onSubmitButtonClick={this.toggleSignIn} value={this.state.isUserSignIn ? 'Sign out': 'Sign in'} />
                    </div>
                </header>

                <GroupList 
                    isUserSignIn={this.state.isUserSignIn}
                    closeModalSignIn={this.handleCloseModal}
                    />
                
                <footer>
                    #Footer
                </footer>

                {this.state.isModalOpen &&
                    !this.state.isUserSignIn &&
                    <ModalSignIn closeModalSignIn={this.handleCloseModal}/>
                    }
            </main>
        )
    }
}

export default App