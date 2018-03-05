import React from 'react'

import ButtonCancel from './ButtonCancel'
import ButtonDelete from './ButtonDelete'
import ButtonSubmit from './ButtonSubmit'

export default function EditTask(props) {
    const {currentTitleTask, currentDescriptionTask, deleteTask, updateTask, cancelClickTask, onChangeTask, onChangeTaskDescription} = props;

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submit', currentTitleTask)

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
            <ButtonSubmit onSubmitButtonClick={handleSubmit} value={'Update'} />
            <ButtonCancel onCancelButtonClick={cancelClickTask} />
            <ButtonDelete onDeleteButtonClick={handlerDelete} />
        </form>
    )
}