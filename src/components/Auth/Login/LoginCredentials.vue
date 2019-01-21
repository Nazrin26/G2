<template>
  <div class="login-form">
    <form class="form-signin shadow p-3 mb-5 bg-white rounded"
          v-show="loginDetails">
      <h1 class="h3 mb-3 font-weight-normal">Login</h1>
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email"
               id="inputEmail"
               class="form-control"
               placeholder="Email address"
               v-model="email"
               required>
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
        <button class="btn btn-lg btn-primary btn-block"
                @click="authLogin()"
        >Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      companyId: 1,
      companies: [{
        id: 1, name: 'company1',
      }],
      loginDetails: true,
      loginCompanies: false,
    };
  },
  methods: {
    authLogin() {
      if (this.email && this.password) {
        if (this.password !== '1') {
          console.log(this.companies);
          this.loginDetails = false;
          this.loginCompanies = true;
        } else {
          this.loginDetails = true;
        }
        /* axios.post('https://localhost:52582/api/identity/login', {
          Email: this.email,
          Password: this.password,
        })
          .then((result) => {
            if (result.data.Success) {
              store.commit('AuthorizeUser', result.data.token)
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
    },
  },
};
</script>

<style>
  .login-form{
    width: 340px;
    margin: 50px auto;
  }
</style>
