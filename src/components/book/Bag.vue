<template>
  <div>
    <md-button class="md-raised md-primary right" @click="addItemToCart"
      >add to bag</md-button
    >
  </div>
</template>
<script>
import { eventBus } from "../../main";
import bookService from "../../service/bookService";
export default {
  name: "Bag",
  props: ["bookId"],
  data() {
    return {};
  },
  methods: {
    addItemToCart: function () {
      bookService
        .addToCart(this.bookId)
        .then((response) => {
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
    border: 1px solid #BFBFBF;
}
</style>