<template>
    <swiper class="mySwiper bannerSwiper"
        :slidesPerView="1.576"
        :centeredSlides="true"
        :spaceBetween="20"
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
            <router-link to="/">더보기</router-link>
        </div>
        <main-content-component :goodsList="bestGoods" object="best"/>
    </div>
    <div class="mainContent">
        <div class="mainContentTop spaceBetween">
            <p>신상품</p>
            <router-link to="/">더보기</router-link>
        </div>
        <main-content-component :goodsList="newGoods" object="new"/>
    </div>

    
    <div class="mainContent saleContent">
        <div class="mainContentTop spaceBetween">
            <p>할인 중인 상품</p>
            <router-link to="/">더보기</router-link>
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
            bestGoods: [
                { i: 1, title: '스마일캣 컬러스와치 명함지 50매', price: '6,000 원'},
                { i: 2, title: '글입다 자기만의 방 (버지니아 울프) 잉크 30ml', price: '23,000 원'},
                { i: 3, title: '글입다 행복한 왕자 (오스카 와일드) 잉크 30ml', price: '23,000 원'},
                { i: 4, title: '글입다 젊은 왕 (오스카 와일드) 잉크 30ml', price: '23,000 원'},
                { i: 5, title: '글입다 나이팅게일과 장미(오스카 와일드) 잉크 30ml', price: '23,000 원'},
                { i: 6, title: '글입다 한 방울 잉크 컬러스와치 링 타입(100매)', price: '23,000 원'},
                { i: 7, title: '[멤버십 전용] 로빈슨 크루소 + Frost 세트 할인', price: '판매가 비공개'},
                { i: 8, title: '엔키(Enki) 세계 신화 잉크 30ml', price: '23,000 원'},
            ],
            newGoods: [
                { i: 1, title: '글입다 오페라의 유령 메탈 바인더 클립', price: '20,000 원'},
                { i: 2, title: 'Impression 임프레션 드로잉북 B5 (40매)', price: '12,000 원'},
                { i: 3, title: '글입다 1984 (조지 오웰) 잉크 30ml', price: '23,000 원'},
                { i: 4, title: '[단품] 글입다 트레싱 컬러차트 명함지 50매 2종', price: '8,000 원'},
                { i: 5, title: '글입다 지구에서 달까지(쥘 베른) 잉크 30ml', price: '23,000 원'},
                { i: 6, title: '글입다 바스커빌가의 개 (코난 도일) 잉크 30ml', price: '23,000 원'},
                { i: 7, title: 'Impression 임프레션 드로잉북 A5 (40매)', price: '9,000 원'},
                { i: 8, title: '[단품] 책 속의 책 오브제 북 2종', price: '24,800 원', sale: '35,000 원'},
            ],
            saleGoods: [
                { i: 1, title: '동주의 소포 (윤동주 연필세트+포스트잇+미니북+필사노트)', price: '19,800 원', sale: '21,000 원'},
                { i: 2, title: '[Synav] 고려청자 버킷백', price: '138,000 원', sale: '170,000 원'},
                { i: 3, title: '[세트] 책끝 메탈 북마크 책갈피 세계문학전집 20종 세트', price: '89,800 원', sale: '100,000 원'},
                { i: 4, title: '[세트] 시의 조각들 우표형 마스킹테이프 5종 세트', price: '32,800 원', sale: '35,000 원'},
                { i: 5, title: '[세트] 내가 사랑한 문장들 떡메모지 6종 세트', price: '22,800 원', sale: '24,000 원'},
                { i: 6, title: '[세트] 자체검열 마스킹테이프 7mm 8종 (A/B세트)', price: '11,400 원', sale: '12,000 원'},
                { i: 7, title: '[세트] 시인의 편지(편지지+봉투) A세트 / B세트', price: '27,800 원', sale: '30,000 원'},
                { i: 8, title: '[세트] 시를 담아 보냅니다, 문학 카드 5종 세트', price: '6,750 원', sale: '7,500 원'},
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
