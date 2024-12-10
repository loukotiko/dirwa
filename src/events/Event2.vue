<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../types";
const game = inject<Game>("game")!;
</script>

<template>
  <h1>Event 2</h1>
  <button type="button" @click="game.hero.increaseStrength()">
    strength is {{ game.hero.strength }}
  </button>
</template>

<style scoped></style>
