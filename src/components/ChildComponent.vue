<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  initialMessage: {
    type: String,
    default: 'Message par défaut',
  },
  counter: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(['childEvent']);

const incrementCounter = () => {
  emits('childEvent', props.counter + 1);
};

// v-bind
const isActive = ref(false);
const imageUrl = ref('https://vuejs.org/images/logo.png');

// v-on
const count = ref(0);
const incrementCount = () => {
  count.value++;
};

// v-if / v-show
const showMessage = ref(false);
const toggleMessage = () => {
  showMessage.value = !showMessage.value;
};

// v-for (boucle sur un tableau)
const chapeaux = ref(['Chapeau de paille', 'Sombrero', 'Béret', 'Casquette', 'Bob', 'Bonnet', 'Chapeau melon', 'Chapeau haut-de-forme']);
const addChapeau = () => {
  chapeaux.value.push(`Chapeaux ${chapeaux.value.length + 1}`);
};

const msg = "Hello !";
</script>

<!--
<template>
  Interpolation de texte moustache
  <h1>{{ msg }}</h1>

  <h2>{{ initialMessage }}</h2>

  v-bind
  <img :src="imageUrl" :class="{active: isActive}" alt="Vue logo" />

  v-on
  <button @click="incrementCount">Clics : {{ count }}
  Cliquer pour incrémenter : {{ count }}
  </button>

  v-if
  <div v-if="showMessage">
    Ce message est affiché si showMessage est vrai.
  </div>

    v-for
  <ul>
    <li v-for="chapeau in chapeaux" :key="chapeau">
      {{ chapeau }}
    </li>
  </ul>
</template>
-->


<style scoped>
.active {
  border: 2px solid green;
}
</style>