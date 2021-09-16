const { findMovie, findVideos } = require("../../utils/themoviedb-api")
const { fetchImdbId } = require("../../utils/viaplay-api")

const genYoutubeUrl = (id) => id ? `https://www.youtube.com/watch?v=${id}` : null

class TrailerServiceController {
    async getMovieTrailer(req, res) {
        try {
            const { input } = req.body
            if (!input || !input?.trim()) return res.status(400).json({ msg: "input is not valid", success: false })
            
            const { id: imdbId } = await fetchImdbId(input)
            
            if (!imdbId) return res.status(400).json({ msg: "imdb id not found", success: false })

            const { id: movieId } = await findMovie(imdbId)
            let { results: vedios } = await findVideos(movieId)

            vedios = vedios.filter(video => video.type === "Trailer")
            if (!vedios.length) return res.status(400).json({ msg: `no vedio found for the imdbId: ${imdbId}`, success: false })

            return res.status(200).json({ trailerUrl: genYoutubeUrl(vedios.pop().key), success: true })
        } catch (error) {
            return res.status(500).json({ msg: error.message, success: false })
        }
    }
}

module.exports = TrailerServiceController