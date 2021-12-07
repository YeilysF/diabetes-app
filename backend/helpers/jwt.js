const expressJwt = require('express-jwt');

function authJwt() {
    const secret = process.env.secret;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: /\/api\/v1\/Medications(.*)/ , methods: ['GET', 'PUT', 'POST', 'DELETE'] },
            {url: /\/api\/v1\/Glucoses(.*)/ , methods: ['GET', 'PUT', 'POST', 'DELETE'] },
            {url: /\/api\/v1\/Exercises(.*)/ , methods: ['GET', 'PUT', 'POST', 'DELETE'] },
            {url: /\/api\/v1\/BloodPressures(.*)/ , methods: ['GET', 'PUT', 'POST', 'DELETE'] },
            {url: /\/api\/v1\/Insulins(.*)/ , methods: ['GET', 'PUT', 'POST', 'DELETE'] },
           // {url: /\/api\/v1\/Users(.*)/ , methods: ['GET', 'POST', 'PUT', 'DELETE'] },
            `${api}/Users/login`,
            `${api}/Users/register`,
        ]
    })
}

async function isRevoked(req, payload, done) {
    if(!payload.isAdmin) {
        done(null, true)
    }

    done();
}

module.exports = authJwt