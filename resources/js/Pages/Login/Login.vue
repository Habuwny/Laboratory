<template>
  <div class="Login">
    <Logging />
    <div class="mt-5">
      <p>
        Made with love and Laravel. <strong>Code Laboratory</strong> © 2021 -
        2022.
      </p>
      <router-link :to="{ name: 'home' }" class="navbar-brand"
        ><img
          class="mb-3"
          id="MDB-logo"
          src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
          alt="MDB Logo"
          draggable="false"
          height="10"
      /></router-link>
    </div>
  </div>
</template>

<script src="./_Login.js" lang="js"></script>
