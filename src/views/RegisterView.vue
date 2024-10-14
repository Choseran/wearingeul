<template>
    <div class="registerWrap">
        <h1>회원가입</h1>
        <form>
            <div class="registerInput">
                <p class="required">닉네임</p>
                <input type="text" placeholder="닉네임을 입력해주세요" required>
            </div>
            <div class="registerInput">
                <p class="required">아이디</p>
                <input type="text" placeholder="아이디를 입력해주세요" required>
            </div>
            <div class="registerInput">
                <p class="required">비밀번호</p>
                <input type="password" placeholder="비밀번호를 입력해주세요" required>
            </div>
            <div class="registerInput">
                <p class="required">비밀번호 확인</p>
                <input type="password" placeholder="비밀번호를 동일하게 입력해주세요" required>
            </div>
            <div class="registerInput">
                <p class="required">이름</p>
                <input type="text" placeholder="이름을 입력해주세요" required>
            </div>
            <div class="registerInput">
                <p>주소</p>
                <input type="text" placeholder="주소를 입력해주세요">
            </div>
            <div class="registerInput">
                <p class="required">연락처</p>
                <input type="text" placeholder="연락처를 입력해주세요" required>
            </div>
            <div class="registerBtn btnB">
                <button>가입하기</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "RegisterView"
}
</script>