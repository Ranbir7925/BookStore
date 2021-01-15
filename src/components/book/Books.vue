<template>
  <div>
    <Sort v-bind:noOfBooks="noOfBooks"/>
    <DisplayBooks v-bind:bookList="bookList" v-bind:noOfBooks="noOfBooks" />
    <md-button class="md-raised" @click="sorting">wishlist</md-button>
  </div>
</template>
<script>
import DisplayBooks from "./DisplayBooks";
import Sort from "./Sort";
import BookService from "../../service/bookService";
export default {
  components: { DisplayBooks ,Sort},
  data() {
    return {
      bookList: [],
      noOfBooks: "",
    };
  },
  methods: {
    // fetchBooksList: function () {
    //   BookService.fetchBookList()
    //     .then((response) => {
    //       console.log(response.data.result);
    //       this.bookList = response.data.result;
    //     })
    //     .catch((error) => console.log(error));
    // },

    fetchBooksList: function () {
      BookService.fetchBookList()
        .then((response) => {
          console.log(response.data.result);
          this.bookList = response.data.result;
          this.bookList.map(function (item,index) {
            item.bookImage = `book${index}`;
          });
          this.noOfBooks = this.bookList.length;
          console.log(this.noOfBooks);
        })
        .catch((error) => console.log(error));
    },

    sortByProperty(property) {
      return function (a, b) {
        if (a[property] > b[property]) return 1;
        else if (a[property] < b[property]) return -1;

        return 0;
      };
    },

    sorting: function () {
      this.bookList.sort(this.sortByProperty("price"));
      console.log("sorted", this.bookList);
    },
  },
  created() {
    this.fetchBooksList();
  },
};
</script>