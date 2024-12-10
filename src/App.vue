<script setup lang="ts">
import { provide } from 'vue'

import { useHero } from "./hero/Hero.ts"

import HelloWorld from "./components/HelloWorld.vue";
// Start a new game

// Save hero
const hero = useHero();
provide('hero', hero)

// Save progression

// Display event
// Fight event or progress event

// Display fight

</script>

<template>
  <HelloWorld msg="Test" />
</template>

<style scoped></style>
