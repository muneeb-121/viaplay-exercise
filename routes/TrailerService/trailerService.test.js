const app = require("../../index") 
const supertest = require("supertest")
const request = supertest(app)

it("Get trailer url success", done => {
    request.post('/trailers').send({
        input: "https://content.viaplay.se/pc-se/film/arrival-2016"
    }).then(response =>{
        expect(response.status).toBe(200)
        expect(response.body.trailerUrl).toBeTruthy()
        done()
    })
})

it("Get trailer url error if input empty string", done => {
    request.post('/trailers').send({
        input: ""
    }).then(response =>{
        expect(response.status).not.toBe(200)
        expect(response.body.success).toBeFalsy()
        done()
    })
})

it("Get trailer url error if input is null", done => {
    request.post('/trailers').send({
        input: null
    }).then(response =>{
        expect(response.status).not.toBe(200)
        expect(response.body.success).toBeFalsy()
        done()
    })
})