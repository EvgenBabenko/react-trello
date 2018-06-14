import { dashboardTypes } from './'

const newGroup = (date) => ({
    id: date,
    date,
})

const newTask = (date) => ({
    id: date,
    date,
    description: '',
    "due date": date,
    attachments: []
})

const addGroup = (value, date) => ({
    type: dashboardTypes.ADD_GROUP,
    value,
    item: newGroup(date),
});

const addTask = (value, date, idGroup) => ({
    type: dashboardTypes.ADD_TASK,
    value,
    idGroup,
    item: newTask(date),
});

const getIdGroup = value => ({
    type: dashboardTypes.GET_ID_GROUP,
    value,
});

const deleteGroup = value => ({
    type: dashboardTypes.DELETE_GROUP,
    value,
});

const deleteTask = (idGroup, value) => ({
    type: dashboardTypes.DELETE_TASK,
    idGroup,
    value
});

const updateGroup = (value, id) => ({
    type: dashboardTypes.UPDATE_GROUP,
    id,
    value,
});

const updateTask = (value, idGroup, idTask) => ({
    type: dashboardTypes.UPDATE_TASK,
    idGroup,
    idTask,
    value,
});

export default {
    addGroup,
    addTask,
    deleteGroup,
    deleteTask,
    updateGroup,
    updateTask,
    getIdGroup,
}