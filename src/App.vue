<template>
  <div id="app">
    <nav>
      <router-link to="/">Route vers parent</router-link>
      <router-link to="/query?message=Bonjour%20depuis%20Parent&user=Alice">
        Route vers query avec param
      </router-link>
      <router-link to="/query"> Route vers query sans param </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<style scoped>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2d0808;
  margin-top: 60px;
}

nav {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

nav a {
  padding: 10px;
  border: 1px solid black;
}
</style>
