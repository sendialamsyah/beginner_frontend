const initialSate = {
    email: 'risano@gmail.com',
    count: 0,
}

const counterReducer = (state = initialSate, action)=>{
    if(action.type === 'INCREMENT'){
        return {
            ...state,
            count : state.count + 1
        }
    }else if(action.type === 'DECREMENT'){
        return {
            ...state,
            count: state.count - 1
        }
    }else if(action.type === 'CHANGE_EMAIL'){
        return{
            ...state,
            email: action.payload
        }
    }else{
        return state
    }
}

export default counterReducer