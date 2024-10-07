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
            <main-content-component :goodsList="deppenGoods" object="deppen-product"/>
        </div>
    </div>
</template>

<script>
import MainContentComponent from '@/components/MainContentComponent.vue'
import ListmenuCompont from '@/components/ListmenuCompont.vue'
export default {
    name: "DippenListView",
    components: { MainContentComponent, ListmenuCompont },
    data() {
        return {
            deppenGoods: [
                { i: 1, title: '글입다 자기만의 방 (버지니아 울프) 잉크 30ml', price: '23,000 원'},
                { i: 2, title: '[모음전] Wearingeul 글입다 문학 잉크 모음', price: '23,000 원'},
                { i: 3, title: '글입다 젊은 왕 (오스카 와일드) 잉크 30ml', price: '23,000 원'},
                { i: 4, title: '글입다 잉크 전용 Impression 임프레션 페이퍼 낱장 8절', price: '8,000 원'},
                { i: 5, title: 'Impression 임프레션 드로잉북 B5 (40매)', price: '12,000 원'},
                { i: 6, title: 'Impression 임프레션 드로잉북 A5 (40매)', price: '9,000 원'},
                { i: 7, title: '글입다 네 사람의 서명 (코난 도일) 잉크 30ml', price: '23,000 원'},
                { i: 8, title: '글입다 한 방울 잉크 컬러스와치 링 타입(100매)', price: '10,000 원'},
                { i: 9, title: '글입다 1984 (조지 오웰) 잉크 30ml', price: '23,000 원'},
            ],
            deppenList: [
                {
                    title: "잉크", link: "/dip-pen", submenu: [
                    {title: "한국문학 잉크", link: "/dip-pen"},
                    {title: "세계문학 잉크", link: "/dip-pen"},
                    {title: "세계신화 잉크", link: "/dip-pen"},
                    {title: "무펄 잉크", link: "/dip-pen"},
                    {title: "펄 잉크", link: "/dip-pen"},
                    {title: "글리터 포션", link: "/dip-pen"}
                ]},
                {title: "딥펜/만년필", link: "/dip-pen"},
                {title: "펜파우치", link: "/dip-pen"}
            ]
        }
    }

}
</script>