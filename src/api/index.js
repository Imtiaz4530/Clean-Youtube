import axios from "axios"


const key = 'AIzaSyAdTJLpvZwmMm23xb03HlzJh4_Rfxsit6E'

const getPlaylistItem = async (playlistId, pageToken = '', result= [] ) => {
    const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`

    const {data} = await axios.get(URL)
    result = [...result, ...data.items]

    if (data.nextPageToken) {
        result = getPlaylistItem(playlistId, data.nextPageToken, result)
    }

    return result 
}

const getPlaylist = async (playlistId) => { 
    const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=contentDetails%2C%20id%2C%20snippet&id=${playlistId}&key=${key}`
    const {data} = await axios.get(URL)
    const {channelId, channelTitle, thumbnails, title: playlistTitle, description: playlistDescription} = data?.items[0]?.snippet

    let playlistItem = await getPlaylistItem(playlistId)

    playlistItem = playlistItem.map((item) => {
        const {title, thumbnails: {medium}, description} = item?.snippet

        return {
            title, thumbnail: medium, description, contentDetails: item.contentDetails
        }
    })

    return {
        channelId, channelTitle, playlistThumbnail: thumbnails.default, playlistTitle, playlistDescription, playlistItem, playlistId
    }
}

export default getPlaylist