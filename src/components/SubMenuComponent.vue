<template>
    <div class="submenuWrap">
        <div class="submenuList" @mouseleave="hideMenu" >
            <ul class="submenuPart spaceBetween">
                <li v-for="menu in menuTitle" :key="menu">
                    <div class="submenuTitle">
                        <router-link :to="menu.titleLink">
                            <p>{{ menu.title }}</p>
                        </router-link>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.95402 3.99072L12.1585 9.19522C12.5979 9.63457 12.5979 10.3469 12.1585 10.7862L6.95402 15.9907" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <ul class="detailMenu">
                        <li v-for="submenu in menu.menuList" :key="submenu">
                            <router-link to="/">{{ submenu }}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SubmenuComponent",
    props:{
        menuTitle: Array,
        submenu: String,
    },
    methods: {
        hideMenu() {
            this.$emit('hideMenu');
        }
    }
}
</script>