<template>
  <div class="display-books">
    <div class="books-container">
      <div class="book-card" v-for="book in bookList" :key="book._id">
        <md-card md-with-hover>
          <div class="card-items">
            <div class="book-section">
              <img src="../../assets/book1.jpg" />
            </div>
            <div class="book-info">
              <label class="content-part">{{ book.bookName }}</label>
              <label class="description-part">{{ `by ` + book.author }}</label>
              <label class="description-part">{{ `Rs.` + book.price }}</label>
            </div>
            <div class="buttons">
              <Bag v-bind:bookId="book._id"/>
              <Wishlist v-bind:bookId="book._id"/>
            </div>
          </div>
        </md-card>
      </div>
    </div>
  </div>
</template>
<script>
import Bag from "./Bag";
import Wishlist from "./Wishlist";
export default {
  name: "DisplayBooks",
  props: ["bookList"],
  components: { Bag, Wishlist },
  data() {
    return {
    };
  },
  methods: {
    // getImgUrl(pic) {
    //   return require("../../assets/" + pic);
    // },
  },
};
</script>
<style scoped>
.display-books {
  display: flex;
  flex-direction: column;
}
.books-container {
  background-color: white;
  padding: 0% 8%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.card-items {
  display: flex;
  flex-direction: column;
}
img {
  max-width: 150px;
  height: 150px !important;
}
.book-section {
  height: 200px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.book-info {
  padding: 5px 20px;
  height: 90px;
  display: flex;
  flex-direction: column;
}
.buttons {
  
  padding: 5px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #a03037 !important;
}

.md-card {
  width: 255px;
  height: 350px;
  margin: 8px;
}
.content-part {
  word-break: break-word;
  font-weight: bold;
  font-size: 18px;
  cursor: text;
  opacity: 0.6;
  margin: 0px 0px 5px 0px;
}
.description-part {
  font-weight: bold;
  word-break: break-word;
  opacity: 0.6;
  font-size: 18px;
  margin: 0px 0px 10px 0px;
  font-size: 16px;
  font-weight: 500;
  cursor: text;
}
</style>