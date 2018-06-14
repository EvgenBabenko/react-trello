import { dashboardTypes } from './'

const dashboardState = {
    groups: [],
    idGroup: null,
    idTask: null,
    edit: '',
};

const groupState = {
    tasks: []
}

const groups = (state, action, id) => {
    const index = state.groups.findIndex(group => group.id === action[id])
    const item = state.groups[index]

    return {
        ...state,
        groups: [
            ...state.groups.slice(0, index),
            groupItem(item, action),
            ...state.groups.slice(index + 1)
        ]
    }
}

const groupItem = (state, action) => {
    switch (action.type) {
        case dashboardTypes.ADD_GROUP:
            return {
                ...state,
                ...action.item,
                title: action.value
            };
        case dashboardTypes.ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        ...action.item,
                        title: action.value
                    }
                ]
            };
        case dashboardTypes.UPDATE_GROUP:
            return {
                ...state,
                title: action.value
            }
        case dashboardTypes.UPDATE_TASK:
            const indexUpdateTask = state.tasks.findIndex(task => task.id === action.idTask)

            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, indexUpdateTask),
                    {
                        ...state.tasks[indexUpdateTask],
                        title: action.value.titleTask,
                        description: action.value.description
                    },
                    ...state.tasks.slice(indexUpdateTask + 1)
                ]
            }
        case dashboardTypes.DELETE_TASK:
            const indexDeleteTask = state.tasks.findIndex(task => task.id === action.value)

            return {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, indexDeleteTask),
                    ...state.tasks.slice(indexDeleteTask + 1)
                ]
            }
        default:
            return state;
    }
}

export default (state = dashboardState, action) => {
    switch (action.type) {
        case dashboardTypes.ADD_GROUP:
            return {
                ...state,
                groups: [
                    ...state.groups,
                    groupItem(groupState, action)
                ]
            };
        case dashboardTypes.ADD_TASK:
            return groups(state, action, 'idGroup')
        case dashboardTypes.GET_ID_GROUP:
            return {
                ...state,
                idGroup: action.value
            };
        case dashboardTypes.DELETE_GROUP:
            const index = state.groups.findIndex(group => group.id === action.value)

            return {
                ...state,
                groups: [
                    ...state.groups.slice(0, index),
                    ...state.groups.slice(index + 1)
                ]
            }
        case dashboardTypes.DELETE_TASK:
            return groups(state, action, 'idGroup')
        case dashboardTypes.UPDATE_GROUP:
            return groups(state, action, 'id')
        case dashboardTypes.UPDATE_TASK:
            return groups(state, action, 'idGroup')
        default:
            return state;
    }
}