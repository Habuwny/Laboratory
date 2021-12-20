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

  methods: {},
};
