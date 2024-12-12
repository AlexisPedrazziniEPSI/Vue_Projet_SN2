<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const parentMessage = ref('Message du parent');
const childCounter = ref(0);

const handlerChildEvent = (value) => {
  childCounter.value = value;
};
</script>

<template>
  <div class="parent-component">
    <h2>Parent Component</h2>
    <p>Message reçu : {{ initialMessage }}</p>
    <p>Compteur : {{ childCounter }}</p>

  </div>

  <div class="parent-component">
    <h1>Parent Component</h1>
    <ChildComponent :initial-message="parentMessage" @childEvent="handlerChildEvent" />
  </div>

  <button @click="parentMessage = 'Nouveau message du parent'">Changer le message du parent</button>
</template>

<style scoped>
.active {
  padding: 2px solid green;
  background-color: red;
  border: 1px solid #666;
  margin-top: 10px;
}
</style>