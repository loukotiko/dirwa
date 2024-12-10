<script setup lang="ts">
import { inject } from "vue";
import { Game } from "../types";
const game = inject<Game>("game")!;
</script>

<template>
  <div class="rpgui-container">
    <div class="rpgui-container framed">
      <h1>Introduction</h1>
      <hr class="golden" />
      <p>Entre, Dirwa, trouve des amis et deviens plus forte !</p>
      <button class="rpgui-button" type="button" @click="game.start()">
        <p>C'est parti !</p>
      </button>
    </div>
  </div>
</template>

<style scoped></style>
