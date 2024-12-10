import { ref } from "vue";
import { Allies, Ally } from "../types";

const all = ref<Ally[]>([]);

export function useAllies(): Allies {
  return {
    all,
    addAlly(ally: Ally) {
      this.all.value.push(ally);
    },
  };
}
