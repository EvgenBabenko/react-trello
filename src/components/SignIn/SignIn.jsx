import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default ({ children, handleSubmit }) => 
    <div className="col-md-5 text-center">
        <h1>Trello</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input name="email" className="email form-control" type="email" placeholder="Email" />
            </div>
            <div className="form-group">
                <input name="password" className="form-control" type="password" placeholder="Password" />
            </div>
            <button className="btn btn-primary btn-block">Sign in</button>
        </form>
        {children}
    </div>