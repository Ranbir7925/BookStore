<template>
  <v-app>
    <div>
      <!-- <div class="booksNo"></div>
        <div class="dropdown"></div> -->
      <div class="books">
        <label>Books ({{ noOfBooks + ` items` }})</label>
        <div class="sort">
          <v-select @click="test" :items="abc" label="Solo field" dense solo></v-select>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
export default {
  props: ["noOfBooks"],
  data() {
    return {
      abc: ["Foo", "Bar", "Fizz", "Buzz"],
    };
  },
  methods:{
      test:function(){
          console.log("in test");
      }
  }
};
</script>
<style>
.books {
  padding: 5px 10%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-weight: bolder;
  font-size: x-large;
}

.v-application--wrap {
    min-height: 0vh;
}
</style>