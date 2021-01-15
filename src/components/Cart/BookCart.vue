<template>
  <div>
    <div class="cointainer">
      <div class="cartBook">
        <div class="cart-title">
          <h2>My Cart</h2>
        </div>
        <div class="book">
          <div class="book-image">
            <img src="../../assets/book2.jpg" />
          </div>
          <div class="book-details">
            <label for="">BOOK name</label>
            <label for="">by ranbir</label>
            <label for="">Rs.1000</label>
            <div class="book-ammount">
              <md-button class="md-raised">-</md-button>
              <md-button class="md-raised">+</md-button>
            </div>
          </div>
        </div>
        <div class="buttons">
          <md-button class="md-raised">place order</md-button>
        </div>
      </div>
      <div class="address"></div>
      <div class="order-details"></div>
    </div>
  </div>
</template>
<style scoped>
.cointainer {
  padding-top: 3%;
}
lable {
  margin-bottom: 10px;
}
.cartBook {
  display: flex;
  margin-left: 8%;
  padding: 20px 40px;
  height: 320px;
  width: 65%;
  flex-direction: column;
  border: 2px solid black;
  justify-content: space-between;
}
.address {
  height: 100px;
  width: 700px;
  border-color: aqua;
}
.order-details {
  height: 100px;
  width: 700px;
  border-color: aqua;
}

.book {
  display: flex;
  flex-direction: row;
}
.book-details {
  margin-left: 100px;
  display: flex;
  flex-direction: column;
}
.buttons {
  display: flex;
  justify-content: flex-end;
}
</style>