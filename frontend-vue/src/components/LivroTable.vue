<template>
    <div>
        <transition
            name="component-fade"
            mode="out-in"
        >
            <loading v-if="onLoading" />
            <table
                v-else
                class="pure-table pure-table-horizontal pure-table-striped"
            >
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Id</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="(livro, index) in livros"
                        :key="livro.id"
                    >
                        <td>{{ livros.length - index }}</td>
                        <td>{{ livro.id }}</td>
                        <td>{{ livro.titulo }}</td>
                        <td>{{ livro.autor.nome }}</td>
                        <td class="txt-right">{{ livro.preco | toCurrency }}</td>
                    </tr>
                </tbody>
            </table>
        </transition>
    </div>
</template>

<script>
import api from "../api.js";

export default {
    name: "LivroTable",
    filters: {
        toCurrency(value) {
            return value.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL"
            });
        }
    },
    data() {
        return {
            onLoading: true,
            livros: []
        };
    },
    created() {
        this.getLivros();
    },
    mounted() {
        this.$root.$on("emit_novos_livros", data => {
            this.livros = data;
        });
    },
    methods: {
        async getLivros() {
            const response = await api.get("/livros");
            this.livros = response.data.reverse().slice(0, 10);
            this.onLoading = false;
        }
    }
};
</script>

