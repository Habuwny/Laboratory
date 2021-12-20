// @vue/component
import { Registering } from "../../Components";
import { mapState } from "vuex";
export default {
  name: "Register",
  components: { Registering },

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

  methods: {},
  beforeMount() {
    if (this.isLoggedIn) {
      this.$router.push({ name: "home" });
    }
  },
};
