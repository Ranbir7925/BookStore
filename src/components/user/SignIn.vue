<template>
  <v-app>
    <div class="outterContainer">
      <div class="innerContainer">
        <div class="lableContainer">
          <div class="color-logo">
            <span class="l1">Book Store</span>
          </div>
          <div class="lable">
            <span>Sign in</span>
          </div>
          <div class="lable2">
            <span>Use your Fundoo Account</span>
          </div>
        </div>
        <v-form ref="form">
          <div class="inputfileds">
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
              :rules="[rules.required]"
              outlined
              required
              @keyup.enter="validate"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min8]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              outlined
              @click:append="show1 = !show1"
              @keyup.enter="validate"
            ></v-text-field>
          </div>
          <div class="buttons">
            <div class="nextButton">
              <router-link to="/signUp">Create account</router-link>
              <v-btn @click="validate" dark color="red darken-4">Next</v-btn>
            </div>
          </div>
        </v-form>
      </div>
    </div>
    <md-snackbar
      md-position="left"
      :md-active.sync="showSnackbar"
      md-persistent
    >
      <span>{{ message }}</span>
    </md-snackbar>
  </v-app>
</template>
<script>
import userService from "../../service/userService";
export default {
  name: "SignUp",
  data: () => ({
    show1: false,
    showSnackbar: false,
    email: "",
    password: "",
    message: "",
    hardCodedtoken:"",
    rules: {
      required: (value) => !!value || "Required.",
      min8: (v) => v.length >= 8 || "Min 8 characters",
    },
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        const signInData = {
          email: this.email,
          password: this.password,
        };
        console.log(signInData);
        userService
          .loginUser(signInData)
          .then((res) => {
            this.hardCodedtoken=res.data.result.accessToken;
            console.log(res,this.hardCodedtoken);

            this.showSnackbar = true;
            this.message = "Login Successful";
            localStorage.setItem("access_token", this.hardCodedtoken);
            setTimeout(() => this.$router.push("/dashboard/books"), 2000);
          })
          .catch((err) => {
            console.log(err);
            this.showSnackbar = true;
            this.message = "Invalid credentials";
          });
      }
    },
  },
};
</script>
<style scoped>
.outterContainer {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.innerContainer {
  padding: 48px 40px 36px 40px;
  width: 460px;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 8px;
  box-sizing: border-box;
}
.lableContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.l1 {
  font-size: 20px;
  color: #a03037;
}
.lable {
  color: #202124;
  padding-bottom: 0;
  padding-top: 16px;
  font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
  font-size: 24px;
  font-weight: 400;
}

.lable2 {
  color: #202124;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.5;
  padding-bottom: 0;
  padding-top: 8px;
}
.inputfileds {
  padding-top: 24px;
}
.v-btn {
  text-transform: none !important;
  letter-spacing: 0 !important;
  background-color: #ffffff !important;
  /* color: #1a73e8 !important; */
}
.forgotButton a,
.nextButton a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #a03037;
}
.buttons {
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.nextButton {
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 600px) {
  .innerContainer {
    border: 0px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
}
</style>