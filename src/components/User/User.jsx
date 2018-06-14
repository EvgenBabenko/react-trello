import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import SignIn from '../SignIn'

export default ({ user, toggleSignIn, hasModal }) =>
    <React.Fragment>
        <div className="info float-right">
            <div className="user">
                {user ? user : 'Guest'}
            </div>
            <button onClick={toggleSignIn} className="btn btn-primary">
                {user ? 'Sign out' : 'Sign in'}
            </button>
        </div>

        {hasModal && !user && <SignIn />}
    </React.Fragment>