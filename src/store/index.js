import { createStore } from "easy-peasy";
import favoriteStore from "./favoriteStore";

import playlistStore from "./playlistStore"
import recentStore from "./recentStore";

const store = createStore({
    playlists: playlistStore,
    favorites: favoriteStore,
    recents: recentStore
})

export default store