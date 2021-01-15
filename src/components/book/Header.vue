<template>
  <div>
    <md-toolbar class="md-accent" style="background-color: #a03037">
      <div class="outter-container">
        <div class="left-container">
          <div class="icon">
            <h2 class="md-title">Bookstore</h2>
          </div>
          <div class="search">
            <md-autocomplete
              style="background-color: #fafafa99"
              v-model="searchInput"
              :md-options="[]"
              md-layout="box"
              class="searchbox"
            >
              <label>Select</label>
            </md-autocomplete>
          </div>
        </div>
        <div class="right-container">
          <span style="padding-right:10px">Cart</span>
          <v-badge dark :content="messages" color="black" overlap>
            <v-icon> mdi-cart </v-icon>
          </v-badge>
        </div>
      </div>
    </md-toolbar>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      searchInput: "",
      messages: 0,
    };
  },
};
</script>
<style>
.md-toolbar {
  padding: 0% 10%;
}
.md-title {
  margin: 0 10px !important;
}
.icon {
  padding-right: 50px;
}
.searchbox {
  height: 10px;
  width: 540px;
}
.outter-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.left-container {
  flex-direction: row;
  display: flex;
  align-items: center;
}
.right-container {
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 900px) {
  .searchbox {
  height: 8px;
  width: 250px;
}
}
@media only screen and (max-width: 550px) {
  .searchbox {
      width: 100%;
  height: 5px;
  width: 150px;
}
.md-toolbar {
  padding: 0% 0%;
}
.icon {
  padding-right: 10px;
}
}
</style>