<template>
  <form class="pure-form pure-form-aligned" autocomplete="off" @submit.prevent="post_livro">
    <fieldset>
      <div class="pure-control-group">
        <label for="titulo">Titulo</label>
        <input
          id="titulo"
          class="pure-input-1-2"
          placeholder="Título do livro"
          v-model="form_livro.titulo"
        />
        <span class="pure-form-message-inline txt-error">Este campo é obrigatório.</span>
      </div>

      <div class="pure-control-group">
        <label for="preco">Preço</label>
        <input
          id="preco"
          class="pure-input-1-2"
          type="number"
          min="0"
          placeholder="Preço do livro"
          v-model="form_livro.preco"
        />
        <span class="pure-form-message-inline txt-error">Este campo é obrigatório.</span>
      </div>

      <transition name="component-fade" mode="out-in">
        <loading v-if="select_on_loading" />
        <div v-else>
          <div class="pure-control-group">
            <label for="autor">Autor</label>
            <select id="autor" class="pure-input-1-2" v-model="form_livro.autorId">
              <option value="0" disabled selected>Selecione um autor</option>
              <option v-for="autor in autores" :key="autor.id" :value="autor.id">{{ autor.nome }}</option>
            </select>
            <span class="pure-form-message-inline txt-error">Este campo é obrigatório.</span>
          </div>

          <div class="pure-controls">
            <button type="submit" class="pure-button pure-button-primary" :disabled="btn.disabled">
              {{ btn.label }}
              <i :class="btn.loading ? 'fas fa-spinner rotating' : 'hidden'"></i>
            </button>
          </div>
        </div>
      </transition>
    </fieldset>
  </form>
</template>

<script>
import api from "../api.js";

export default {
  name: "livro-form",
  data() {
    return {
      select_on_loading: true,
      autores: [],
      form_livro: {
        titulo: "",
        preco: "",
        autorId: ""
      },
      btn: {
        loading: false,
        disabled: true,
        label: "Enviar"
      }
    };
  },
  methods: {
    async get_autores() {
      const response = await api.get("/autores");
      this.autores = response.data.reverse();
      this.select_on_loading = false;
    },
    async post_livro() {
      this.btn.loading = true;
      this.btn.disabled = true;
      this.btn.label = "Enviando... ";

      const response = await api.post("/livros", this.form_livro);
      this.$root.$emit("emit_novos_livros", response.data.reverse());

      this.limpar_form();

      this.btn.loading = false;
      this.btn.disabled = false;
      this.btn.label = "Enviar";
    },
    limpar_form() {
      this.form_livro.titulo = "";
      this.form_livro.preco = "";
      this.form_livro.autorId = "0";
    }
  },
  watch: {
    form_livro: {
      handler: function(val, oldVal) {
        this.btn.disabled = false;

        if (val.titulo === "") {
          this.btn.disabled = true;
        }

        if (val.preco === "") {
          this.btn.disabled = true;
        }

        if (val.autorId === "0") {
          this.btn.disabled = true;
        }
      },
      deep: true
    }
  },
  created() {
    this.get_autores();
  }
};
</script>

<style>
</style>
