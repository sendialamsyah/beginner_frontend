import { createNewDate } from "../../../helper/date"

// export const addTodolist = async(data)=>{
//     const createdAt = await createNewDate()
//     const result = {
//         name: data,
//         createdAt: createdAt
//     }
//     return {
//         type: 'ADD_TODO',
//         payload: result
//     }
// }

export const addTodolist = (data)=>async(dispatch)=>{
    dispatch({type: 'ADD_TODO_PENDING'})
    const createdAt = await createNewDate()
    const result = {
        name: data,
        createdAt: createdAt
    }
    // return {
    //     type: 'ADD_TODO',
    //     payload: result
    // }
    dispatch({type: 'ADD_TODO_SUCCESS',payload: result})
}