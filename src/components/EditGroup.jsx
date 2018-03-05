import React from 'react'

import ButtonCancel from './ButtonCancel'
import ButtonDelete from './ButtonDelete'
import ButtonSubmit from './ButtonSubmit'

export default function EditGroup(props) {
    const {currentTitleGroup, deleteGroup, updateGroup, cancelClickGroup, onChangeGroup} = props;

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submit', currentTitleGroup)
        updateGroup(currentTitleGroup);
        cancelClickGroup(e);
    }

    function handlerDelete(e) {
        e.preventDefault();
        deleteGroup();
    }

    return (
        <form>
            <div className="form-group">
                <textarea onChange={onChangeGroup} className="form-control" name="" id="" rows="5" value={currentTitleGroup} />
            </div>
            <ButtonSubmit onSubmitButtonClick={handleSubmit} value={'Update'} />
            <ButtonCancel onCancelButtonClick={cancelClickGroup} />
            <ButtonDelete onDeleteButtonClick={handlerDelete} />
        </form>
    )
}