import { logIn } from "../../../utils/auth";
import validationErrors from "../../../Mixins/validationErrors";
export default {
  name: "Logging",
  components: {},
  mixins: [validationErrors],

  props: {},

  data() {
    return {
      email: null,
      password: null,
      loading: false,
    };
  },

  computed: {},

  watch: {},

  created() {},

  methods: {
    onEyeClick() {
      const togglePassword = document.querySelector("#togglePassword");
      const password = document.querySelector("#password");
      console.log(password.getAttribute("type"));
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      togglePassword.classList.toggle("bi-eye");
    },
    async login() {
      this.loading = true;
      this.errors = null;

      try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/login", {
          email: this.email,
          password: this.password,
        });
        logIn();
        this.$store.dispatch("loadUser");
        this.$router.push({ name: "home" });
      } catch (e) {
        this.errors = e.response && e.response.data.errors;
      }
      this.loading = false;
    },
  },
};
