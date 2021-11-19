
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const CHANGE_TASK_NAME_TEXT = 'CHANGE_TASK_NAME_TEXT';


let initialState = {
    newText: '',
    newNameText: '',
    tasks: [
        {
            taskName:'',
            tasktext: ''
        }
    ],

}

const TasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TEXT: {
            return {
                ...state,
            newText: action.newText
            }
        };
        case ADD_TASK: {
            let newTask = { taskName: state.newNameText, tasktext: state.newText };
            let newTasks = [...state.tasks];
            newTasks.push(newTask);
            let tasks = newTasks;
            return {
                tasks,
                newText: '',
                newNameText: '',
            }
        }

        case DELETE_TASK: {
            let id = action.id;
            let newState = [...state.tasks];
            newState.splice(id, 1);
            let tasks = newState;
            return {
                tasks,
            }

        }
        case CHANGE_TASK_NAME_TEXT: {
            return {
                ...state,
                newNameText: action.item
            }

        }
        default: return state;

    }
};
export const changeText = (newText) => {
    return {
        type: CHANGE_TEXT,
        newText: newText
    }
};
export const addTask = () => {
    return {
        type: ADD_TASK,
    }
};
export const deleteTask = (i) => {
    return {
        type: DELETE_TASK,
        id: i
    }
};
export const changeTaskNameText = (newNameText) => {
    return {
        type: CHANGE_TASK_NAME_TEXT,
        item: newNameText
    }
};


export default TasksReducer;