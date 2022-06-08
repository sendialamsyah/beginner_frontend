import axios from 'axios'

export const loginUser = (dataForm, Navigate)=> async(dispatch)=>{
    try {
        dispatch({type: 'USER_LOGIN_PENDING'})
        const result = await axios.post('http://localhost:4000/v1/users/login', dataForm)
        const user = result.data.data
        localStorage.setItem('token', user.token)
        localStorage.setItem('refreshToken', user.refreshToken)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: user})
        Navigate('/home')

    } catch (error) {
        alert('email atau password anda salah')
    }
}