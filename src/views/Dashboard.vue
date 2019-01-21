<template>
  <div>
    <Navbar></Navbar>
    <h1>Here we go</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Navbar from '@/components/Shared/Navbar.vue';

  @Component({
    components: {
      Navbar,
    },
    mounted() {

    },
  })
export default class Home extends Vue {
}
</script>
