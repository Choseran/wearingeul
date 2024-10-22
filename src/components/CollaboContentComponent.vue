<template>
    <div class="collaboTop">
        <div class="collaboImg">
            <RouterLink to="/">
                <img :src="require(`@/assets/img/collabo${collaboNum}.jpg`)">
            </RouterLink>
        </div>
        <div class="collaboTitle">
            <router-link to="/">{{ collaboTitle }}</router-link>
            <router-link to="/">{{ collaboCompany }}</router-link>
        </div>
    </div>
    <div class="collaboBottom">
        <div v-for="collabo in collaboGoods" :key="collabo">
            <div>
                <router-link to="/" class="collaboProduct">
                    <img :src="require(`@/assets/img/collabo${collaboNum}-${collabo.i}.jpg`)" alt="">
                </router-link>
            </div>
            <div class="collaboProductTitle">
                <div>
                    <router-link to="/">{{ collabo.goods }}</router-link>
                    <router-link to="/">{{ collabo.price }}</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CollaboContentComponent",
    props: {
        collaboTitle: String,
        collaboCompany: String, 
        collaboNum: Number,
        collaboGoods: Array
    }
}
</script>