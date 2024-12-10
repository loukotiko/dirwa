<script setup lang="ts">
declare const RPGUI: any;

import { inject } from "vue";
import { Game } from "../types";
const game = inject<Game>("game")!;
import HeroData from "./HeroData.vue";

import Event1 from "../events/Event1.vue";
import Event2 from "../events/Event2.vue";

const events: Record<string, any> = { Event1, Event2 };
</script>

<template>
  <div class="rpgui-container container-double">
    <div class="rpgui-container framed-golden">
      <component :is="events[game.story.lastEvent]" />
    </div>
    <div class="rpgui-container framed">
      <HeroData />
    </div>
  </div>
</template>

<style scoped>
.container-double {
  display: flex;
  align-items: flex-start;
  justify-content: stretch;
}
.container-double > *:first-child {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 600px;
}
.container-double > *:last-child {
  width: 280px;
}

.container-double > *:nth-child(2) {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
</style>
