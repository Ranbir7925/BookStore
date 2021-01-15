import axiosService from './axiosService'
class UserService {
    addUser(signUpData) {
        return axiosService.post(`registration`, signUpData)
    }
    loginUser(signInData) {
        return axiosService.post(`login`, signInData)
    }
}
export default new UserService