<template>
    <div class="wrap">
        <header-component/>
        <component :is="layoutComponent"/>
        <footer-component/>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import MainLayout from './MainLayout.vue';
import ListLayout from './ListLayout.vue';
export default {
    name: 'BaseLayout',
    components: {
        MainLayout,
        ListLayout,
        HeaderComponent,
        FooterComponent,
    },
    computed: {
        layoutComponent(){
            return this.$route.meta.layout || 'MainLayout';
        }
    }
}
</script>
