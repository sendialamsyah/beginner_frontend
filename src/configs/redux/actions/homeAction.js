import axios from '../../axios'
import * as string from '../string'

export const getProduct=({page, limit, search, sort})=>async(dispacth)=>{
    try {
        dispacth({type: string.GET_PRODUCT_PENDING})
        const {data} = await axios({
            url: `/product?page=${page}&limit=${limit}${search ? '&search='+ search: ''}${sort ? '&sort='+sort : ''}`,
            method: 'GET'
        })
        dispacth({type: string.GET_PRODUCT_SUCCESS, payload: {data: data.data, pagination: data.pagination}})
    } catch (error) {
        dispacth({type: string.GET_PRODUCT_ERROR, payload: error.response})
    }
   
}