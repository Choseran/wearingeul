<template>
    <div class="listWrap spaceBetween">
        <listmenu-compont titleMenu="할인 중인 상품" titleLink="/sale"/>

        <div class="mainContent listContent">
            <div class="mainContentTop spaceBetween">
                <select name="" id="">
                    <option value="new" selected>등록순</option>
                    <option value="best">인기순</option>
                </select>
            </div>
            <main-content-component :goodsList="saleGoods" object="sale"/>
        </div>
    </div>
</template>

<script>
import MainContentComponent from '@/components/MainContentComponent.vue'
import ListmenuCompont from '@/components/ListmenuCompont.vue'
import { saleGoods } from '@/assets/js/goodsList/sale';

export default {
    name: "DippenListView",
    components: { MainContentComponent, ListmenuCompont },
    data() {
        return {
            saleGoods: saleGoods,
        }
    }

}
</script>