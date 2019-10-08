<template>
  <div>
    <div class="header">
      <h1>Cadastro de autores</h1>
      <h2>Cadastre seus autores favoritos aqui :D</h2>
    </div>
    <div class="content" id="content">
      <form-autor />
      <hr />
    </div>

    <div class="table-container">
      <table-autor />
    </div>
  </div>
</template>

<script>
import AutorForm from "@/components/AutorForm.vue";
import AutorTable from "@/components/AutorTable.vue";

export default {
  name: "autor",
  components: {
    "form-autor": AutorForm,
    "table-autor": AutorTable
  }
};
</script>

<style>
</style>
