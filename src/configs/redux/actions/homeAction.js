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

export const deleteProduct= ({id}) => async (dispatch)=>{
    try {
        dispatch({type: string.DELETE_PRODUCT_PENDING})
        const {data} = await axios({
            url:`/product/${id}`,
            method: 'DELETE'
        })
        dispatch({type: string.DELETE_PRODUCT_SUCCESS, payload: {id}})
    } catch (error) {

    }
}

export const detailProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: "GET_DETAIL_PRODUCT_PENDING" });
      const result = await axios({
        method: "GET",
        url: `/product/${id}`,
      });
      console.log(result);
    //   const data = result.data.data;
    //   dispatch({ type: "GET_DETAIL_PRODUCT_SUCCESS", payload: { data } });
    } catch (error) {
      console.log(error);
    }
  };
