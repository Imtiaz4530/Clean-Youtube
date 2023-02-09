import { action, persist, thunk } from "easy-peasy";
import getPlaylist from "../api";

const playlistStore = persist({
    data: {},
    loading: false,
    error: '',
    addPlaylist: action((state, payload) => {
        state.data[payload.playlistId] = payload 
    }),
    addLoading: action((state, payload) => {
        state.loading = payload
    }),
    addError: action((state, payload) => {
        state.error = payload
    }),
    getPlaylist: thunk(async(actions, payload, {getState}) => {
        if (getState().data[payload]) {
            console.log('API CALL CANCELED');
            return;
        }
        
        actions.addLoading(true)
        
        try {
            const playlists = await getPlaylist(payload)
            actions.addPlaylist(playlists)
            console.log('API CALL CANCELED');
            action.addError('')
        } catch (e) {
            addError(e?.response?.data?.error?.message || `Something went wrong`)
        } finally {
            actions.addLoading(false)
        }
        
    })
})

export default playlistStore