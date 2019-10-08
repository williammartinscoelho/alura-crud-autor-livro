<template>
  <form class="pure-form pure-form-aligned" autocomplete="off" @submit.prevent="post_autor()">
    <fieldset>
      <div class="pure-control-group">
        <label for="nome">Nome</label>
        <input id="nome" type="text" placeholder="Nome do autor" v-model="form_autor.nome" />
        <span class="pure-form-message-inline txt-error">Este campo é obrigatório.</span>
      </div>

      <div class="pure-control-group">
        <label for="email">E-mail</label>
        <input id="email" type="email" placeholder="E-mail do autor" v-model="form_autor.email" />
        <span class="pure-form-message-inline txt-error">Este campo é obrigatório.</span>
      </div>

      <div class="pure-control-group">
        <label for="senha">Senha</label>
        <input id="senha" type="password" placeholder="Senha do autor" v-model="form_autor.senha" />
        <span class="pure-form-message-inline txt-error">Este campo é obrigatório.</span>
      </div>

      <div class="pure-controls">
        <button type="submit" class="pure-button pure-button-primary" :disabled="btn.disabled">
          {{ btn.label }}
          <i :class="btn.loading ? 'fas fa-spinner rotating' : 'hidden'"></i>
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script>
import api from "../api.js";

export default {
  name: "autor-form",
  data() {
    return {
      form_autor: {
        nome: "",
        email: "",
        senha: ""
      },
      btn: {
        loading: false,
        disabled: true,
        label: "Enviar"
      },
      submmiting: false
    };
  },
  methods: {
    async post_autor() {
      this.btn.loading = true;
      this.btn.disabled = true;
      this.btn.label = "Enviando... ";

      const response = await api.post("/autores", this.form_autor);
      this.$root.$emit("emit_novos_autores", response.data.reverse());

      this.limpar_form();

      this.btn.loading = false;
      this.btn.disabled = false;
      this.btn.label = "Enviar";
    },
    limpar_form() {
      this.form_autor.nome = "";
      this.form_autor.email = "";
      this.form_autor.senha = "";
    }
  },
  watch: {
    form_autor: {
      handler: function(val, oldVal) {
        this.btn.disabled = false;

        if (val.nome === "") {
          this.btn.disabled = true;
        }

        if (val.email === "") {
          this.btn.disabled = true;
        }

        if (val.senha === "") {
          this.btn.disabled = true;
        }
      },
      deep: true
    }
  }
};
</script>
