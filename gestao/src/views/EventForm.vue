<template>
  <div>
    <h1>Criar Novo Evento</h1>
    <form @submit.prevent="criarEvento">
      <v-text-field v-model="evento.nome" label="Nome do evento" />
      <v-textarea v-model="evento.descricao" label="Descrição do evento" />
      <v-btn type="submit" color="success">Criar</v-btn>
    </form>
  </div>
</template>

<script>
import { useEventosStore } from '../stores'

export default {
  setup() {
    const eventosStore = useEventosStore()
    const evento = {
      nome: '',
      descricao: '',
    }

    const criarEvento = () => {
      evento.id = Math.floor(Math.random() * 1000)
      eventosStore.adicionarEvento(evento)
      evento.nome = ''
      evento.descricao = ''
      $router.push('/')
    }

    return {
      evento,
      criarEvento,
    }
  },
}
</script>
