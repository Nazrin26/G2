<template>
  <div class="login-form">
    <form class="form-signin shadow p-3 mb-5 bg-white rounded">
      <h1 class="h3 mb-3 font-weight-normal">Choose company</h1>
      <label for="inputTenant">Department</label>
      <div class="input-group input-group-sm mb-3">
        <select v-model="companyId" class="form-control" id="inputTenant">
          <option v-for="company in companies"
                  v-bind:key="company.id"
                  :value="company.id"
          >{{company.name}}</option>
        </select>
      </div>
      <button class="btn btn-xs btn-primary btn-block"
              @click="companyLogin()"
      >Select</button>
    </form>
  </div>
</template>

<script>
import store from '@/store';

export default {
  data() {
    return {
      companyId: 1,
    };
  },
  computed: {
    companies() {
      return this.$store.getters.comments;
    },
  },
  methods: {
    companyLogin2() {
      if (this.companyId) {
        if (this.password !== '1') {
          console.log(this.companies);
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
