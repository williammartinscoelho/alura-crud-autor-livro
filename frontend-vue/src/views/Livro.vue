<template>
  <div>
    <div class="header">
      <h1>Cadastro de livros</h1>
      <h2>Cadastre seus livros favoritos aqui :D</h2>
    </div>
    <div class="content">
      <form-livro />
      <hr />
    </div>

    <div class="table-container">
      <table-livro />
    </div>
  </div>
</template>

<script>
import LivroForm from "@/components/LivroForm.vue";
import LivroTable from "@/components/LivroTable.vue";

export default {
  name: "livro",
  components: {
    "form-livro": LivroForm,
    "table-livro": LivroTable
  },
  data() {
    return {
      onLoading: false
    };
  }
};
</script>
