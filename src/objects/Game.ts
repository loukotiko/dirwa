import { ref } from "vue";
import { Game } from "../types";
import { useHero } from "./Hero";
import { useStory } from "./Story";
import { useAllies } from "./Allies";

const hero = useHero();
const story = useStory();
const allies = useAllies();
const started = ref(false);

export function useGame(): Game {
  return {
    hero,
    allies,
    story,

    started,
    start() {
      this.story.next();
      this.started.value = true;
    },
  };
}
