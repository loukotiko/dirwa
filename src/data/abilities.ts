import { Ability, Game } from "../types";

export const ability1: Ability = {
  name: "Ability1",
  effect: (game: Game) => game.hero.increaseVitality(),
};
