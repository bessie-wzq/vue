import axios from 'axios'
const baseURL="http://localhost:3000"

export function getUser(){
    return axios.get(baseURL+'/userInfo')
}

export function getCommand(){
    return axios.get(baseURL+'/task')
}

