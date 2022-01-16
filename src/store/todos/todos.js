import { combineReducers } from 'redux';

const SET_INIT_TODO = 'SET_INIT_TODO';
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

export function initTodo(payload) {
    return {
        type: 'SET_INIT_TODO',
        payload
    }
}

export function addTodo(payload) {
    return {
        type: 'ADD_TODO',
        payload
    }
}

export function deleteTodo(payload) {
    return {
        type: 'DELETE_TODO',
        payload
    }
}

export function updateTodo(payload) {
    return {
        type: 'UPDATE_TODO',
        payload
    }
}

const initData = []

function todos(state = initData, action) {
    switch (action.type) {
        case SET_INIT_TODO:
            return action.payload
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ];
        case DELETE_TODO:
            return action.payload
        case UPDATE_TODO:
            return action.payload
        default:
            return state;
    }

}

const todoApp = combineReducers({
    todos
});

export default todoApp;