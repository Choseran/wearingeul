<template>
    <div class="listWrap spaceBetween">
        <listmenu-compont titleMenu="딥펜/만년필" titleLink="/dip-pen" :listMenu="deppenList"/>

        <div class="mainContent listContent">
            <div class="mainContentTop spaceBetween">
                <select name="" id="">
                    <option value="new" selected>등록순</option>
                    <option value="best">인기순</option>
                </select>
            </div>
            <main-content-component :goodsList="deppenGoods.slice(0, 9)" object="deppen-product"/>
        </div>
    </div>
</template>

<script>
import MainContentComponent from '@/components/MainContentComponent.vue'
import ListmenuCompont from '@/components/ListmenuCompont.vue'
import { deppenGoods } from '@/assets/js/goodsList/deppen';
import { deppenList } from '@/assets/js/listMenu/deppen';

export default {
    name: "DippenListView",
    components: { MainContentComponent, ListmenuCompont },
    data() {
        return {
            deppenGoods: deppenGoods,
            deppenList: deppenList,
        }
    }

}
</script>