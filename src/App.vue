<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import BorderBox1 from './components/BorderBox1/index.vue'
</script>

<template>
  <div style="width: 500px;height:200px;">
    <border-box-1>
      <div style="width: 500px;height:200px;display:flex;justify-content: center;align-items: center;">
        BorderBox1
      </div>
    </border-box-1>
  </div>
</template>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  color: #46bd87;
  background-color: #282c34;
  padding: 500px;
}
</style>
