// @vue/component
import validationErrors from "../../../Mixins/validationErrors";
export default {
  name: "Input",
  components: {},
  mixins: [validationErrors],
  props: {
    placeholder: String,
    type: String,
    name: String,
  },
  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  methods: {
    // onEyeClick() {
    //   const togglePassword = document.querySelector("#togglePassword");
    //   const password = document.querySelector("#password");
    //   console.log(password.getAttribute("type"));
    //   const type =
    //     password.getAttribute("type") === "password" ? "text" : "password";
    //   password.setAttribute("type", type);
    //   // toggle the eye / eye slash icon
    //   togglePassword.classList.toggle("bi-eye");
    // },
  },
};
