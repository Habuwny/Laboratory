<template>
  <div class="Register">
    <div class="register__info__head">
      <h3 class="fw-bold">
        Welcome to
        <router-link class="text-decoration-none" to="/"
          >Laboratory</router-link
        >
        Community
      </h3>
      <h4>Register and communicate with other on laboratory</h4>
    </div>

    <div class="register__info shadow container w-50 rounded-2">
      <div>
        <router-link :to="{ name: 'home' }" class="navbar-brand"
          ><img
            class="mb-3"
            id="MDB-logo"
            src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
            alt="MDB Logo"
            draggable="false"
            height="30"
        /></router-link>
      </div>
      <form>
        <div class="form-group mb-3">
          <input
            name="name"
            type="text"
            class="form-control"
            v-model="user.name"
            :class="[{ 'is-invalid': errorFor('name') }]"
            placeholder="Name"
          />
          <v-errors :errors="errorFor('name')"></v-errors>
        </div>
        <div class="form-group mb-3">
          <input
            name="email"
            type="email"
            class="form-control"
            v-model="user.email"
            :class="[{ 'is-invalid': errorFor('email') }]"
            placeholder="Email"
          />
          <v-errors :errors="errorFor('email')"></v-errors>
        </div>

        <div class="form-group mb-3 position-relative">
          <input
            name="password"
            type="password"
            id="password"
            class="form-control"
            v-model="user.password"
            :class="[{ 'is-invalid': errorFor('password') }]"
            placeholder="Password"
          />
          <i
            @click="onEyeClick"
            class="bi bi-eye-slash"
            id="togglePassword"
          ></i>
          <v-errors :errors="errorFor('password')"></v-errors>
        </div>
        <div class="pt-4">
          <button
            type="submit"
            class="rounded-pill btn btn-danger py-2 fw-bold fs-4"
            :disabled="loading"
            @click.prevent="register"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div
        class="mt-2 registerToLogin"
        style="z-index: 1; display: inline-block"
      >
        <span class="registerToLogin-label">
          Already have an account?
          <router-link :to="{ name: 'login' }" class="text-decoration-none">
            <strong> Log in</strong></router-link
          >.
        </span>
      </div>
    </div>
  </div>
</template>

<script src="./_Registering.js" lang="js"></script>

<style scoped>
@media screen and (max-width: 990px) {
  .register__info {
    min-width: 80%;
  }
}
input {
  padding: 1em;
  font-weight: bolder;
  font-size: 1.15em;
  letter-spacing: 0.9px;
}
.register__info {
  background-color: #ccc;
  padding: 1em 1em;
}

.register__info__head {
  margin-bottom: 2em;
}
i {
  font-size: 1.4em;
  cursor: pointer;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 20px;
  transform: translateY(40%);
}
.is-invalid {
  border-color: #b22222;
  background-image: none;
}
.registerToLogin {
  position: relative;
  text-align: center;
  width: 100%;
}
.registerToLogin-label {
  position: relative;
  padding: 0 4px;
  z-index: 1;
  display: inline-block;
  background-color: #cccccc;
  font-size: 1.1rem;
}
.registerToLogin:after {
  display: block;
  position: absolute;
  top: 50%;
  width: 100%;
  content: "";
  border: 1px solid #000;
}
::placeholder {
  font-weight: bolder;
}
</style>
