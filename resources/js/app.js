require("./bootstrap");
import Vue from "vue";
import VueRouter from "vue-router";

import "tiptap-vuetify/dist/main.css";
import "vuetify/dist/vuetify.min.css";

import router from "./Router";
import store from "./Store";
import App from "./App.vue";
import Validationerrors from "./Components/Shared/ValidationErrors/ValidationErrors.vue";

Vue.use(VueRouter);
Vue.component("v-errors", Validationerrors);

window.axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (401 === error.response.status) {
      store.dispatch("logout");
    }

    return Promise.reject(error);
  }
);

const app = new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  async beforeCreate() {
    this.$store.dispatch("loadStoredState");
    this.$store.dispatch("loadUser");
  },
});
