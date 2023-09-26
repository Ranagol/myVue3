import { defineStore, acceptHMRUpdate } from 'pinia'


export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0 as number,//TODO why can't I use here Number instead of number type?
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  },
})

/**
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}


