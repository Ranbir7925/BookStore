import axios from "axios"

const baseUrl = "https://backend-bookstore.herokuapp.com/bookstore_user/";
// const headers= {
//     'Content-Type': 'application/json',
//     'Authorization':localStorage.getItem("access_token")
// }
export default {
    post(requestUrl,data) {
        return axios({
            method: 'post',
            url: `${baseUrl}${requestUrl}`,
            data:data,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("access_token")
            }
        })
    },
    get(requestUrl) {
        return axios({
            method: 'get',
            url: `${baseUrl}${requestUrl}`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("access_token")
            }
        })
    },
    delete(requestUrl){
        return axios({
            method: 'DELETE',
            url: `${baseUrl}${requestUrl}`,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("access_token")
            }
        })
    },
    put(requestUrl,data){
        return axios({
            method: "PUT",
            url: `${baseUrl}${requestUrl}`,
            data:data,
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("access_token")
            }
        })
    }
}
