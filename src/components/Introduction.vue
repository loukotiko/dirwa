<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../types";
const game = inject<Game>("game")!;
</script>

<template>
  <button type="button" @click="game.start()">C'est parti !</button>
</template>

<style scoped></style>
