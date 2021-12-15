<template>
    <nav class="navBar">
        <ul class="navBar_link">
            <li>
                <router-link :to="{ name: 'home'}">
                    Home
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'about'}">
                    About
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style scoped>
.navBar {
    padding: 5px;
    background-color: #fff;
}
.navBar_link {
    display: flex;
    margin: 0;
}
li {
    margin: 10px;
    list-style-type: none;
    font-size: 17px;
}
a {
    text-decoration: none;
    color: #555555;
}
</style>
