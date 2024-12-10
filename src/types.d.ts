import { Ref } from "vue";

export type Game = {
  hero: Hero;
  story: Story;
  started: Ref<boolean>;
  start: () => void;
};

export type Hero = {
  vitality: Ref<number>;
  strength: Ref<number>;
  agility: Ref<number>;
  special: Ref<number>;

  increaseVitality: () => void;
  increaseStrength: () => void;
};

export type Story = {
  lastEvent: Event;
  events: Ref<Event[]>;

  next: () => Event;
};

export type Event = string;
