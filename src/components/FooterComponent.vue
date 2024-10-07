<template>
    <footer>
        <div class="footerWrap">
            <div class="footerTop spaceBetween">
                <ul>
                    <li>
                        <router-link to="/">공지사항</router-link>
                    </li>
                    <li>
                        <router-link to="/">이용약관</router-link>
                    </li>
                    <li>
                        <router-link to="/">개인정보처리방침</router-link>
                    </li>
                </ul>
                <div>
                    <select name="language" id="">
                        <option selected disabled>Language</option>
                        <option value="ko">한국어</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
            <div class="footerText">
                <p>
                    주식회사 <i>에이블디자인 엔터테인먼트</i> | 경기도 고양시 일산동구 중앙로1261번길 77 메트로폴리스 301호<br/>
                    CEO : 안동혁 | 사업자등록번호 : 812-87-00947│통신판매업 신고번호 : 제 2019-고양일산동-1425호 | [사업자정보확인]
                </p>
            </div>
            <div class="footerText">
                <p>
                    입금계좌 : 우리은행 1005-803-658720 (주식회사 에이블디자인 엔터테인먼트)<br/>
                    Tel : <i>031-969-0117</i> │ Fax : <i>031-962-0119</i> │ E-Mail : <i>ceo@abledesignent.com</i> │ 전화 상담 : <i>10:00 - 17:00 (주말/공휴일 제외)</i>
                </p>
            </div>
            <p>Copyright ⓒ 2024 Wearingeul 글입다 All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name:"FooterComponent",
}
</script>