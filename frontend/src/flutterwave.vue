
<template>
  <div class="flw">
    <b-button class="button" @click="makePayment">Pay Now</b-button>
  </div>
</template>
    
<script>
export default {
  name: "FlutterwaveModal",
  created() {
    const script = document.createElement("script");
    script.src = !this.isProduction
      ? "https://ravemodal-dev.herokuapp.com/v3.js"
      : "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  methods: {
    makePayment() {
      window.FlutterwaveCheckout({
        public_key: this.flwKey,
        tx_ref: this.reference,
        amount: this.amount,
        currency: this.currency,
        payment_options: this.payment_method,
        customer: {
          name: this.name,
          email: this.email,
        },
        callback: (response) => this.callback(response),
        customizations: {
          title: this.custom_title,
          description: "Payment for items in cart",
          logo: this.custom_logo,
        },
      });
    },
  },

  props: {
    isProduction: {
      type: Boolean,
      required: false,
      default: false, //set to true if you are going live
    },
    email: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
    flwKey: {
      type: String,
      required: true,
    },
    callback: {
      type: Function,
      required: true,
      default: () => {
        // eslint-disable-next-line no-console
        console.log("Payment made, verify payment");
      },
    },
    close: {
      type: Function,
      required: true,
      default: () => {},
    },
    currency: {
      type: String,
      default: "NGN",
    },
    country: {
      type: String,
      default: "NG",
    },
    custom_title: {
      type: String,
      default: "",
    },

    reference: {
      type: String,
      default: "",
    },
    payment_method: {
      type: String,
      default: "card,mobilemoney,ussd",
    },
  },
};
</script>