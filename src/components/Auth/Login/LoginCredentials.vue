<template>
  <div class="form-signin shadow p-3 mb-5 bg-white rounded">
    <h1 class="h3 mb-3 font-weight-normal">Login</h1>
    <div class="form-group">
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email"
             id="inputEmail"
             class="form-control"
             placeholder="Email address"
             v-model="email"
             required autofocus>
    </div>
    <div class="form-group">
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password"
             id="inputPassword"
             class="form-control"
             placeholder="Password"
             v-model="password"
             required>
    </div>
    <div class="form-group">
      <button class="btn btn-xs btn-primary btn-block"
              @click="authLogin()"
      >Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';

import LoginCompany from '@/components/Auth/Login/LoginCompany.vue';
import store from '@/store';

export default class LoginCredentials extends Vue {
  email: string = '';

  password: string = '';

  authLogin() {
    if (this.email && this.password) {
      if (this.password !== '1') {
        const result = {
          token: 'asddvc',
          email: 'test@test.az',
          companies: [{
            id: 1, name: 'company1',
          }, {
            id: 2, name: 'company2',
          }],
        };
        this.$emit('changeComponent', LoginCompany);
      } else {
        const result = {
          token: 'asddvc',
          email: 'test@test.az',
          companies: [{
            id: 1, name: 'company1',
          }, {
            id: 2, name: 'company2',
          }],
        };
        store.commit('AuthorizeUser', result);
        this.$emit('changeComponent', LoginCompany);
        // this.$router.push('/');
      }
      /* axios.post('https://localhost:52582/api/identity/login1', {
        Email: this.email,
        Password: this.password,
      })
        .then((result) => {
          if (result.data.Success) {
            store.commit('AuthorizeUser', result.data)
            this.companies = result.data.companies;
            if (this.companies.length <= 1) {
              this.$router.push('/');
            } else {
              this.credentials = false;
              this.companyLogin = true;
            }
          } else {
            console.log(result.data.error);
          }
        })
        .catch((err) => {
          console.log(err);
        }); */
    }
  }
}
</script>

<style>
  .login-form{
    width: 340px;
    margin: 50px auto;
  }
</style>
