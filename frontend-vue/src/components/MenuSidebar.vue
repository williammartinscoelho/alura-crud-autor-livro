<template>
    <div id="menu">
        <div class="pure-menu">
            <router-link to="/" class="pure-menu-heading">Company</router-link>

            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <router-link to="/" class="pure-menu-link">Home</router-link>
                </li>

                <li class="pure-menu-item">
                    <router-link to="autor" class="pure-menu-link">Autor</router-link>
                </li>

                <li class="pure-menu-item">
                    <router-link to="livro" class="pure-menu-link">Livro</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuSidebar"
};
</script>

<style>
</style>
