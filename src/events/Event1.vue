<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../types";
import HeroData from "../components/HeroData.vue";
const game = inject<Game>("game")!;
</script>

<template>
  <div class="rpgui-container container-double">
    <div class="rpgui-container framed">
      <h1>Event 1</h1>
      <hr class="golden" />
      <p>Allez hop on peut augmenter la vitalité</p>
    </div>
    <div class="rpgui-container framed-golden">
      <button
        class="rpgui-button"
        type="button"
        @click="game.hero.increaseVitality() + game.story.next()"
      >
        Augmenter la vitalité
      </button>

      <HeroData />
    </div>
  </div>
</template>

<style scoped></style>
