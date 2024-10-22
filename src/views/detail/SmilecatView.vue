<template>
    <div class="productDetailTop">
        <ul>
            <li>전체상품</li>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.17241 2.89453L7.2951 6.01723C7.55874 6.28084 7.55874 6.70824 7.2951 6.97182L4.17241 10.0945" stroke="#7A7A7A" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <li>문구</li> 
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.17241 2.89453L7.2951 6.01723C7.55874 6.28084 7.55874 6.70824 7.2951 6.97182L4.17241 10.0945" stroke="#7A7A7A" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <li>컬러 차트/스와치</li>
        </ul>
        <div class="productDetailInfo spaceBetween">
            <div class="infoLeft">
                <div class="infoBigImg">
                    <img :src="require(`@/assets/img/product1/smilecat${bigImgNum}.jpg`)" alt="smailecat">
                </div>
                <div class="infoSmallImg spaceBetween">
                    <div v-for="n in 6" :key="n" @click="detailHandler(n)" :class="{on:n == selected}">
                        <img :src="require(`@/assets/img/product1/smilecat${n}.jpg`)" alt="smailecat" >
                    </div>
                </div>
            </div>
            <div class="infoRight">
                <div class="infoTitle spaceBetween">
                    <div>
                        <h1>스마일캣 컬러스와치 명함지 50매</h1>
                        <p><em>{{ EA.toLocaleString('ko-KR') }}</em> 원</p>
                    </div>
                    <router-link to="/">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6654 23.75C13.3256 24.5235 11.675 24.5235 10.3353 23.75C8.99552 22.9765 8.17017 21.547 8.17017 20C8.17017 18.453 8.99552 17.0235 10.3353 16.25C11.675 15.4765 13.3256 15.4765 14.6654 16.25C16.0051 17.0235 16.8304 18.453 16.8304 20C16.8304 21.547 16.0051 22.9765 14.6654 23.75Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.1447 17.6645L23.7219 13.1182" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.1454 22.3389L23.7225 26.8852" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M29.6654 14.75C28.3256 15.5235 26.675 15.5235 25.3353 14.75C23.9955 13.9765 23.1702 12.547 23.1702 11C23.1702 9.45305 23.9955 8.02355 25.3353 7.25005C26.675 6.47655 28.3256 6.47655 29.6654 7.25005C31.0051 8.02355 31.8304 9.45305 31.8304 11C31.8304 12.547 31.0051 13.9765 29.6654 14.75Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M29.6654 32.75C28.3256 33.5235 26.675 33.5235 25.3353 32.75C23.9955 31.9765 23.1702 30.547 23.1702 29C23.1702 27.453 23.9955 26.0235 25.3353 25.25C26.675 24.4765 28.3256 24.4765 29.6654 25.25C31.0051 26.0235 31.8304 27.453 31.8304 29C31.8304 30.547 31.0051 31.9765 29.6654 32.75Z" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                </div>
                <div class="infoDetail">
                    <p>스마일캣 컬러 스와치 카드 (명함지 50매)</p>
                    <div class="infoText">
                        <b>구매혜택</b><p>60 포인트 적립예정</p>
                    </div>
                    <div class="infoText">
                        <b>배송비</b><p class="colorB">3,000원 (50,000 원 이상 무료배송)</p><p>도서산간 배송비 추가</p>
                    </div>
                    <div class="infoPrice">
                        <p>수량</p>
                        <div class="spaceBetween">
                            <div class="infoEA">
                                <button @click="countMinus">-</button>
                                <p>{{ count }}</p>
                                <button @click="countPlus">+</button>
                            </div>
                            <div><p><em>{{ price.toLocaleString('ko-KR') }}</em> 원</p></div>
                        </div>
                    </div>
                    <div class="infoPcs spaceBetween">
                        <p>총 상품금액(<em>{{ count }}</em>개)</p>
                        <p class="infoNum"><em>{{ price.toLocaleString('ko-KR') }}</em> 원</p>
                    </div>
                </div>
                <div class="infoBtn spaceBetween">
                    <div class="btnB">
                        <button>구매하기</button>
                    </div>
                    <div class="btnW">
                        <button>장바구니</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="productDetailContent">
        <ul>
            <li class="active"><p>상세정보</p></li>
            <li><p>구매평 (<em>0</em>)</p></li>
            <li><p>Q&A (<em>0</em>)</p></li>
        </ul>
        <div class="productDetailContentImg">
            <img src="@/assets/img/product1/smilecat-detail.jpg">
        </div>
    </div>
    <div class="productDetailReview">
        <h2>구매평<em>(0)</em></h2>
        <div class="btnWrap">
            <div class="btnW">
                <button>구매평 작성</button>
            </div>
        </div>
        <div class="detailBottomText">
            <p>등록된 구매평이 없습니다.</p>
        </div>
    </div>
    <div class="productDetailReview">
        <h2>Q&A<em>(0)</em></h2>
        <div class="btnWrap">
            <div class="btnW">
                <button>상품문의</button>
            </div>
            <div class="btnW">
                <button>1:1 문의</button>
            </div>
        </div>
        <div class="detailBottomText">
            <p>등록된 문의가 없습니다.</p>
        </div>
    </div>

    <div class="productDetailRec">
        <div>
            <h1>이 상품을 구매한 고객님이 좋아하신 상품</h1>
        </div>
        <swiper class="mySwiper goodsContent"
            :modules="recModules"
            :autoplay="recAutoplay"
            :speed="1500"
            :loop="true"
            :slidesPerView="4"  
            :slidesPerGroup="4"
            :spaceBetween="20"
        >
            <swiper-slide v-for="(goods, index) in recGoods" :key="goods">
                <RouterLink to="/">
                    <div class="goodsImg" v-if="index != 3">
                        <img :src="require(`@/assets/img/product1/rec/product${index + 1}_hover.jpg`)" :alt="`${goods.title}`">
                        <img :src="require(`@/assets/img/product1/rec/product${index + 1}.jpg`)" :alt="`${goods.title}`">
                    </div>
                    <div class="goodsImg" v-else-if="index = 3">
                        <img :src="require(`@/assets/img/product1/rec/product${index + 1}_hover.jpg`)" :alt="`${goods.title}`">
                        <img :src="require(`@/assets/img/product1/rec/product${index + 1}.gif`)" :alt="`${goods.title}`">
                    </div>
                </RouterLink>
                <div class="goodsText">
                    <RouterLink to="/" class="goodsTitle">{{ goods.title }}</RouterLink>
                    <div>
                        <RouterLink to="/" class="goodsPrice">{{ goods.price }}</RouterLink>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper';
export default {
    name: "DetailView",
    components: {
        Swiper,
        SwiperSlide,
    },
    data(){
        return{
            count: 1,
            EA: 6000,
            price: 6000,
            bigImgNum: 1,
            selected: 1,
            recAutoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            recGoods: [
                { title: '[단품] 네 컷 사진 컬러스와치 Impression 임프레션 30매 2종', price: '6,000 원'},
                { title: '앨리스의 물약 컬러 스와치 A5', price: '5,000 원'},
                { title: '즉석사진 컬러스와치 Impression 임프레션 50매', price: '6,000 원'},
                { title: '앨리스 (이상한 나라의 앨리스) 잉크 30ml', price: '23,000 원'},
                { title: '잉크 컬러 스와치북 A5 (노트형 / Impression)', price: '10,000 원'},
                { title: '잉크 컬러스와치 Impression 임프레션 04_16 Rounds', price: '5,000 원'},
                { title: '잉크 컬러스와치 Impression 임프레션 02_12 Vials', price: '5,000 원'},
                { title: '잉크 컬러스와치 Impression 임프레션 01_10 Ink Bottle', price: '5,000 원'},
            ]
        }
    },
    methods:{
        countMinus(){
            if(this.count > 1){
                this.count--;
            }
            this.price = this.count*this.EA;
        },
        countPlus(){
            this.count++;
            this.price = this.count*this.EA;
        },
        detailHandler(n) {
            this.bigImgNum = n;
            this.selected = n;
        }
    },
    setup() {
        return {
            recModules: [Autoplay],
        };
    }
}
</script>