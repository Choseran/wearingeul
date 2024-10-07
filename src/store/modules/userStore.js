import router from "@/router";

const userStore = {
    state: {
        userId: '',
        userName: '',
        token: '',
    },
    mutations:{
        login: function(state, payload){
            state.userId = payload.userId
            state.userName = payload.userName
            state.token = payload.token
        },
        loginCheck: function(state){
            if(!state.token){
                router.pusj({
                    name: 'LoginView'
                }).catch(error => {
                    console.log(error);
                })
            }
        }
    }
}
// https://developerjournal.tistory.com/15
