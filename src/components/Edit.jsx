import React from 'react'

export default ({ handleDelete, handleCancelEdit, titleValue, changeTitleValue, handleSubmit, name, placeholderValue, children }) =>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <textarea onChange={changeTitleValue} value={titleValue} name={name} className="form-control" rows="5" placeholder={placeholderValue} />
        </div>
        <button className="btn btn-primary">Update</button>
        <button onClick={handleCancelEdit} className="btn btn-link">Cancel</button>
        <button onClick={handleDelete} className="btn btn-danger btn-sm">Delete</button>
        {children}
    </form>