<template>
  <v-app>
    <div class="cointainer">
      <div class="cartBook">
        <div class="cart-title">
          <h2>My Cart</h2>
        </div>
        <div class="orderedBook">
          <div
            class="orderedBook-card"
            v-for="book in OrderedBookList"
            :key="book._id"
          >
            <div class="book">
              <div class="book-image">
                <img src="../../assets/book1.jpg" />
              </div>
              <div class="book-details">
                <div class="inner-container">
                  <label>{{ book.product_id.bookName }}</label>
                  <label>by {{ book.product_id.author }}</label>
                  <label>Rs.{{ book.product_id.price }}</label>
                </div>
                <div class="book-ammount">
                  <v-btn
                    icon
                    small
                    @click="
                      book.quantityToBuy--,
                        editQuantity(book._id, book.quantityToBuy)
                    "
                  >
                    <v-icon small>mdi-minus</v-icon>
                  </v-btn>
                  <div class="counter-display">{{ book.quantityToBuy }}</div>
                  <v-btn
                    icon
                    small
                    @click="
                      book.quantityToBuy++,
                        editQuantity(book._id, book.quantityToBuy)
                    "
                  >
                    <v-icon small>mdi-plus</v-icon>
                  </v-btn>
                </div>
                <md-button @click="removeFromCart(book._id)">remove</md-button>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons">
          <v-btn dark color="red darken-4" @click="showAddress = true"
            >place order</v-btn
          >
        </div>
      </div>
      <div class="address">
        <div class="cart-title">
          <h2>Customer Details</h2>
        </div>
        <div class="left-container" v-if="showAddress == true">
          <v-form ref="form">
            <div class="container-1">
              <v-text-field
                v-model="name"
                type="text"
                :rules="[rules.required, rules.min3]"
                label="Name"
                outlined
                required
              ></v-text-field>
              <v-text-field
                v-model="phoneNumber"
                class="ml"
                type="number"
                :rules="[rules.required, rules.min10]"
                label="Phone Number"
                outlined
              ></v-text-field>
            </div>
            <div class="container-2">
              <v-text-field
                v-model="pin"
                type="number"
                :rules="[rules.required, rules.min6]"
                label="Pin Code"
                outlined
              ></v-text-field>
              <v-text-field
                v-model="locality"
                class="ml"
                type="text"
                :rules="[rules.required]"
                label="Locality"
                outlined
                required
              ></v-text-field>
            </div>
            <div class="container-3">
              <v-text-field
                height="100px"
                v-model="address"
                type="text"
                :rules="[rules.required]"
                label="Address"
                outlined
                required
              ></v-text-field>
            </div>
            <div class="container-4">
              <v-text-field
                v-model="city"
                type="text"
                :rules="[rules.required]"
                label="city/town"
                outlined
                required
              ></v-text-field>
              <v-text-field
                v-model="landmark"
                class="ml"
                type="text"
                :rules="[rules.required]"
                label="Landmark"
                outlined
                required
              ></v-text-field>
            </div>
            <div class="container-5">
              <div class="inner-left">
                <label>Type</label>
                <v-radio-group row v-model="radioValue">
                  <v-radio
                    label="Home"
                    color="red darken-3"
                    value="Home"
                  ></v-radio>
                  <v-radio
                    label="Work"
                    color="red darken-3"
                    value="Work"
                  ></v-radio>
                  <v-radio
                    label="Others"
                    color="red darken-3"
                    value="Other"
                  ></v-radio>
                </v-radio-group>
              </div>
              <div class="inner-right">
                <v-btn @click="validate" dark color="red darken-4">Next</v-btn>
              </div>
            </div>
          </v-form>
        </div>
      </div>
      <div class="order-details">
        <div class="cart-title">
          <h2>Order Summery</h2>
        </div>
        <div v-if="showOrder == true">
          <div class="orderedBook">
            <div
              class="orderedBook-card-summery"
              v-for="book in OrderedBookList"
              :key="book._id"
            >
              <div class="book">
                <div class="book-image">
                  <img src="../../assets/book1.jpg" />
                </div>
                <div class="book-details">
                  <div class="inner-container">
                    <label>{{ book.product_id.bookName }}</label>
                    <label>by {{ book.product_id.author }}</label>
                    <label>Rs.{{ book.product_id.price }}</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="buttons">
            <v-btn dark color="red darken-4" @click="placeOrder"
              >checkout</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>
<script>
import bookService from "../../service/bookService";
import { eventBus } from "../../main";
export default {
  name: "BookCart",
  data: () => ({
    radioValue: "",
    OrderedBookList: [],
    bookData: "",
    showSnackbar: false,
    message: "",
    name: "",
    phoneNumber: "",
    pin: "",
    locality: "",
    city: "",
    landmark: "",
    address: "",
    showAddress: false,
    showOrder: false,
    rules: {
      required: (value) => !!value || "Required.",
      min6: (v) => v.length >= 6 || "Pin Code should be of 6 digits",
      min10: (v) => v.length >= 10 || "Phone number should be 10 digit",
      min3: (v) => v.length >= 3 || "Min 3 characters",
    },
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        const customerData = {
          addressType: this.radioValue,
          fullAddress: this.address,
          city: this.locality,
          state: this.city,
        };
        this.showOrder = true;
        console.log(customerData);
        bookService.setCustomerDetails(customerData).then((response) => {
          console.log(response);
        });
      }
    },
    getItemFromCart: function () {
      bookService.getFromCart().then((response) => {
        this.OrderedBookList = response.data.result;
        console.log(this.OrderedBookList.length);
        eventBus.$emit("cartData", this.OrderedBookList.length);
      });
    },
    editQuantity(id, quality) {
      if (quality <= 0) {
        this.removeFromCart(id);
      } else {
        const data = {
          quantityToBuy: quality,
        };
        bookService.setQuantity(id, data).then((response) => {
          console.log(response);
        });
      }
    },

    placeOrder: function () {
      let orderData = {
        product_id: this.bookData._id,
        product_name: this.bookData.bookName,
        product_quantity: this.bookData.quantity,
        product_price: this.bookData.price,
      };
      let orders = [orderData];
      console.log({ orders }, this.bookData);
      bookService.placeOrder(orders).then((response) => {
        console.log(response);
      });
    },

    removeFromCart(data) {
      console.log("delete", data);
      bookService.deleteCartItem(data).then((response) => {
        console.log(response);
        this.getItemFromCart();
      });
    },
  },
  created() {
    this.getItemFromCart();
  },
};
</script>

<style scoped>
.cointainer {
  padding-top: 10%;
}
lable {
  margin-bottom: 10px;
}
.cartBook {
  display: flex;
  margin-left: 8%;
  padding: 20px 40px;
  /* height: 300px; */
  width: 65%;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  justify-content: space-between;
}
.address {
  margin-top: 40px;
  display: flex;
  margin-left: 8%;
  padding: 20px 40px;
  width: 65%;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  justify-content: space-between;
}
.order-details {
  margin-top: 40px;
  display: flex;
  margin-left: 8%;
  padding: 20px 40px;
  width: 65%;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  justify-content: space-between;
}

.book {
  display: flex;
  flex-direction: row;
}
.book-details {
  width: 110px;
  margin-left: 76px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.book-ammount {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.inner-container {
  padding-top: 5px;
  display: flex;
  flex-direction: column;
}
.orderedBook-card-summery {
  margin: 10px;
}
.counter-display {
  height: 30px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid silver;
}
button {
  border: 1px solid silver;
}
.book-image img {
  max-width: 150px;
  height: 130px !important;
}
.buttons {
  display: flex;
  justify-content: flex-end;
}
.ml {
  margin-left: 20px !important;
}
.container-1,
.container-2,
.container-4 {
  display: flex;
}
.container-5 {
  height: 75px;
  display: flex;
  justify-content: space-between;
}
.inner-left {
  display: flex;
  flex-direction: column;
}
.inner-right {
  display: flex;
  align-items: flex-end;
}
.radio-btn {
  display: flex;
  padding-top: 5px;
}

/* .orderedBook {
  overflow: auto;
  height: 150px;
  display: flex;
  flex-direction: column;
}
.orderedBook::-webkit-scrollbar {
  display: none;
} */

@media only screen and (max-width: 550px) {
  .cartBook {
    margin: 8%;
    padding: 15px 20px;
    /* height: 273px; */
    width: 85%;
  }
  .address {
    margin-top: 40px;
    margin-left: 8%;
    padding: 15px 10px;
    width: 85%;
  }
  .book-details {
    margin-left: 40px;
  }
  .md-button {
    height: 30px;
  }
  .buttons {
    justify-content: center;
  }
  .order-details {
    margin-top: 40px;
    display: flex;
    margin-left: 8%;
    padding: 10px 20px;
    width: 85%;
    flex-direction: column;
    border: 1px solid #e5e5e5;
    justify-content: space-between;
  }
}
</style>