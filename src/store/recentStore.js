import { action, persist } from "easy-peasy";

const recentStore = persist({
    data: [],
    addToRecent: action((state, payload) => {
        if (state.data.includes(payload)) {
            state.data = state.data.filter((ids) => ids !== payload)
            console.log("Same playlist do its came first");
        }
        state.data.unshift(payload)
        state.data = state.data.splice(0, 5)
    })
})    

export default recentStore