const request = require("../http-client")

const fetchImdbId = async (url)  => {
    try {
        const response = await request(url)
        return response?._embedded?.["viaplay:blocks"]?.[0]?._embedded["viaplay:product"]?.content?.imdb || {} 
    } catch (error) {
        throw error
    }
}

module.exports = {
    fetchImdbId
}