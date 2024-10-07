<template>
    <div class="detailWrap">
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
                        <img src="@/assets/img/product1/smilecat1.jpg" alt="">
                    </div>
                    <div class="infoSmallImg spaceBetween">
                        <div v-for="n in 6" :key="n" >
                            <img :src="require(`@/assets/img/product1/smilecat${n}.jpg`)" alt="smailecat">
                        </div>
                    </div>
                    <!-- https://pridiot.tistory.com/162 -->
                </div>
                <div class="infoRight">
                    <div class="infoTitle spaceBetween">
                        <div>
                            <h1>스마일캣 컬러스와치 명함지 50매</h1>
                            <p><em>6,000</em> 원</p>
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
                                <div><p><em>{{ price }}</em> 원</p></div>
                            </div>
                        </div>
                        <div class="infoPcs spaceBetween">
                            <p>총 상품금액(<em>{{ count }}</em>개)</p>
                            <p class="infoNum"><em>{{ price }}</em> 원</p>
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
        <detail-bottom-component/>
        <detail-bottom-component/>
    </div>
</template>

<script>
import DetailBottomComponent from '@/components/DetailBottomComponent.vue'
export default {
  components: { DetailBottomComponent },
    name: "DetailView",
    data(){
        return{
            count: 1,
            EA: 6000,
            price: 6000,
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
        }
    }
}
</script>