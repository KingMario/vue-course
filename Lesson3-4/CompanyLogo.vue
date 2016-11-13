<template>
  <div>
    <img class="logo" :src="logo">
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  props: ['logo']
})
</script>
<style scoped>
img.logo {
  width: 210px;
  height: 80px;
}
</style>
