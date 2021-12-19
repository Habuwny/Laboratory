// @vue/component
import { randomKey } from "../../../utils";

export default {
  name: "Validationerrors",

  components: {},

  mixins: [],

  props: ["errors"],

  data() {
    return {};
  },

  computed: {},

  watch: {},

  created() {},

  methods: {
    key(index) {
      return `validation_error_${index}_${randomKey()}`;
    },
  },
};
