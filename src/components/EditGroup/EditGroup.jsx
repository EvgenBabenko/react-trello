import React from 'react'

export default ({ handleDeleteGroup, handleCancelEditGroup, titleGroup, changeTitleGroup, handleSubmit }) =>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <textarea onChange={changeTitleGroup} value={titleGroup} name="titleGroup" className="form-control" rows="5" placeholder="Title group" />
        </div>
        <button className="btn btn-primary">Update</button>
        <button onClick={handleCancelEditGroup} className="btn btn-link">Cancel</button>
        <button onClick={handleDeleteGroup} className="btn btn-danger btn-sm">Delete</button>
    </form>