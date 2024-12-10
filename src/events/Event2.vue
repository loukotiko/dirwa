<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../types";
const game = inject<Game>("game")!;
</script>

<template>
  <div class="description">
    <h1>Event 2</h1>
    <hr class="golden" />
    <p>Allez hop on peut augmenter la force</p>
  </div>
  <div class="action">
    <hr />
    <button
      class="rpgui-button"
      type="button"
      @click="game.hero.increaseStrength() + game.story.next()"
    >
      <p>Augmenter la force</p>
    </button>
  </div>
</template>

<style scoped></style>
