<template>
    <div class="listWrap spaceBetween">
        <listmenu-compont titleMenu="베스트 상품" titleLink="/best"/>

        <div class="mainContent listContent">
            <div class="mainContentTop spaceBetween">
                <select name="" id="">
                    <option value="new" selected>등록순</option>
                    <option value="best">인기순</option>
                </select>
            </div>
            <main-content-component :goodsList="bestGoods.slice(0, 9)" object="best"/>
        </div>
    </div>
</template>

<script>
import MainContentComponent from '@/components/MainContentComponent.vue'
import ListmenuCompont from '@/components/ListmenuCompont.vue'
import { bestGoods } from '@/assets/js/goodsList/best';

export default {
    name: "DippenListView",
    components: { MainContentComponent, ListmenuCompont },
    data() {
        return {
            bestGoods: bestGoods,
        }
    }
// array 특정 수까지만 불러오기 (예를들면 8개까지만 가져오기)
// 서브메뉴 누르면 array 필터링 되게 하기
}
</script>