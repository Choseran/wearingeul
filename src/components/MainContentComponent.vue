<template>
    <div class="mainContentBottom spaceBetween">
        <ul class="goodsContent mainGoodsContent spaceBetween">
            <li v-for="goods in goodsList" :key="goods">
                <RouterLink to="/detail">
                    <div class="goodsImg">
                        <img :src="require(`@/assets/img/${object}${goods.i}_hover.jpg`)" :alt="`${goods.title}`">
                        <img :src="require(`@/assets/img/${object}${goods.i}.jpg`)" :alt="`${goods.title}`">
                    </div>
                </RouterLink>
                <div class="goodsText" v-if="goods.sale">
                    <RouterLink to="/detail" class="goodsTitle">{{ goods.title }}</RouterLink>
                    <div>
                        <RouterLink to="/detail" class="goodsSale">{{ goods.sale }}</RouterLink>
                        <RouterLink to="/detail" class="goodsPrice">{{ goods.price }}</RouterLink>
                    </div>
                </div>
                <div class="goodsText" v-if="!goods.sale">
                    <RouterLink to="/detail" class="goodsTitle">{{ goods.title }}</RouterLink>
                    <RouterLink to="/detail" class="goodsPrice">{{ goods.price }}</RouterLink>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MainContentComponent",
    props: {
        contentTitle: String,
        goodsList: Array,
        object: String,
    }
}
</script>