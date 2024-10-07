<template>
    <div class="listMenu">
        <router-link :to="titleLink" class="titleMenu">{{ titleMenu }}</router-link>
        <ul>
            <li v-for="menu in listMenu" :key="menu">
                <router-link :to="menu.link" class="listMenu">{{ menu.title }}</router-link>
                <ul v-if="menu.submenu" class="listSubmenu">
                    <li v-for="sub in menu.submenu" :key="sub">
                        <router-link :to="sub.link">{{ sub.title }}</router-link>
                    </li>
                </ul>
            </li>                
        </ul>
    </div>
</template>

<script>
export default {
    name: "ListmenuComponent",
    props: {
        titleMenu: String,
        titleLink: String,
        listMenu: Array
    }
}
</script>