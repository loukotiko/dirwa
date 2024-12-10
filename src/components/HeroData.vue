<script setup lang="ts">
declare const RPGUI: any;

import { inject, onMounted, useTemplateRef, watch } from "vue";
import { Game } from "../types";
const game = inject<Game>("game")!;

const vitalityBar = useTemplateRef("vitalityBar");
const strengthBar = useTemplateRef("strengthBar");
const agilityBar = useTemplateRef("agilityBar");
const specialBar = useTemplateRef("specialBar");

onMounted(() => {
  RPGUI.create(vitalityBar.value, "progress");
  RPGUI.set_value(vitalityBar.value, game.hero.vitality.value / 10);
  RPGUI.create(strengthBar.value, "progress");
  RPGUI.set_value(strengthBar.value, game.hero.strength.value / 10);
  RPGUI.create(agilityBar.value, "progress");
  RPGUI.set_value(agilityBar.value, game.hero.agility.value / 10);
  RPGUI.create(specialBar.value, "progress");
  RPGUI.set_value(specialBar.value, game.hero.special.value / 10);
});

watch(game.hero.vitality, (vitality) =>
  RPGUI.set_value(vitalityBar.value, vitality / 10)
);
watch(game.hero.strength, (strength) =>
  RPGUI.set_value(strengthBar.value, strength / 10)
);
watch(game.hero.agility, (agility) =>
  RPGUI.set_value(agilityBar.value, agility / 10)
);
watch(game.hero.special, (special) =>
  RPGUI.set_value(specialBar.value, special / 10)
);
</script>

<template>
  <div class="bars rpgui-container framed-grey">
    <div class="bar rpgui-container">
      <label>Vitalité</label>
      <div class="rpgui-progress green" ref="vitalityBar"></div>
    </div>
    <div class="bar rpgui-container">
      <label>Force</label>
      <div class="rpgui-progress red" ref="strengthBar"></div>
    </div>
    <div class="bar rpgui-container">
      <label>Agilité</label>
      <div class="rpgui-progress blue" ref="agilityBar"></div>
    </div>
    <div class="bar rpgui-container">
      <label>Spécial</label>
      <div class="rpgui-progress purple" ref="specialBar"></div>
    </div>
  </div>
</template>

<style scoped></style>
