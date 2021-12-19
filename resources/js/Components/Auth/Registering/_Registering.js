// @vue/component
import Input from "../../Partials/Input/Input";
import Button from "../../Partials/Button/Button";
import { logIn } from "../../../utils/auth";
import validationErrors from "../../../Mixins/validationErrors";
export default {
  name: "Registering",
  components: { Input, Button },
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
      // toggle the eye / eye slash icon
      togglePassword.classList.toggle("bi-eye");
    },
    async register() {
      this.loading = true;
      this.errors = null;

      try {
        console.log(this.user);
        const res = await axios.post("/register", this.user);
        // console.log(res.status);

        if (res.status === 201) {
          console.log("signed");
          logIn();
          this.$store.dispatch("loadUser");
          this.$router.push({ name: "home" });
        }
      } catch (e) {
        // console.log(e);
        this.errors = e.response && e.response.data.errors;
      }
      this.loading = false;
    },
  },
};
