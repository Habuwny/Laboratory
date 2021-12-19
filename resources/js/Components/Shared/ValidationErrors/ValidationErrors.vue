<template>
  <div>
    <div
      class="invalid-feedback"
      v-for="(error, index) in errors"
      :key="key(index)"
    >
      <p class="fs-5 fw-bold">{{ error }}</p>
    </div>
  </div>
</template>

<script src="./_ValidationErrors.js" lang="js"></script>
<style scoped>
.form-control.is-invalid ~ div > .invalid-feedback {
  display: block;
}
</style>
