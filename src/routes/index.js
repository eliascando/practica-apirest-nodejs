const {Router} = require('express');
const router = Router();

router.get('/test',(req, res) => {
    const data = {
        "name":"Eli",
        "website":"elias.com"
    }
    res.json(data);
})

module.exports = router;