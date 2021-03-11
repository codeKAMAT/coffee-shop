const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const data = {
        title: "Kamat's Coffee House",
        description: "Welcome to my House of Coffee! We hope you enjoy our board selection of premium coffee from all over the world."
    }
    res.render('home', data)
})


module.exports = router
