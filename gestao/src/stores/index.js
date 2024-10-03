import { defineStore } from 'pinia'

export const useEventosStore = defineStore('eventos', {
  state: () => ({
    eventos: [],
  }),
  actions: {
    adicionarEvento(evento) {
      this.eventos.push(evento)
    },
    removerEvento(id) {
      const index = this.eventos.findIndex(e => e.id === id)
      if (index !== -1) {
        this.eventos.splice(index, 1)
      }
    },
  },
})
