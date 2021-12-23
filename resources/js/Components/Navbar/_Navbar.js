// @vue/component
import { mapState } from "vuex";

export default {
  name: "Navbar",

  components: {},

  mixins: [],

  props: {},

  data() {
    return {};
  },

  computed: {
    ...mapState({
      isLoggedIn: "isLoggedIn",
      user: "user",
    }),
  },

  watch: {},

  created() {},

  methods: {
    async logout() {
      try {
        axios.post("/logout");
        this.$store.dispatch("logout");
        location.reload();
      } catch (e) {
        this.$store.dispatch("logout");
        location.reload();
      }
    },
  },
};
