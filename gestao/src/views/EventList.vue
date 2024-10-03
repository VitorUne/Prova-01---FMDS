<template>
  <div>
    <ul>
      <li v-for="evento in eventos" :key="evento.id">
        {{ evento.nome }}
        <v-btn @click="$router.push(`/events/${evento.id}`)" color="primary">Detalhes</v-btn>
        <v-btn @click="excluirEvento(evento.id)" color="error">Excluir</v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import { useEventosStore } from '../stores'

export default {
  setup() {
    const eventosStore = useEventosStore()

    const excluirEvento = (id) => {
      eventosStore.removerEvento(id)
    }

    return {
      eventos: eventosStore.eventos,
      excluirEvento,
    }
  },
}
</script>
