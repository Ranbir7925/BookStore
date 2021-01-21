import axiosService from './axiosService'
class NoteService{
    fetchBookList(){
        return axiosService.get('get/book')
    }
    addToCart(bookId){
        return axiosService.post(`add_cart_item/${bookId}`)
    }
    addToWishlist(bookId){
        return axiosService.post(`add_wish_list/${bookId}`)
    }
    getFromCart(){
        return axiosService.get('get_cart_items')
    }

}
export default new NoteService