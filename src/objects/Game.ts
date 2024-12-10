import { ref } from "vue";
import { Game } from "../types";
import { useHero } from "./Hero";
import { useStory } from "./Story";

const hero = useHero();
const story = useStory();
const started = ref(false);

export function useGame(): Game {
  return {
    hero,
    story,
    started,
    start() {
      this.started.value = true;
      this.story.next();
    },
  };
}
