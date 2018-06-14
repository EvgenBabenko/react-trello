import React from 'react'

export default ({ handleDeleteTask, handleCancelEditTask, changeTitleTask, changeDescriptionTask, handleSubmit, titleTask, descriptionTask }) =>
    <form onSubmit={handleSubmit}>
        <input onChange={changeTitleTask} value={titleTask} name="titleTask" className="form-control" type="text" placeholder="Title task"/>
        <div className="form-group">
            <textarea onChange={changeDescriptionTask} value={descriptionTask} name="description" className="form-control" rows="5"  placeholder="Description" />
        </div>
        {/* <input name="fileUrl" type="file"/> */}
        <button className="btn btn-primary">Update</button>
        <button onClick={handleCancelEditTask} className="btn btn-link">Cancel</button>
        <button onClick={handleDeleteTask} className="btn btn-danger btn-sm">Delete</button>
    </form>