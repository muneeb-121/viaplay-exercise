const request = require("../http-client")

const findMovie = async (imdbId)  => {
    const { THE_MOVIE_DB_APIKEY, THE_MOVIE_DB_API_URL } = process.env
    try {
        const { movie_results: movies } = await request(`${THE_MOVIE_DB_API_URL}/find/${imdbId}?api_key=${THE_MOVIE_DB_APIKEY}&external_source=imdb_id`)
        if (!movies?.length) throw new Error(`no movie found for imdbId: ${imdbId}`)
        return movies[0]
    } catch (error) {
        throw error
    }
}

const findVideos = (videoId) => {
    const { THE_MOVIE_DB_APIKEY, THE_MOVIE_DB_API_URL } = process.env
    return request(`${THE_MOVIE_DB_API_URL}/movie/${videoId}/videos?api_key=${THE_MOVIE_DB_APIKEY}`)
}

module.exports = {
    findMovie,
    findVideos
}