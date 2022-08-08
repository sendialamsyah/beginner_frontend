// import axios from 'axios'

// export const insertProduct = (dataForm)=> async(dispatch)=>{
//     try {
//         dispatch({type: 'INSERT_PRODUCT_PENDING'})
//         const result = await axios.post('http://localhost:4000/v1/product', dataForm)
//         const product = result.data.data
//         dispatch({type: 'INSERT_PRODUCT_SUCCESS', payload: product})

//     } catch (error) {
//     }
// }