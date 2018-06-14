import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default ({ handleCancelTaskClick, title, description, deleteTask, handleEditTask }) =>
    <div>
        <h2>{title}</h2>
        <h4>Description</h4>
        <h6>{description}</h6>

        <button onClick={handleEditTask} className="btn btn-primary">Edit</button>
        <button onClick={handleCancelTaskClick} className="btn btn-link">Cancel</button>
        <button onClick={deleteTask} className="btn btn-danger btn-sm">Delete</button>
    </div>