<template>
  <button
    type="button"
    :class="'rounded-' + rounded"
    class="btn btn-danger py-3 fw-bold fs-4"
  >
    {{ title }}
  </button>
</template>

<script src="./_Button.js" lang="js"></script>
<style scoped>
button {
  letter-spacing: 1px;
}
</style>
