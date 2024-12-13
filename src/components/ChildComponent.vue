<script setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  initialMessage: {
    type: String,
    default: "Message par défaut",
  },
  counter: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update-counter"]);

const incrementCounter = () => {
  emit("update-counter", props.counter + 1);
};

/* //v-bind
const isActive = ref(true);
const imageUrl = ref("https://vuejs.org/images/logo.png");

//v-on
const count = ref(0);
const incrementCount = () => {
  count.value++;
};

// v-if et v-show
const showMessage = ref(true);
const toggleMessage = () => {
  showMessage.value = !showMessage.value;
};

// v-for (boucle sur tableau)
const chapeaux = ref([
  "Sombrero",
  "Chapeau de paille",
  "Béret",
  "Casquette",
  "Haut de forme",
]);
const addChapeaux = () => {
  chapeaux.value.push(`Chapeaux ${chapeaux.value.length + 1}`);
};

const msg = "Hello!"; */
</script>

<template>
  <div class="child-component">
    <h2>Composant enfant</h2>
    <p>Message reçu: {{ initialMessage }}</p>
    <p>Compteur: {{ counter }}</p>

    <button @click="incrementCounter">Incrémenter le compteur</button>
  </div>

  <!-- 
  <img :src="imageUrl" :class="{ active: isActive }" alt="Logo vue" />

  <button @click="incrementCount">Cliquer pour incrémenter: {{ count }}</button>

  <div v-if="showMessage">Ce message va apparaitre si showMessage est vrai</div>

  <ul>
    <li v-for="(chapeau, index) in chapeaux" :key="index">
      {{ chapeau }}
    </li>
  </ul> -->
</template>

<style scoped>
.child-component {
  padding: 15px;
  background-color: violet;
  border: 1px solid #666;
  margin-top: 10px;
}
</style>
