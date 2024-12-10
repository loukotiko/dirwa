import { ref } from "vue";
import { Story } from "../types";

const events = ref([]);

export function useStory(): Story {
  return {
    events,
    get lastEvent() {
      return this.events.value[this.events.value.length - 1];
    },
    next() {
      const newEvent = this.lastEvent === "Event1" ? "Event2" : "Event1";
      this.events.value.push(newEvent);

      return newEvent;
    },
  };
}
