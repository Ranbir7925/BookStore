<template>
  <div>
    <md-button class="md-raised button" @click="addItemToWishlist">wishlist</md-button>
  </div>
</template>
<script>
import bookService from '../../service/bookService'
import { eventBus } from '../../main'
export default {
    name:"Wishlist",
    props:["bookId"],
    data(){
        return{

        }
    },
    methods:{
            addItemToWishlist: function () {
      bookService
        .addToWishlist(this.bookId)
        .then((response) => {
          console.log(response);
          eventBus.$emit("addToCart");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    }

}
</script>

<style >
    .button{
      box-shadow: none !important;
    border: 1px solid #BFBFBF;
    }
</style>