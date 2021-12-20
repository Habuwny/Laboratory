import { logIn } from "../../../utils/auth";
import validationErrors from "../../../Mixins/validationErrors";
export default {
  name: "Logging",
  components: {},
  mixins: [validationErrors],

  props: {},

  data() {
    return {
      input: {
        rounded: "pill",
      },
      user: {
        name: "",
        email: "",
        password: "",
      },
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
    async register() {
      this.loading = true;
      this.errors = null;

      try {
        console.log(this.user);
        const res = await axios.post("/register", this.user);
        console.log(res.status);

        if (res.status === 201) {
          console.log("register");
          logIn();
          this.$store.dispatch("loadUser");
          this.$router.push({ name: "home" });
        }
      } catch (e) {
        console.log(e);
        this.errors = e.response && e.response.data.errors;
      }
      this.loading = false;
    },
  },
};
