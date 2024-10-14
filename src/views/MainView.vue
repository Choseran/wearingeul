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
        <main-content-component :goodsList="bestGoods" object="best"/>
    </div>
    <div class="mainContent">
        <div class="mainContentTop spaceBetween">
            <p>신상품</p>
            <router-link to="/new">더보기</router-link>
        </div>
        <main-content-component :goodsList="newGoods" object="new"/>
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
                <swiper-slide v-for="goods in saleGoods" :key="goods">
                    <RouterLink to="/">
                        <div class="goodsImg">
                            <div v-if="goods.class" class="goodsTag">
                                <span v-for="goodsClass in goods.class" :key="goodsClass" :class="goodsClass">{{ goodsClass }}</span>
                            </div>
                            <img :src="require(`@/assets/img/sale${goods.i}_hover.jpg`)" :alt="`${goods.title}`">
                            <img :src="require(`@/assets/img/sale${goods.i}.jpg`)" :alt="`${goods.title}`">
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
                <div class="collaboTop">
                    <div class="collaboImg">
                        <RouterLink to="/">
                            <img src="@/assets/img/collabo1.jpg">
                        </RouterLink>
                    </div>
                    <div class="collaboTitle">
                        <router-link to="/">하루만 네가 되고 싶어</router-link>
                        <router-link to="/">네이버 웹툰</router-link>
                    </div>
                </div>
                <div class="collaboBottom">
                    <div>
                        <div>
                            <router-link to="/" class="collaboProduct">
                                <img src="@/assets/img/collabo1-1.jpg" alt="">
                            </router-link>
                        </div>
                        <div class="collaboProductTitle">
                            <div>
                                <router-link to="/">메데이아 벨리아르 깃펜 펜레스트 세트</router-link>
                                <router-link to="/">30,000 원</router-link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <router-link to="/" class="collaboProduct">
                                <img src="@/assets/img/collabo1-2.jpg" alt="">
                            </router-link>
                        </div>
                        <div class="collaboProductTitle">
                            <div>
                                <router-link to="/">프시케 폴리 깃펜 펜레스트 세트</router-link>
                                <router-link to="/">30,000 원</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="collaboRight">
                
                <div class="collaboTop">
                    <div class="collaboImg">
                        <RouterLink to="/">
                            <img src="@/assets/img/collabo2.jpg">
                        </RouterLink>
                    </div>
                    <div class="collaboTitle">
                        <router-link to="/">죽음에 관하여</router-link>
                        <router-link to="/">네이버 웹툰</router-link>
                    </div>
                </div>
                <div class="collaboBottom">
                    <div>
                        <div>
                            <router-link to="/" class="collaboProduct">
                                <img src="@/assets/img/collabo2-1.jpg" alt="">
                            </router-link>
                        </div>
                        <div class="collaboProductTitle">
                            <div>
                                <router-link to="/">페이퍼 인센스 세트</router-link>
                                <router-link to="/">33,000 원</router-link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <router-link to="" class="collaboProduct">
                                <img src="@/assets/img/collabo2-2.jpg" alt="">
                            </router-link>
                        </div>
                        <div class="collaboProductTitle">
                            <div>
                                <router-link to="/">책끝 종이 북마크</router-link>
                                <router-link to="/">25,000 원</router-link>
                            </div>
                        </div>
                    </div>
                </div>
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
import { bestGoods } from '@/assets/js/goodsList/best';
import { newGoods } from '@/assets/js/goodsList/new';
import { saleGoods } from '@/assets/js/goodsList/sale';

export default {
    name: 'MainView',
    components: {
        Swiper,
        SwiperSlide,
        MainContentComponent,
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
            saleGoods: saleGoods
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
