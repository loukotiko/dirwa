<script setup lang="ts">
import { provide } from "vue";
import Introduction from "./components/Introduction.vue";
import EventManager from "./components/EventManager.vue";

import { useGame } from "./objects/Game.ts";

const game = useGame();
provide("game", game);

// Display event
// Fight event or progress event

// Display fight
</script>

<template>
  <Introduction v-if="!game.started.value" />
  <EventManager v-else />
</template>

<style scoped></style>
