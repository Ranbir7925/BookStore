<template>
  <v-app>
    <div class="outterContainer">
      <div class="innerContainer">
        <div class="left-container">
          <div class="color-logo">
            <span class="l1">Book Store</span>
          </div>
          <div class="lable"><span>Create your Book Store Account</span></div>
          <v-form ref="form">
            <div class="name">
              <v-text-field
                v-model="fullName"
                type="text"
                :rules="[rules.required, rules.min3]"
                label="Full name"
                outlined
                required
              ></v-text-field>
              <v-text-field
                v-model="phoneNumber"
                class="ml"
                type="text"
                :rules="[rules.required, rules.min3]"
                label="Phone Number"
                outlined
              ></v-text-field>
            </div>
            <v-text-field
              v-model="email"
              type="email"
              :rules="[rules.required]"
              label="Email"
              outlined
            ></v-text-field>
            <div class="user-msg">You can use letters, numbers & periods</div>
            <div class="password">
              <v-text-field
                v-model="password"
                :rules="[rules.required, rules.min8]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                outlined
              ></v-text-field>
              <v-text-field
                class="ml"
                v-model="confirm"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min8]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Confirm"
                outlined
                @click:append="show1 = !show1"
              ></v-text-field>
            </div>
            <div class="pass-msg">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </div>
            <div class="buttons">
              <router-link to="/signIn">Sign in instead</router-link>
              <div class="button2">
                <v-btn @click="validate" dark color="red darken-4">Next</v-btn>
              </div>
            </div>
          </v-form>
        </div>
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
import userService from '../../service/userService'
export default {
  name: "SignUp",

  data: () => ({
    showSnackbar: false,
    show1: false,
    message: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirm: "",
    rules: {
      required: (value) => !!value || "Required.",
      min8: (v) => v.length >= 8 || "Min 8 characters",
      min3: (v) => v.length >= 3 || "Min 3 characters",
    },
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        if (this.password == this.confirm) {
          const signUpData = {
            fullName: this.fullName,
            email: this.email,
            password: this.confirm,
            phone:this.phoneNumber,
          };
          userService.addUser(signUpData)
          .then(() => {
              this.message = "User registered successfully";
              this.showSnackbar = true;
              setTimeout(() => this.$router.push("/signIn"), 2000);
            })
            .catch((err) => {
              console.log(err);
              this.message = "Error occured while registering user";
              this.showSnackbar = true;
            });
        } else {
          this.message = "Password must match";
          this.showSnackbar = true;
        }
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
  width: 600px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  border: 1px solid lightgrey;
  border-radius: 8px;
  box-sizing: border-box;
}
.left-container {
    flex-direction: column;
    display: flex;
    align-items: center;
}
.l1 {
  font-size: 20px;
  color: #a03037;
}

.lable span {
  color: #202124;
  font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
  font-size: 24px;
  font-weight: 400;
}
.lable {
  padding-top: 16px;
}
.name,
.password {
  padding-top: 20px;
  font-family: roboto, "Noto Sans Myanmar UI", arial, sans-serif;
  display: flex;
  flex-direction: row;
}

.ml {
  margin-left: 20px !important;
}
.right-container {
  padding-left: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;
}
.right-lable {
  padding-left: 30px;
}
.buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.buttons a {
  display: flex;
  align-items: center;
  color: #a03037;
  /* text-decoration: none !important; */
}
.v-btn {
  text-transform: none !important;
  letter-spacing: 0 !important;
  background-color: #ffffff !important;
  /* color: #1a73e8 !important; */
}

@media only screen and (max-width: 900px) {
  .right-container {
    display: none;
  }
  .innerContainer {
    display: flex;
    justify-content: center;
    width: 450px;
  }
}
@media only screen and (max-width: 600px) {
  .outterContainer {
    height: 100%;
  }
  .innerContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    border: 0px;
  }
  .ml {
    margin-left: 0px !important;
  }
  .name,
  .password {
    padding-top: 20px;
    font-family: roboto, "Noto Sans Myanmar UI", arial, sans-serif;
    display: flex;
    flex-direction: column;
  }
}
</style>

