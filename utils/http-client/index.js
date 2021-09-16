const fetch = require("node-fetch")

async function request(url, opts = {}) {
    try {
        const response = await fetch(url, opts);
        return await response.json()
    } catch (error) {
        throw error
    }
}

module.exports = request