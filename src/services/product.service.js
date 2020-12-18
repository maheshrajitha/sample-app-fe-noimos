import axios from 'axios';
import { BASE_URL } from '../constants/values';
import { setAuthorizationHeader } from './auth.service';
import Axios from 'axios';

export function saveFile(data) {
    return axios.post(`${BASE_URL}csv`,data,{
        headers:{
            "Content-Type":"multipart/form-data"
        }
    })
}

export function getCsv(csvId){
    return axios.get(`${BASE_URL}csv/${csvId}`)
}

export function saveNumber(data){
    return axios.post(`${BASE_URL}csv/save`,data)
}

export function addNewProduct(newProduct) {
    return Axios.post(`${BASE_URL}product`, newProduct, {
        headers: setAuthorizationHeader()
    }).then(response => response.data).catch(err => {
        throw err
    });
}

export function addDiscount(discount) {
    return Axios.patch(`${BASE_URL}product/add-discounts`, discount, {
        headers: setAuthorizationHeader()
    }).then(response => response.data).catch(err => { console.log(err.response); throw err });
}