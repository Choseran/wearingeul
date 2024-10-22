<template>
    <div class="mainContentBottom">
        <ul class="goodsContent mainGoodsContent">
            <template v-for="(goods, index) in goodsList" :key="goods">
                <li>
                    <RouterLink to="/detail/1">
                        <div class="goodsImg">
                            <div v-if="goods.tag" class="goodsTag">
                                <span v-for="goodsTag in goods.tag" :key="goodsTag" :class="goodsTag">{{ goodsTag }}</span>
                            </div>
                            <img :src="require(`@/assets/img/${object}${index + 1}_hover.jpg`)" :alt="`${goods.title}`">
                            <img :src="require(`@/assets/img/${object}${index + 1}.jpg`)" :alt="`${goods.title}`">
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
            </template>
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