<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../types";
const game = inject<Game>("game")!;

import Event1 from "../events/Event1.vue";
import Event2 from "../events/Event2.vue";

const events: Record<string, any> = { Event1, Event2 };
</script>

<template>
  <component :is="events[game.story.lastEvent]" />
  <button @click="game.story.next()">Next</button>
</template>

<style scoped></style>
