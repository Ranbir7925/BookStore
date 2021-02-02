<template>
  <div class="outter-container">
    <div class="container">
      <div class="orderImg">
        <img src="../../assets/order.png" />
      </div>
      <div class="order-text">
        <p>
          hurray!!!your order is confirmed the order id is #123456 save the
          order id for further communication..
        </p>
      </div>

      <table>
        <tr>
          <th>Email us</th>
          <th>Contact us</th>
          <th>Address</th>
        </tr>
        <tr>
          <td>admin@bookstore.com</td>
          <td>+91 8451477521</td>
          <td>
            42,14 Main 15 cross Sector 4,opp to BDA complex, Banglore 560034
          </td>
        </tr>
      </table>
      <div class="bottons">
        <md-button class="md-raised md-primary right" @click="goToHome"
          >continue shopping</md-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToHome: function () {
      this.$router.push("/dashboard/books");
    },
  },
};
</script>
<style>
.outter-container {
  display: flex;
  justify-content: center;
}
.orderImg {
  display: flex;
  justify-content: center;
}
.order-text {
  width: 75%;
  color: #454440;
  font-size: x-large;
  text-align: center;
  padding: 35px 0;
}
table,
th,
td {
  border: 1px solid #d8d7d7;
  border-collapse: collapse;
  color: #646464;
}
th,
td {
  padding: 15px;
  text-align: center;
}
.container {
  display: flex;
  align-items: center;
  width: 800px;
  flex-direction: column;
}
.right {
  background-color: #a03037 !important;
  box-shadow: none !important;
  border: 1px solid #bfbfbf;
}
.bottons {
  margin: 30px 0px;
}

@media only screen and (max-width: 550px) {
.order-text {
    font-size: medium;
    padding: 15px 0;
}
.components {
    height: 130vh;
}
}
</style>