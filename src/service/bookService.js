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
    placeOrder(orderDetails){
        return axiosService.post('add/order',orderDetails)
    }
    deleteCartItem(productId){
        return axiosService.delete(`remove_cart_item/${productId}`)
    }
    setQuantity(productId,data){
        return axiosService.put(`cart_item_quantity/${productId}`,data)
    }
    setCustomerDetails(details){
        return axiosService.put(`edit_user`,details)
    }

}
export default new NoteService