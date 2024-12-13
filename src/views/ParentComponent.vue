<script setup>
import { ref } from "vue";
import ChildComponent from "../components/ChildComponent.vue";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();

// Etat géré par le parent
const parentMessage = ref("Message du parent");
const childCounter = ref(0);

// méthode pour gérer l'évenement émis par l'enfant
const handleChildEvent = (value) => {
  childCounter.value = value;
};
</script>

<template>
  <div class="parent-component">
    <h1>Composant parent</h1>

    <p>Compteur Pinia: {{ counterStore.count }}</p>
    <p>Double du compteur pinia: {{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment()">
      Incrémenter le compteur Pinia
    </button>

    <ChildComponent
      :initial-message="parentMessage"
      :counter="childCounter"
      @update-counter="handleChildEvent"
    />
  </div>
</template>

<style scoped>
.parent-component {
  padding: 20px;
  background-color: rgb(249, 0, 162);
  border: 2px solid #333;
}
</style>
