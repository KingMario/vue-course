<template>
  <span><company-logo :logo="logo"></company-logo><span class="slogan">{{slogan}}</span></span>
</template>
<script>
import CompanyLogo from './CompanyLogo.vue'

export default {
  props: ['companyName', 'logo', 'slogan'],
  components: {
    CompanyLogo
  }
}
</script>
<style scoped>
span.slogan {
  display: block;
  font-size: 12px;
  color: #999;
  margin-top: 20px;
}
</style>
