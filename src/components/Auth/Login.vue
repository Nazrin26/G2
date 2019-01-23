<template>
  <div class="login-form">
    <div :is="ComponentView" v-on:changeComponent="changeComponent"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LoginCredentials from '@/components/Auth/Login/LoginCredentials.vue';
import LoginCompany from '@/components/Auth/Login/LoginCompany.vue';

@Component({
  components: {
    LoginCredentials,
    LoginCompany,
  },
})

export default class Login extends Vue {
  ComponentView: any = LoginCredentials;

  changeComponent(view: any) {
    this.ComponentView = view;
  }
}
</script>

<style>
  .login-form{
    width: 340px;
    margin: 50px auto;
  }
</style>
