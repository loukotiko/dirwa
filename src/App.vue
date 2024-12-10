<script setup lang="ts">
import { provide } from "vue";
import Introduction from "./components/Introduction.vue";
import EventManager from "./components/EventManager.vue";

import { useGame } from "./objects/Game.ts";

const game = useGame();
provide("game", game);
</script>

<template>
  <div class="rpgui-content rpgui-cursor-default">
    <div id="container">
      <Introduction v-if="!game.started.value" />
      <EventManager v-else />
    </div>
  </div>
</template>

<style scoped></style>
