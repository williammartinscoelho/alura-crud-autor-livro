<template>
    <div>
        <div class="header">
            <h1>Cadastro de livros</h1>
            <h2>Cadastre seus livros favoritos aqui :D</h2>
        </div>

        <div class="content">
            <LivroForm />
            <hr />
        </div>

        <div class="table-container">
            <LivroTable />
        </div>
    </div>
</template>

<script>
import LivroForm from "@/components/LivroForm.vue";
import LivroTable from "@/components/LivroTable.vue";

export default {
    name: "Livro",
    components: {
        LivroForm,
        LivroTable
    },
    data() {
        return {
            onLoading: false
        };
    }
};
</script>

<style scoped>

</style>
