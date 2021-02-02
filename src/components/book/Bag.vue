<template>
  <div>
    <div class="buttons" v-if="clicked1 == true">
      <md-button
        class="md-raised md-primary right"
        @click="addItemToCart"
        >add to bag</md-button
      >
      <md-button class="md-raised button" @click="addItemToWishlist"
        >wishlist</md-button
      >
    </div>
    <div v-if="clicked == true">
      <md-button class="md-raised md-primary added"
        >Added To bag</md-button
      >
    </div>
    <div v-if="clicked2 == true">
      <md-button class="md-raised md-primary added"
        >added to wishlist</md-button
      >
    </div>
  </div>
</template>
<script>
import { eventBus } from "../../main";
import bookService from "../../service/bookService";
export default {
  name: "Bag",
  props: ["bookId"],
  data() {
    return {
      clicked: false,
      clicked1: true,
      clicked2: false
    };
  },
  methods: {
    addItemToCart: function () {
      bookService
        .addToCart(this.bookId)
        .then((response) => {
          this.clicked = true
          this.clicked1 = false
          console.log(response);
          eventBus.$emit("addToCart");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addItemToWishlist: function () {
      bookService
        .addToWishlist(this.bookId)
        .then((response) => {
          this.clicked2 = true
          this.clicked1 = false
          console.log(response);
          eventBus.$emit("addToCart");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style >
.right {
  background-color: #a03037 !important;
  box-shadow: none !important;
  border: 1px solid #bfbfbf;
}
.added{
    width: 200px;
    background-color: #3371B5 !important;
}

</style>