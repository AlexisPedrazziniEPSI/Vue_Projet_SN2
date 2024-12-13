<template>
  <div class="query-params-view">
    <h1>Vue avec parametres dans la requete</h1>

    <p v-if="$route.query.message">
      Message depuis l'URL: {{ $route.query.message }}
    </p>

    <p v-if="$route.query.user">
      Utilisateur depuis l'URL: {{ $route.query.user }}
    </p>

    <p v-else>Aucun paramètre de requete trouvé</p>

    <p>Compteur Pinia (depuis la vue query param) {{ counterStore.count }}</p>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const counterStore = useCounterStore();

    return { route, counterStore };
  },
};
</script>

<style scoped>
.query-params-view {
  padding: 20px;
}
</style>
