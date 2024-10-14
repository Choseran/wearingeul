<template>
    <div class="mainContentBottom spaceBetween">
        <ul class="goodsContent mainGoodsContent spaceBetween">
            <li v-for="goods in goodsList" :key="goods">
                <RouterLink to="/detail/1">
                    <div class="goodsImg">
                        <div v-if="goods.class" class="goodsTag">
                            <span v-for="goodsClass in goods.class" :key="goodsClass" :class="goodsClass">{{ goodsClass }}</span>
                        </div>
                        <img :src="require(`@/assets/img/${object}${goods.i}_hover.jpg`)" :alt="`${goods.title}`">
                        <img :src="require(`@/assets/img/${object}${goods.i}.jpg`)" :alt="`${goods.title}`">
                    </div>
                </RouterLink>
                <div class="goodsText" v-if="goods.sale">
                    <RouterLink to="/detail/1" class="goodsTitle">{{ goods.title }}</RouterLink>
                    <div>
                        <RouterLink to="/detail/1" class="goodsSale">{{ goods.sale }}</RouterLink>
                        <RouterLink to="/detail/1" class="goodsPrice">{{ goods.price }}</RouterLink>
                    </div>
                </div>
                <div class="goodsText" v-if="!goods.sale">
                    <RouterLink to="/detail/1" class="goodsTitle">{{ goods.title }}</RouterLink>
                    <RouterLink to="/detail/1" class="goodsPrice">{{ goods.price }}</RouterLink>
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