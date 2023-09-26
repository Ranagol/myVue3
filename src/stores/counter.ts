import { defineStore, acceptHMRUpdate } from 'pinia'


export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 10 as number,
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




