import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import User from './User'

export default () =>
    <header className="main__header container-fluid clearfix">
        <h2 className="logo">Trello</h2>
        <User />
    </header>