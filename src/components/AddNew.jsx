import React from 'react'

export default ({ placeholderValue, cancelClick, handleSubmit, name }) => 
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <textarea className="form-control" name={name} rows="5" placeholder={placeholderValue}></textarea>
        </div>
        <button className="btn btn-primary">Add</button>
        <button onClick={cancelClick} className="btn btn-link">Cancel</button>
    </form>