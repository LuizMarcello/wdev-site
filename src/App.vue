<template>
  <div id="app">
    <Header />
    <!-- <router-view path="$router.key" /> -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import "./styles/global.css";
import Header from "./components/Header";
/* import Home from "./pages/Home.vue"; */
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    /* Home, */
    Footer,
  },
};
</script>
