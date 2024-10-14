<template>
    <div class="listWrap spaceBetween">
        <listmenu-compont titleMenu="신상품" titleLink="/new"/>

        <div class="mainContent listContent">
            <div class="mainContentTop spaceBetween">
                <select name="" id="">
                    <option value="new" selected>등록순</option>
                    <option value="best">인기순</option>
                </select>
            </div>
            <main-content-component :goodsList="newGoods" object="new"/>
        </div>
    </div>
</template>

<script>
import MainContentComponent from '@/components/MainContentComponent.vue'
import ListmenuCompont from '@/components/ListmenuCompont.vue'
import { newGoods } from '@/assets/js/goodsList/new';

export default {
    name: "DippenListView",
    components: { MainContentComponent, ListmenuCompont },
    data() {
        return {
            newGoods: newGoods,
        }
    }

}
</script>