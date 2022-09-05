<template>
  <div class="container p-0">
    <div class="card px-4">
      <p class="h8 py-3">Payment Form</p>
      <div class="row gx-3">
        <div class="col-12">
          <div class="d-flex flex-column">
            <label class="text mb-1">Name</label>
            <input
              class="form-control mb-3"
              type="text"
              placeholder="Name"
              v-model="name"
            />
          </div>
        </div>

        <div class="col-12">
          <div class="d-flex flex-column">
            <label class="text mb-1">Email</label>
            <input
              class="form-control mb-3"
              type="email"
              placeholder="user@gmail.com"
              v-model="email"
            />
          </div>
        </div>

        <div class="col-12">
          <div class="d-flex flex-column">
            <label class="text mb-1"
              >Amount <sup class="text-muted">(100000)</sup></label
            >
            <input
              class="form-control mb-3"
              type="number"
              placeholder="Enter amount"
              v-model="amount"
            />
          </div>
        </div>

        <div class="col-12">
          <div>
            <button
              class="btn mb-3 btn-primary btn-dark"
              v-if="!mail(email)"
              @click="warning"
            >
              <span class="ps-3"> Make Payment </span>
              <span class="fas fa-arrow-right ms-3"></span>
            </button>

            <paystack
              :amount="amount"
              :email="email"
              :paystackkey="paystackkey"
              :reference="reference"
              :callback="callback"
              :close="close"
              :currency="'NGN'"
              :embed="false"
              class="btn btn-primary mb-3 active"
              v-else
            >
              <span class="ps-3"> Make Payment </span>
              <span class="fas fa-arrow-right ms-3"></span>
            </paystack>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import paystack from "vue-paystack";
import { isEmail } from "./helper";

export default {
  name: "App",
  components: {
    paystack,
  },
  data() {
    return {
      paystackkey: process.env.VUE_APP_ENV_API_PUBLIC, //paystack public key
      email: "", // Customer email
      amount: 100000, // in kobo
      name: ""
    };
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
  },
  methods: {
    callback: function (response) {
      if (response.status === "success") {
        alert(
          `Hi ${this.name}, thank you for testing this app, mind you this is just a demo and no charge will be taken from your account.`
        );
        this.email = "";
        this.name = "";
      }
    },
    close: function () {
      console.log("Payment closed");
    },
    warning: function () {
      alert("Please Provide A Valid Email address");
    },
    mail(arg) {
      return isEmail(arg);
    },
  },

};
</script>

<style></style>