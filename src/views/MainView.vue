<template>
    <swiper class="mySwiper bannerSwiper"
        :pagination="{clickable: true}"
        :modules="bannerModules"
        :autoplay="bannerAutoplay"
        :speed="2000"
        :loop="true"
        
    >
        <swiper-slide v-for="n in 7" :key="n">
            <RouterLink to="/">
                <img :src="require(`@/assets/img/banner${n}.jpg`)" alt="">
            </RouterLink>
        </swiper-slide>

        <div v-if="paginationConfig" class="swiper-pagination"></div>
    </swiper>

    <div class="mainContent">
        <div class="mainContentTop spaceBetween">
            <p>베스트 상품</p>
            <router-link to="/best">더보기</router-link>
        </div>
        <main-content-component :goodsList="bestGoods.slice(0, 8)" object="best"/>
    </div>
    <div class="mainContent">
        <div class="mainContentTop spaceBetween">
            <p>신상품</p>
            <router-link to="/new">더보기</router-link>
        </div>
        <main-content-component :goodsList="newGoods.slice(0, 8)" object="new"/>
    </div>

    
    <div class="mainContent saleContent">
        <div class="mainContentTop spaceBetween">
            <p>할인 중인 상품</p>
            <router-link to="/sale">더보기</router-link>
        </div>

        <div class="mainContentBottom spaceBetween">
            <swiper class="mySwiper saleSwiper goodsContent"
                :modules="saleModules"
                :autoplay="saleAutoplay"
                :speed="1500"
                :loop="true"
                :slidesPerView="4"  
                :slidesPerGroup="4"
                :spaceBetween="20"
            >
                <swiper-slide v-for="(goods, index) in saleGoods.slice(0, 8)" :key="goods">
                    <RouterLink to="/">
                        <div class="goodsImg">
                            <div v-if="goods.tag" class="goodsTag">
                                <span v-for="goodsTag in goods.tag" :key="goodsTag" :class="goodsTag">{{ goodsTag }}</span>
                            </div>
                            <img :src="require(`@/assets/img/sale${index + 1}_hover.jpg`)" :alt="`${goods.title}`">
                            <img :src="require(`@/assets/img/sale${index + 1}.jpg`)" :alt="`${goods.title}`">
                        </div>
                    </RouterLink>
                    <div class="goodsText">
                        <RouterLink to="/" class="goodsTitle">{{ goods.title }}</RouterLink>
                        <div>
                            <RouterLink to="/" class="goodsSale">{{ goods.sale }}</RouterLink>
                            <RouterLink to="/" class="goodsPrice">{{ goods.price }}</RouterLink>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>

    <div class="mainContent collaboContent">
        <div class="mainContentTop spaceBetween">
            <p>콜라보 상품</p>
            <router-link to="/">더보기</router-link>
        </div>

        <div class="mainContentBottom spaceBetween">
            <div class="collaboLeft">
                <collabo-content-component
                    collaboTitle="하루만 네가 되고 싶어"
                    collaboCompany="네이버 웹툰"
                    collaboNum="1"
                    :collaboGoods="collabo1"
                />
            </div>
            <div class="collaboRight">
                <collabo-content-component
                    collaboTitle="죽음에 관하여"
                    collaboCompany="네이버 웹툰"
                    collaboNum="2"
                    :collaboGoods="collabo2"
                />
            </div>
        </div>
    </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import MainContentComponent from '@/components/MainContentComponent.vue';
import CollaboContentComponent from '@/components/CollaboContentComponent.vue';
import { bestGoods } from '@/assets/js/goodsList/best';
import { newGoods } from '@/assets/js/goodsList/new';
import { saleGoods } from '@/assets/js/goodsList/sale';

export default {
    name: 'MainView',
    components: {
        Swiper,
        SwiperSlide,
        MainContentComponent,
        CollaboContentComponent
    },
    data() {
        return {
            bannerAutoplay: {
                delay: 5500,
                disableOnInteraction: false
            },
            saleAutoplay: {
                delay: 3500,
                disableOnInteraction: false
            },
            bestGoods: bestGoods,
            newGoods: newGoods,
            saleGoods: saleGoods,
            collabo1: [
                {i: 1, goods: "메데이아 벨리아르 깃펜 펜레스트 세트", price: "30,000 원"},
                {i: 2, goods: "프시케 폴리 깃펜 펜레스트 세트", price: "30,000 원"}
            ],
            collabo2: [
                {i: 1, goods: "페이퍼 인센스 세트", price: "33,000 원"},
                {i: 2, goods: "책끝 종이 북마크", price: "25,000 원"}
            ]
        }
    },
    setup() {
        return {
            bannerModules: [Pagination, Autoplay],
            saleModules: [Autoplay],
        };
    }
}
</script>
