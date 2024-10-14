import router from "@/router";

const userStore = {
    state: {
        userId: '',
        userName: null,
    },
    getter: {
        isLoggedIn: (state) => {
            return state.userName != null;
        }
    },
    actions: {},
}
// https://developerjournal.tistory.com/15
