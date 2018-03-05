import React from 'react'

import ButtonSubmit from './ButtonSubmit'
import ButtonCancel from './ButtonCancel'

export default function AddGroup(props) {
    const {cancelAddGroup, createGroup} = props;

    function handleSubmit(e) {
        e.preventDefault();
        const input = e.target.querySelector('textarea');
        const text = input.value;
        if (!text) return
        
        input.value = '';
        
        const date = Date.now();

        const item = {
            id: date,
            title: text,
            date,
            tasks: []
        }

        createGroup(item);
        
    }

    function handleClickCancel(e) {
        e.preventDefault();
        cancelAddGroup();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <textarea className="form-control" name="" id="" rows="5" placeholder="New group"></textarea>
            </div>
            <ButtonSubmit value={'Add'}/>
            <ButtonCancel onCancelButtonClick={handleClickCancel} />
        </form>
    )
}