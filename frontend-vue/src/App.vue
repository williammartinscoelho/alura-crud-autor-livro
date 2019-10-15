<template>
    <div id="app">
        <div id="layout">
            <a
                id="menuLink"
                href="#menu"
                class="menu-link"
            >
                <span></span>
            </a>

            <MenuSidebar />

            <div id="main">
                <transition
                    name="component-fade"
                    mode="out-in"
                >
                    <router-view />
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import MenuSidebar from "@/components/MenuSidebar.vue";

export default {
    name: "App",
    components: {
        MenuSidebar
    }
};
</script>


<style>
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.component-fade-enter-active,
.component-fade-leave-active {
    transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}

.txt-right {
    text-align: right;
}

.txt-error {
    color: red !important;
}

li.pure-menu-item a.router-link-exact-active {
    background-color: #fff !important;
    color: #000 !important;
    transition: all 0.3s;
}

.table-container {
    padding: 0 20px;
    padding-bottom: 20px;
}

table.pure-table {
    margin: 0 auto;
}

.hidden {
    display: none;
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes rotating {
    from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
.rotating {
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
}
</style>
