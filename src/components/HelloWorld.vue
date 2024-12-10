<script setup lang="ts">
import { inject } from "vue";
import { Hero } from "../types";

defineProps<{ msg: string }>();

const hero = inject<Hero>("hero")!;
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="hero.increaseVitality()">
      vitality is {{ hero.vitality }}
    </button>
  </div>
</template>

<style scoped></style>
