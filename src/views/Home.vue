<template>
  <div>
    <Navbar></Navbar>
    <div class="col-12">
      <component :is="action"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Navbar from '@/components/Shared/Navbar.vue';
import PR from '@/components/documents/PR.vue';
import Login from '@/components/Auth/Login.vue';
import Register from '@/components/Auth/Register.vue';

@Component({
  components: {
    Login,
    Register,
    Navbar,
    PR,
  },
  mounted() {

  },
})
export default class Home extends Vue {
  @Prop(String) action!: string
}
</script>
