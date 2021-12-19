<template>
  <div>
    <div class="Input">
      <input
        :name="name"
        v-bind:type="type"
        class="form-control"
        :class="[{ 'is-invalid': errorFor(name) }]"
        :id="type"
        :placeholder="placeholder"
        required
      />
      <i
        v-if="type === 'password'"
        @click="onEyeClick"
        class="bi bi-eye-slash"
        id="togglePassword"
      ></i>
    </div>
    <v-errors :errors="errorFor(name)"></v-errors>
  </div>
</template>

<script src="./_Input.js" lang="js"></script>
<style scoped>
input {
  padding: 1em;
  font-weight: bolder;
  font-size: 1.15em;
  letter-spacing: 0.9px;
}
.Input {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1em;
}
i {
  margin-left: -30px;
  font-size: 1.4em;
  cursor: pointer;
  font-weight: bold;
}

::placeholder {
  font-weight: bolder;
}
</style>
