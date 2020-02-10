const expressJwt = require('express-jwt')
const config = require('../config.json')


module.exports = jwt;

function jwt() {
    const secret = config.secret
    return expressJwt({ secret, isRevoked }).unless({
    path: [
        '/acct/auth'
    ]

    })
}

async function isRevoked(req, payload, done) {
    // temporary short-circuit
    const account = true

    /*
    if (!account) {
        return done(null, true)
    }
*/

    done()
}