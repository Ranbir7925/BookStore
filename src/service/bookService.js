import axiosService from './axiosService'
class NoteService{
    fetchBookList(){
        return axiosService.get('get/book')
    }
    addToCart(bookId){
        return axiosService.post(`add_cart_item/${bookId}`)
    }
}
export default new NoteService