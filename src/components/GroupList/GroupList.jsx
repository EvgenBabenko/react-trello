import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

// import groups from '../fixtures'
import Group from '../Group'
import AddGroup from '../AddGroup'

export default ({ data, isAddGroup, handleAddGroup, handleCancelAddGroup, sortableContainersDecorator, sortableGroupDecorator }) =>
    <div className="dashboard container-fluid">
        <div className="groups" ref={sortableContainersDecorator}>

            {data.map(group =>
                <Group
                    key={group.id}
                    sortableGroupDecorator={sortableGroupDecorator}
                    {...group}
                />
            )}

            <div className="groups__item">
                <div className="inner">

                    {isAddGroup
                        ? <AddGroup handleCancelAddGroup={handleCancelAddGroup} />
                        : <div onClick={handleAddGroup}>Add a new group...</div>
                    }

                </div>
            </div>

        </div>
    </div>