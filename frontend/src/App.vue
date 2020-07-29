<template>
  <div id="app">
    <div class="mt-0">
      <b-navbar toggleable="sm" type="light" variant="light" sticky>
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand class="ml-0">
          <b-icon-music-player-fill class="h5 mr-0 mb-0 mt-0" style="color: #17a2b8;"></b-icon-music-player-fill>Familia
        </b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text class="aa" tabs align="right" v-b-modal.modal-3>Login</b-nav-text>
            <b-nav-text class="ml-5" tabs align="right" v-b-modal.modal-7>FAQ</b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- carosel -->
    <div>
      <b-container align-v="center">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          class="mt-4 mb-5"
        >
          <b-carousel-slide
            caption="Subscribe and get Apple Music, save $10 annually"
            img-src="./assets/image50.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Never worry about monthly billings again, we handle that"
            img-src="./assets/image49.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Subscribe and get Spotify, save $8 annually"
            img-src="./assets/image36.jpg"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Enjoy the best of Digital Music content on a friendly budget"
            img-src="./assets/im1.jpg"
          ></b-carousel-slide>
        </b-carousel>
      </b-container>
    </div>
    <!-- carosel ends -->
    <h1 class="mt-0">Available Plans</h1>
    <b-container align-v="center" class="container">
      <div class="mt-5">
        <b-card-group deck class="mb-3">
          <!-- card 1 -->
          <b-card
            border-variant="default"
            header="Spotify"
            header-bg-variant="secondary"
            header-text-variant="white"
            align="center"
            title="$6/month"
            tag="article"
            style="max-width: auto;"
            class="mb-5 mt-2"
          >
            <br />
            <b-card-text>
              Get a 1 year subscription to Spotify for a fraction 
              of the official cost. This is billed once for the year
            </b-card-text>
            <b-list-group flush>
              <b-list-group-item></b-list-group-item>
              <b-list-group-item>
                <b-icon-check2-circle class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>Spotify
              </b-list-group-item>
              <b-list-group-item>
                <b-icon-x-circle class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>Amazon Music
              </b-list-group-item>
              <b-list-group-item>
                <b-icon-x-circle class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>Apple Music 
              </b-list-group-item>
              <b-list-group-item></b-list-group-item>
            </b-list-group>
            <br />
            <b-button v-b-modal.modal-1 variant="secondary">Subscribe</b-button>
            <br />
          </b-card>
          <!-- card 2 -->
          <b-card
            border-variant="info"
            header="Apple Music"
            header-bg-variant="info"
            header-text-variant="white"
            align="center"
            title="$1.5/month"
            tag="article"
            style="max-width: auto;"
            class="mb-5 mt-2"
          >
            <br />
            <b-card-text>
              Get a 1 year subscription to Apple Music for a fraction 
              of the official cost. This is billed once for the year
            </b-card-text>
            <b-list-group flush>
              <b-list-group-item></b-list-group-item>
              <b-list-group-item>
                <b-icon-check2-circle class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>Apple Music
              </b-list-group-item>
              <b-list-group-item>
                <b-icon-x-circle class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>Amazon Music
              </b-list-group-item>
              <b-list-group-item>
                <b-icon-x-circle class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>Spotify 
              </b-list-group-item>
              <b-list-group-item></b-list-group-item>
            </b-list-group>
            <br />
            <b-button v-b-modal.modal-1 variant="info">Subscribe</b-button>
            <br />
          </b-card>
          <!-- card 3 -->
          <b-card
            border-variant="default"
            header="Apple Music & Spotify"
            header-bg-variant="secondary"
            header-text-variant="white"
            align="center"
            title="$7/month"
            tag="article"
            style="max-width: auto;"
            class="mb-5 mt-2"
          >
            <br />
            <b-card-text>
              Get a 1 year subscription to both
              Apple Music & Spotify. This is billed once for the year
            </b-card-text>
            <b-list-group flush>
              <b-list-group-item></b-list-group-item>
              <b-list-group-item>
                <b-icon-check2-circle class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>Apple Music
              </b-list-group-item>
              <b-list-group-item>
                <b-icon-x-circle class="h5 mr-2 mb-0 mt-0"></b-icon-x-circle>Amazon Music
                <b-badge variant="primary" pill>coming soon</b-badge>
              </b-list-group-item>
              <b-list-group-item>
                <b-icon-check2-circle class="h5 mr-2 mb-0 mt-0" animation="fade"></b-icon-check2-circle>Spotify
              </b-list-group-item>
              <b-list-group-item></b-list-group-item>
            </b-list-group>
            <br />
            <b-button v-b-modal.modal-1 variant="secondary">Subscribe</b-button>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
    <div class="footer">
<!-- <form method="POST" action="https://checkout.flutterwave.com/v3/hosted/pay">
  <input type="hidden" name="public_key" value="FLWPUBK-a175345a7d60c66a929891412b4e6990-X" />
  <input type="hidden" name="customer[email]" value="prim@rose.org" />
  <input type="hidden" name="customer[phone_number]" value="0505555522" />
  <input type="hidden" name="customer[name]" value="Prim Rose" />
  <input type="hidden" name="tx_ref" value="bitethtx-019203" />
  <input type="hidden" name="amount" value="100" />
  <input type="hidden" name="payment_options" value="card" />
  <input type="hidden" name="currency" value="GHS" />
  <input type="hidden" name="meta[token]" value="54" />
  <input type="hidden" name="redirect_url" value="https://demoredirect.localhost.me/" />
  
  <button type="submit">CHECKOUT</button> 
</form> -->
      <p>Familia App &copy; 2020</p>
    </div>
    <!-- Modals Start-->
    <div>
      <!-- Modal 1 for basic and premium -->
      <b-modal id="modal-1" title="Subscribing for a Familia Plan" hide-footer>
        <div>
          <b-form @submit="onSubmit" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Choose a Password:" label-for="text-password">
              <b-form-input
                type="password"
                v-model="form.password"
                aria-describedby="password-help-block"
                required
                placeholder="Enter new password"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Confirm Password:" label-for="text-password">
              <b-form-input
                type="password"
                v-model="form.password"
                aria-describedby="password-help-block"
                required
                placeholder="Confirm password"
              ></b-form-input>
            </b-form-group>

            <!-- <b-form-group
              id="input-group-2"
              label="Who Referred you?"
              label-for="input-2"
              description="You can leave this blank if no one referred you"
            >
              <b-form-input
                id="input-2"
                v-model="form.refer"
                placeholder="Enter code of the person here"
              ></b-form-input>
            </b-form-group> -->

            <b-form-group id="input-group-3" label="Plan:" label-for="input-3">
              <b-form-select id="input-3" v-model="form.plan" :options="plans" required></b-form-select>
            </b-form-group>
            <b-button
              type="submit"
              variant="primary"
              v-b-modal.modal-6
              @click="$bvModal.hide('modal-1')"
            >Proceed to pay</b-button>
          </b-form>
        </div>
      </b-modal>
      <!-- Modal 3 - Login button -->
      <b-modal id="modal-3" title="Login" hide-footer>
        <div>
          <b-form v-if="show">
            <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Enter Password:" label-for="text-password">
              <b-form-input
                type="password"
                v-model="form.password"
                aria-describedby="password-help-block"
                required
                placeholder="Enter your password"
              ></b-form-input>
            </b-form-group>
            <b-button v-b-modal.modal-4 variant="primary" @click="$bvModal.hide('modal-3')">Login</b-button>
          </b-form>
        </div>
      </b-modal>
      <!-- Modal 4 display your details -->
      <b-modal id="modal-4" title="Your Familia Details" hide-footer>
        <b-list-group>
          <b-list-group-item>Full Name: John Doe</b-list-group-item>
          <b-list-group-item>Email: johndoe@icloud.com</b-list-group-item>
          <b-list-group-item>Apple ID: johndoe@icloud.com</b-list-group-item>
          <b-list-group-item>Current Plan: Familia Premium Plan</b-list-group-item>
          <b-list-group-item>Netflix Username: JOHNdoe</b-list-group-item>
          <b-list-group-item>Netflix Password: 1234567</b-list-group-item>
          <b-list-group-item>Date of Subscription: January 1, 2020</b-list-group-item>
          <b-list-group-item>Date of Expiry: January 1, 2021</b-list-group-item>
        </b-list-group>
      </b-modal>
      <!-- modal 5 to display referal code -->
      <b-modal id="modal-5" title="Your Referral Code" hide-footer>
        <div>
          <b-form @submit="onSubmit" v-if="show">
            <h1 v-bind="refferal">{{refferal.refferalCode}}</h1>
          </b-form>
        </div>
      </b-modal>
      <!-- modal 6 to display payment instructions -->
      <b-modal id="modal-6" title="How to Make Payment" hide-footer>
        <div>
          <b-form v-if="show">
            <h5>
              Send 43,200 Naira ($108 equivalent) to
              xxxxxxxx Access Bank Nwose Lotanna Victor and
              you will be notified in 24 hours of reciept of funds
            </h5>
          </b-form>
        </div>
      </b-modal>
      <!-- Modal 7 FAQ -->
      <b-modal id="modal-7" title="Frequently Asked Questions" hide-footer>
        <b-list-group>
          <b-list-group-item>
            <h5 style="text-align:center;">How do I Subscribe?</h5>
          </b-list-group-item>
          <b-list-group-item>
            Choose an Available Plan and click subscribe,
            you will see instructions on how to make payments.
          </b-list-group-item>
          <b-list-group-item>
            <h5 style="text-align:center;">How long does my Subscription last?</h5>
          </b-list-group-item>
          <b-list-group-item>
            Every subscription lasts for one year and that
            is why you are billed for 12 months at once.
          </b-list-group-item>
          <b-list-group-item>
            <h5 style="text-align:center;">I lost my Apple Music or Netflix Login details</h5>
          </b-list-group-item>
          <b-list-group-item>
            You can get your login details by clicking on Login,
            you will see all your data displayed.
          </b-list-group-item>
          <b-list-group-item>
            <h5 style="text-align:center;">How does Familia make money?</h5>
          </b-list-group-item>
          <b-list-group-item>
            We charge a little fee to be administrators of the Apple music,
            Netflix and Spotify Family accounts we manage.
          </b-list-group-item>
          <b-list-group-item>
            <h5 style="text-align:center;">How can I reach you?</h5>
          </b-list-group-item>
          <b-list-group-item>The footer of this page has our official Twitter Account.</b-list-group-item>
        </b-list-group>
      </b-modal>
    </div>
    <!-- Modals end -->
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "app",
  components: {},
  data() {
    return {
      form: {
        appleId: "",
        name: "",
        password: "",
        refer: "",
        plan: null
      },
      plans: [
        { text: "Select One", value: null },
        "1 year Apple Music plan ($18)",
        "1 year Spotify plan ($72)",
        "1 year Both plans ($84)"
      ],
      show: true,
      refferal: {}
    };
  },

  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      // eslint-disable-next-line no-console
      console.log(this.form);
      const d = await api.createRefferal(this.form);
      this.refferal = d;
      alert(JSON.stringify(this.form));
    }
  }
};
</script>

<style>
#app {
  text-align: center;
  font-family: YS Text, Arial, sans-serif;
  font-weight: 300;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
img,
.w-100 {
  max-width: 1424px !important;
  height: 480px !important;
}
@media (min-width: 481px) {
  li.aa {
    width: 960px;
  }
}
@media (min-width: 320px) and (max-width: 480px) {
  li.aa {
    width: auto;
  }
}
</style>
