<template>
  <div id="app">
    <Header />
    <Siderbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Siderbar from './components/Sidebar.vue';
import Home from './components/Home.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  setup() {
    
  },
  components: {
    Header,
    Siderbar,
    Home,
    Footer
  }
};
</script>

<style>
</style>
