import React from 'react'

export default function EditTask(props) {
    const {currentTitleTask, currentDescriptionTask, deleteTask, updateTask, cancelClickTask, onChangeTask, onChangeTaskDescription} = props;

    function handleSubmit(e) {
        e.preventDefault();
        updateTask(currentTitleTask, currentDescriptionTask);
        cancelClickTask(e);
    }

    function handlerDelete(e) {
        e.preventDefault();
        deleteTask();
    }

    return (
        <form>
            <input onChange={onChangeTask} value={currentTitleTask} className="form-control" type="text" placeholder="Title"/>
            <div className="form-group">
                <textarea onChange={onChangeTaskDescription} value={currentDescriptionTask} className="form-control" name="" id="" rows="5"  placeholder="Description" />
            </div>
            <input type="file"/>
            <button onClick={handleSubmit} className="btn btn-primary">Update</button>
            <button onClick={cancelClickTask} className="btn btn-link">Cancel</button>
            <button onClick={handlerDelete} className="btn btn-danger btn-sm">Delete</button>
        </form>
    )
}