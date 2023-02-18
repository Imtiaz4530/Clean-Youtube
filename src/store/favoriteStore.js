import { action, persist } from "easy-peasy";

const favoriteStore = persist({
    data: [],
    addToFavorite: action((state, payload) => {
        if (state.data.includes(payload)) {
            return
        }
        state.data.push(payload)
    }),
    removeToFavorite: action((state,  payload) => {
        state.data = state.data.filter(id => id !== payload)
    })

})    

export default favoriteStore