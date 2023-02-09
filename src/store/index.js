import { createStore } from "easy-peasy";

import playlistStore from "./playlistStore"

const store = createStore({
    playlists: playlistStore
})

export default store