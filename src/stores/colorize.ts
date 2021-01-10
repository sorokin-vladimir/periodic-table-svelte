import { writable } from 'svelte/store';

const createColorizeStore = () => {
  const { subscribe, set, update } = writable(true);

  return {
    subscribe,
    toEnableColorize: () => set(true),
    toDisableColorize: () => set(false),
  };
};

const colorizeStore = createColorizeStore();

export { colorizeStore };
