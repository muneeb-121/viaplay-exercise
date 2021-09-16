const express = require("express")
const TrailerServiceController = require("../../controllers/TrailerService")

const router = express.Router()
const trailerServiceController = new TrailerServiceController()

router.post('/', trailerServiceController.getMovieTrailer)

module.exports = router;
