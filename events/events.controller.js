const express = require('express')
const router = express.Router()
const eventService = require('./events.service')

router.get('/:eventId', getByIdCB)
router.get('/list/:userId', getListByUserIdCB)

module.exports = router

function getByIdCB(req, res, next) {
    let data = {
            id: req.params.eventId,
            name: "Some Name",
            content: {
                subject: "This is quite the subject",
                body: "Not a whole lot more to say"
            },
            type: "memo"
        }

        res.json(data)

}

async function getListByUserIdCB(req, res, next) {
    let results = await eventService.getListByUserIdCB(req.params.userId)

     res.json(results)

}