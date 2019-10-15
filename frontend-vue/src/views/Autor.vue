<template>
    <div>
        <div class="header">
            <h1>Cadastro de autores</h1>
            <h2>Cadastre seus autores favoritos aqui :D</h2>
        </div>

        <div class="content">
            <AutorForm />
            <hr />
        </div>

        <div class="table-container">
            <AutorTable />
        </div>
    </div>
</template>

<script>
import AutorForm from "@/components/AutorForm.vue";
import AutorTable from "@/components/AutorTable.vue";

export default {
    name: "Autor",
    components: {
        AutorForm,
        AutorTable
    }
};
</script>

<style scoped>

</style>