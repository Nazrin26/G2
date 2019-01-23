<template>
  <div class="login-form">
    <div class="form-signin shadow p-3 mb-5 bg-white rounded">
      <h1 class="h3 mb-3 font-weight-normal">Register</h1>
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email"
               id="inputEmail"
               class="form-control"
               placeholder="Email address"
               v-model="registerModel.Email"
               required autofocus>
      </div>
      <div class="form-group">
        <label for="inputUserName" class="sr-only">User Name</label>
        <input type="text"
               id="inputUserName"
               class="form-control"
               placeholder="UserName"
               v-model="registerModel.UserName"
               required autofocus>
      </div>
      <div class="form-group">
        <label for="inputFirtsName" class="sr-only">First Name</label>
        <input type="text"
               id="inputFirtsName"
               class="form-control"
               placeholder="First Name"
               v-model="registerModel.FirstName"
               required autofocus>
      </div>
      <div class="form-group">
        <label for="inputLastName" class="sr-only">Last Name</label>
        <input type="text"
               id="inputLastName"
               class="form-control"
               placeholder="Last Name"
               v-model="registerModel.LastName"
               required autofocus>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password"
               id="inputPassword"
               class="form-control"
               placeholder="Password"
               v-model="registerModel.Password"
               required autofocus>
      </div>
      <div class="form-group">
        <label for="inputConfirmPassword" class="sr-only">Confirm Password</label>
        <input type="password"
               id="inputConfirmPassword"
               class="form-control"
               placeholder="Confirm Password"
               v-model="registerModel.confirmPassword"
               required autofocus>
      </div>
      <div class="form-group">
        <button class="btn btn-xs btn-primary btn-block"
                @click="register()"
                :disabled="isSubmitting"
        >Register</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';
import store from '@/store';

class RegisterModel {
  Email: string = '';

  UserName: string = '';

  Password: string = '';

  FirstName: string = '';

  LastName: string = '';

  confirmPassword: string = '';
}

export default class Register extends Vue {
  registerModel = new RegisterModel();

  isSubmitting: boolean = false;

  register() {
    this.isSubmitting = true;
    console.log(this.registerModel);
    axios.post('https://localhost:52582/api/identity/register', this.registerModel)
      .then((result) => {
        if (result.data.Success) {
          this.$router.push('/login');
        } else {
          console.log(result.data.Errors);
        }
      }, (err) => {
        this.isSubmitting = false;
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
