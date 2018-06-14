import React from 'react'

import TaskList from '../TaskList'
import EditGroup from '../EditGroup'

export default (props) => {
    const { id, title, getIdGroup, isEditGroup, handleEditGroup } = props
    
    return (
        <div onClick={() => getIdGroup(id)} className="groups__item" id={id}>
        <header className="title">
            {isEditGroup
                ? <EditGroup {...props} />
                : <h5 onClick={handleEditGroup}>{title}</h5>
            }
        </header>

        <TaskList {...props} />
    </div>
    )
}