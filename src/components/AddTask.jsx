import React from 'react'

import ButtonSubmit from './ButtonSubmit'
import ButtonCancel from './ButtonCancel'

export default function AddTask(props) {
    const {cancelAddTask, createTask} = props;

    function handleSubmit(event) {
        event.preventDefault()
        const input = event.target.querySelector('textarea');
        const text = input.value;
        if (!text) return

        input.value = '';

        const date = Date.now();

        const item = {
            id: date,
            title: text,
            description: '',
            "due date": date,
            date,
        }

        createTask(item);
        cancelAddTask(event)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <textarea className="form-control" name="" id="" rows="5" placeholder="New task"></textarea>
            </div>
            <ButtonSubmit value={'Add'}/>
            <ButtonCancel onCancelButtonClick={cancelAddTask} />
        </form>
    )
}