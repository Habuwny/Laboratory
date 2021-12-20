<template>
  <div class="Navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <div class="nav-tap">
          <div class="nav-left">
            <router-link :to="{ name: 'home' }" class="navbar-brand"
              ><img
                id="MDB-logo"
                src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
                alt="MDB Logo"
                draggable="false"
                height="30"
            /></router-link>
            <form class="form-search w-100">
              <div class="input-group">
                <input
                  type="search"
                  class="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </div>
              <!--            <a class="text-white"><i class="bi bi-search ps-3"></i></a>-->
            </form>
          </div>
          <div class="nav-right">
            <ul class="navbar-nav nav-right-ul ms-auto">
              <li class="nav-item nav-right-ul-li">
                <router-link
                  class="nav-link fw-bold bg-transparent"
                  v-if="!isLoggedIn"
                  :to="{ name: 'login' }"
                >
                  Log in
                </router-link>
                <router-link
                  class="nav-link fw-bold bg-transparent"
                  v-if="isLoggedIn"
                  :to="{ name: 'register' }"
                >
                  {{ user.name }}
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  class="btn btn-outline-info nav-link"
                  v-if="!isLoggedIn"
                  :to="{ name: 'register' }"
                >
                  Create Account
                </router-link>
                <router-link
                  class="btn btn-outline-info nav-link"
                  v-if="isLoggedIn"
                  :to="{ name: 'register' }"
                >
                  Create Post
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script src="./_Navbar.js" lang="js"></script>
<style scoped>
@media (max-width: 990px) {
  .btn-outline-info {
    padding-left: 5px;
    padding-right: 5px;
  }
}

.nav-tap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.nav-left {
  width: 60%;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
}
.nav-right {
  width: 40%;

  display: flex;
  flex-direction: row;
  /*justify-content: space-between;*/
}
.nav-right-ul-li {
  margin-right: 8px;
}
.nav-right-ul {
  display: flex;
  flex-direction: row;
}
.navbar-dark .nav-item .nav-link {
  color: #fff;
}

.navbar-dark .nav-item .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  border-radius: 0.25rem;
  color: #fff;
}

.fa-li {
  position: relative;
  left: 0;
}
</style>
