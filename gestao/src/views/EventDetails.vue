<template>
  <div>
    <h1>Detalhes do Evento</h1>
    <p>Nome: {{ evento.nome }}</p>
    <p>Descrição: {{ evento.descricao }}</p>
    <v-btn @click="$router.push('/events')" color="primary">Voltar</v-btn>
  </div>
</template>

<script>
import { useEventosStore } from '../stores'

export default {
  setup() {
    const eventosStore = useEventosStore()
    const evento = eventosStore.eventos.find(e => e.id === $route.params.id)

    return {
      evento,
    }
  },
}
</script>
