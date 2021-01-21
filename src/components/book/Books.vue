<template>
  <v-app>
    <div class="outter">
      <div class="books">
        <div class="book-count">Books</div>
        <span>({{ noOfBooks + ` items` }})</span>
      </div>
      <div class="dropdown">
        <v-select
          :items="abc"
          v-model="selected"
          @change="sorting"
          label="Sort by relevence"
          dense
          solo
        ></v-select>
      </div>
    </div>
    <DisplayBooks v-bind:bookList="bookList" v-bind:noOfBooks="noOfBooks" />
  </v-app>
</template>
<script>
import DisplayBooks from "./DisplayBooks";
import BookService from "../../service/bookService";
export default {
  components: { DisplayBooks },
  data() {
    return {
      bookList: [],
      noOfBooks: "",
      selected: "",
      abc: ["Price: Low to High", "Price: High to Low", "Newest Arrivals"],
    };
  },
  methods: {
    fetchBooksList: function () {
      BookService.fetchBookList()
        .then((response) => {
          console.log(response.data.result);
          this.bookList = response.data.result;
          this.bookList.map(function (item, index) {
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
      if (this.selected === "Price: Low to High") {
        this.bookList.sort(this.sortByProperty("price"));
        console.log("sorted", this.bookList);
      }
      if (this.selected === "Price: High to Low") {
        let temp = [];
        temp = this.bookList.sort(this.sortByProperty("price"));
        this.bookList = temp.reverse();
        console.log("sorted", this.bookList);
      }
      if (this.selected === "Newest Arrivals") {
        this.bookList.reverse();
        console.log("na", this.bookList);
      }
    },
  },
  created() {
    this.fetchBooksList();
  },
};
</script>

<style scoped>
.outter {
  padding-left: 9%;
  padding-right: 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 60px;
}
span {
  opacity: 0.5;
  height: 15px;
  padding-left: 4px;
}

.books {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.book-count {
  font-size: xx-large;
}
.dropdown {
  height: 35px;
  width: 200px;
}
</style>