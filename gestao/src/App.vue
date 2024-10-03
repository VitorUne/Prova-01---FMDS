<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Meu Aplicativo</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <h1>Eventos Cadastrados</h1>
            <v-btn @click="$router.push('/events/new')" color="success">Cadastrar Novo Evento</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; 2023 Meu Aplicativo</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>
