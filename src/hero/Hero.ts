import { ref } from "vue";
import { Hero } from "../types";

const vitality = ref(1);
const strength = ref(1);
const agility = ref(1);
const special = ref(1);

export function useHero(): Hero {
  return {
    vitality,
    strength,
    agility,
    special,
    increaseVitality() {
      this.vitality.value++;
    },
  };
}
