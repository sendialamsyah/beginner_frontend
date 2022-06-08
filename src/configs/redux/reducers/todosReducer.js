const initialState = {
    todos: [],
    isLoading: false
}

const todosReducer = (state=initialState, action)=>{
    
    if(action.type === 'ADD_TODO_PENDING'){
        return {
            ...state,
            isLoading: true
        }
    }else if(action.type === 'ADD_TODO_SUCCESS'){
        return {
            ...state,
            todos: [
                ...state.todos,
                action.payload,
            ],
            isLoading: false
        }
    }else{
        return state
    }
}

export default todosReducer