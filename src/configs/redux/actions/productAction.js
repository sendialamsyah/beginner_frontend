import axios from '../../axios'
import * as string from '../string'

export const getProduct=({page, limit, sortby, sort})=>async(dispacth)=>{
    try {
        dispacth({type: string.GET_PRODUCT_PENDING})
        const {data} = await axios({
            url: `/product?page=${page}&limit=${limit}${sortby ? '&sortby='+sortby : ''}${sort ? '&sort='+sort : ''}`,
            method: 'GET'
        })
        dispacth({type: string.GET_PRODUCT_SUCCESS, payload: {data: data.data, pagination: data.pagination}})
    } catch (error) {
        dispacth({type: string.GET_PRODUCT_ERROR, payload: error.response})
    }
   
}

export const getSearchProduct = (search) => async (dispatch) => {
    try {
        const {data} = await axios.get(`product?search=${search}`)
        dispatch({ type: string.GET_SEARCH_SUCCESS, payload: data.data })
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = (id) => async (dispatch) => {
    await axios.delete(`products/${id}`)
        .then((res) => {
            dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: res.data.data });
            alert("delete success", res);
        });
};

export const getDetailProduct =(id)=>async (dispatch)=>{
    try {
        dispatch({type: string.GET_PRODUCT_DETAIL_PENDING})
        const {data:resData} = await axios.get(`/product/${id}`)
        dispatch({type: string.GET_PRODUCT_DETAIL_SUCCESS, payload: resData.data})
        return resData.data
    } catch (error) {
        dispatch({type: string.GET_PRODUCT_DETAIL_ERROR, payload: error.response.data})
    }
}

export const insertProduct = (data) =>  dispatch => {
    return new Promise(async(resolve, reject)=>{
        try {
            dispatch({type: string.INSERT_PRODUCT_PENDING})
            const {data:resData} = await axios.post(`/product`, data)
            dispatch({type: string.INSERT_PRODUCT_SUCCESS})
            resolve(resData.data)
        } catch (error) {
            dispatch({type: string.INSERT_PRODUCT_ERROR, payload: error.response.data})
            reject(error.response.data)
        }
    })
  
}

export const updateProduct = (id, data) =>  dispatch => {
    return new Promise(async(resolve, reject)=>{
        try {
            dispatch({type: string.UPDATE_PRODUCT_PENDING})
            const {data:resData} = await axios.put(`/product/${id}`, data)
            dispatch({type: string.UPDATE_PRODUCT_SUCCESS})
            resolve(resData.data)
        } catch (error) {
            dispatch({type: string.UPDATE_PRODUCT_ERROR, payload: error.response.data})
            reject(error.response.data)
        }
    })
  
}