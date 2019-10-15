<template>
    <form
        class="pure-form pure-form-aligned"
        autocomplete="off"
        @submit.prevent="postLivro"
    >
        <fieldset>
            <div class="pure-control-group">
                <label for="titulo">Titulo</label>
                <input
                    id="titulo"
                    class="pure-input-1-2"
                    placeholder="Título do livro"
                    v-model="form.titulo"
                />
                <span class="pure-form-message-inline txt-error">Este campo é obrigatório.</span>
            </div>

            <div class="pure-control-group">
                <label for="preco">Preço</label>
                <InputMoney
                    v-model="form.preco"
                    v-bind="money"
                    class="pure-input-1-2"
                />
                <span class="pure-form-message-inline txt-error">Este campo é obrigatório.</span>
            </div>

            <transition
                name="component-fade"
                mode="out-in"
            >
                <loading v-if="selectLoading" />
                <div v-else>
                    <div class="pure-control-group">
                        <label for="autor">Autor</label>
                        <select
                            id="autor"
                            class="pure-input-1-2"
                            v-model="form.autorId"
                        >
                            <option
                                value="0"
                                disabled
                                selected
                            >Selecione um autor</option>
                            <option
                                v-for="autor in autores"
                                :key="autor.id"
                                :value="autor.id"
                            >{{ autor.nome }}</option>
                        </select>
                        <span class="pure-form-message-inline txt-error">Este campo é obrigatório.</span>
                    </div>

                    <div class="pure-controls">
                        <button
                            type="submit"
                            class="pure-button pure-button-primary"
                            :disabled="btn.disabled"
                        >
                            {{ btn.label }}
                            <i :class="btn.loading ? 'fas fa-spinner rotating' : 'hidden'"></i>
                        </button>
                    </div>
                </div>
            </transition>
        </fieldset>

        <span class="post-message" v-show="postMessage">Salvo com sucesso!</span>
    </form>
</template>

<script>
import { Money } from "v-money";

import api from "../api.js";

export default {
    name: "LivroForm",
    components: { InputMoney: Money },
    data() {
        return {
            selectLoading: true,
            autores: [],
            form: {
                titulo: "",
                preco: 0,
                autorId: 0
            },
            btn: {
                loading: false,
                disabled: true,
                label: "Enviar"
            },
            money: {
                decimal: ",",
                thousands: ".",
                prefix: "R$ ",
                precision: 2,
                masked: false
            },
            postMessage: true
        };
    },
    watch: {
        form: {
            deep: true,
            handler(val, oldVal) {
                this.btn.disabled = false;

                if (val.titulo == "") {
                    this.btn.disabled = true;
                }

                if (val.preco == 0) {
                    this.btn.disabled = true;
                }

                if (val.autorId == 0) {
                    this.btn.disabled = true;
                }
            }
        }
    },
    created() {
        this.getAutores();
    },
    methods: {
        async getAutores() {
            const response = await api.get("/autores");
            this.autores = response.data.reverse().slice(0, 10);
            this.selectLoading = false;
        },
        postLivro() {
            this.btn.loading = true;
            this.btn.disabled = true;
            this.btn.label = "Enviando... ";

            api.post("/livros", this.form)
                .then((response) => {
                    this.$root.$emit(
                        "emit_novos_livros",
                        response.data.reverse().slice(0, 10)
                    );

                    this.clearForm();
                })
                .catch((error) => {

                })
                .finally(() => {
                    this.btn.loading = false;
                    this.btn.label = "Enviar";
                });
        },
        clearForm() {
            this.form.titulo = "";
            this.form.preco = 0;
            this.form.autorId = 0;
        },
        showMessage() {
            this.postMessage = true;
            setTimeout(() => {
                this.postMessage = false;
            }, 1500);
        }
    }
};
</script>

<style scoped>

.post-message {
    display: block;
    margin-left: 15px;
    background: #D4EDDA;
    color: #155724;
    border: 1px solid #C3E6CB;
    border-radius: 5px;
    padding: 8px;
    justify-content: center;
}
</style>
