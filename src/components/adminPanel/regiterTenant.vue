<template>
  <div class="login-form">
    <div class="form-signin shadow p-3 mb-5 bg-white rounded">
      <h1 class="h3 mb-3 font-weight-normal">Register Tenant</h1>
      <div class="form-group">
        <label for="inputName" class="sr-only">Name</label>
        <input type="text"
               id="inputName"
               class="form-control"
               placeholder="Name"
               v-model="tenantRegisterModel.Name"
               required autofocus>
      </div>
      <div class="form-group">
        <button class="btn btn-xs btn-primary btn-block"
                @click="registerTenant()"
        >Register</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import store from '@/store';

class TenantRegisterModel {
  Name: string = '';
}

export default class RegisterTenant extends Vue {
  tenantRegisterModel = new TenantRegisterModel();

  registerTenant() {
    axios.post('https://localhost:52582/api/tenant/register', this.tenantRegisterModel)
      .then((result) => {
        if (result.data) {
          this.$router.push('/');
        } else {
          console.log('some error');
        }
      }, (err) => {
        console.log(err);
      });
  }
}
</script>

<style>
  .login-form{
    width: 340px;
    margin: 50px auto;
  }
</style>
