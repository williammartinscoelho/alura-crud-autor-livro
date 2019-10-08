<template>
  <div>
    <transition name="component-fade" mode="out-in">
      <loading v-if="onLoading" />

      <table v-else class="pure-table pure-table-horizontal pure-table-striped">
        <thead>
          <tr>
            <th>Index</th>
            <th>Id</th>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(autor, index) in autores" :key="autor.id">
            <td>{{ autores.length - index }}</td>
            <td>{{ autor.id }}</td>
            <td>{{ autor.nome }}</td>
            <td>{{ autor.email }}</td>
          </tr>
        </tbody>
      </table>
    </transition>
  </div>
</template>

<script>
import api from "../api";

export default {
  name: "autor-table",
  data() {
    return {
      onLoading: true,
      autores: []
    };
  },
  methods: {
    async get_autores() {
      const response = await api.get("/autores");
      this.autores = response.data.reverse();
      this.onLoading = false;
    }
  },
  created() {
    this.get_autores();
  },
  mounted() {
    this.$root.$on("emit_novos_autores", data => {
      this.autores = data;
    });
  }
};
</script>
