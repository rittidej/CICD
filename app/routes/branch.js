const express = require('express')
const router = express.Router()
const branch = require('../models/branch')

function getReqBody(body) {
    const name = body.name
    return { name }
}

router.get('/', async (_, res) => {
    const data = await branch.findAll()
    res.json({ data })
})

router.post('/insert', async (req, res) => {
    const body = getReqBody( req.body )
    const data = await branch.create( body )
    res.json({ data })
})

module.exports = {
    branchRouter: router,
    getReqBody
}