<template>
  <div class="app">
    <Navbar />
    <div class="container mt-4 mb-4 pr-4 pl-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./Styles/app.scss";
// import Home from "./Pages/Home.vue";
import { Register } from "./Pages";
import { Navbar } from "./Components";

export default {
  name: "App",
  components: { Register, Navbar },
};
</script>
