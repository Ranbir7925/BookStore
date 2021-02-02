<template>
  <div>
    <div>
    <md-toolbar class="md-accent" style="background-color: #a03037">
      <div class="outter-container">
        <div class="left-container">
          <div class="icon" @click="gotoHome">
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
        <div class="right-container" @click="gotoCart">
          <span style="padding-right: 10px">Cart</span>
          <v-badge dark :content="messages" color="#E5737" overlap>
            <v-icon> mdi-cart </v-icon>
          </v-badge>
        </div>
      </div>
    </md-toolbar>
    </div>
  </div>
</template>
<script>
import { eventBus } from "../../main";
export default {
  name: "Header",
  data() {
    return {
      searchInput: "",
      messages: 0,
    };
  },
  methods: {
    gotoCart: function () {
      this.$router.push("/dashboard/cart");
    },
    gotoHome: function () {
      this.$router.push("/dashboard/books");
    },
  },
  created() {
    eventBus.$on("addToCart", () => {
      this.messages++;
    });
    eventBus.$on("cartData", (data) => {
      this.messages=data;
      console.log(data);
    });
  },
};
</script>
<style scoped>
.md-toolbar {
  position: fixed;
  padding: 0% 10%;
  z-index: 20;
}
.md-title {
  margin: 0 10px !important;
}
.icon {
  padding-right: 50px;
  cursor: pointer;
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
  cursor: pointer;
}
.v-badge__badge {
  background-color: burlywood !important;
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
  .right-container {
    padding-right: 5px;
  }
}
</style>