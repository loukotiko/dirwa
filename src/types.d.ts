import { Ref } from "vue";

export type Hero = {
  vitality: Ref<number>;
  strength: Ref<number>;
  agility: Ref<number>;
  special: Ref<number>;

  increaseVitality: () => void;
};
