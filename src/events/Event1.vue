<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../types";
const game = inject<Game>("game")!;
</script>

<template>
  <div class="description">
    <h1>Event 1</h1>
    <hr class="golden" />
    <p>Allez hop on peut augmenter la vitalité</p>
  </div>
  <div class="action">
    <hr />
    <button
      class="rpgui-button"
      type="button"
      @click="game.hero.increaseVitality() + game.story.next()"
    >
      <p>Augmenter la vitalité</p>
    </button>
  </div>
</template>

<style scoped></style>
