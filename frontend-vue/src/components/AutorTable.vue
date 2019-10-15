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
                        <th>Nome</th>
                        <th>E-mail</th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="(autor, index) in autores"
                        :key="autor.id"
                    >
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
    name: "AutorTable",
    data() {
        return {
            onLoading: true,
            autores: []
        };
    },
    created() {
        this.getAutores();
    },
    mounted() {
        this.$root.$on("emit_novos_autores", data => {
            this.autores = data;
        });
    },
    methods: {
        async getAutores() {
            const response = await api.get("/autores");
            this.autores = response.data.reverse().slice(0, 10);
            this.onLoading = false;
        }
    }
};
</script>
