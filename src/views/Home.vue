<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <FrontPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import FrontPage from '@/components/FrontPage.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    FrontPage,
  }
}
</script>
