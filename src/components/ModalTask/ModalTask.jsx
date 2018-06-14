import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import EditTask from '../EditTask'
import TaskDetail from '../TaskDetail'

export default (props) => {
    const { children, isTaskEdit } = props

    return (
        <div className="card m-5 p-3 col-md-5 text-center">
            {isTaskEdit
                ? <EditTask {...props} />
                : <TaskDetail {...props} />
            }
            {children}
        </div>
    )
}