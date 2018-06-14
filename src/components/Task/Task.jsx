import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import ModalTask from '../ModalTask'
import SignIn from '../SignIn'

export default (props) => {
    const { user, id, title, isTaskClicked, handleTaskClick } = props

    return (
        <div className="tasks__item" id={id}>
            <div onClick={handleTaskClick}>{title}</div>

            {(user && isTaskClicked)
                ? <ModalTask {...props} />
                : (!user && isTaskClicked)
                    ? <SignIn />
                    : undefined
            }

        </div>
    )
}