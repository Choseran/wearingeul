<!-- <template v-if="to.meta.layout ? to.meta.layout : 'MainLayout'"> -->
<template>
    <div class="wrap">
        <header-component/>
        <MainLayout/>
        <footer-component/>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import MainLayout from './MainLayout.vue';
export default {
    name: 'BaseLayout',
    components: {
        MainLayout,
        HeaderComponent,
        FooterComponent,
    }
}
</script>
