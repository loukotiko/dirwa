<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../types";
const game = inject<Game>("game")!;
</script>

<template>
  <h1>Event 1</h1>
  <button type="button" @click="game.hero.increaseVitality()">
    vitality is {{ game.hero.vitality }}
  </button>
</template>

<style scoped></style>
