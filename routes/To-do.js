const express = require('express')
const router = express.Router()
const To_do = require('../module/To-do')

router.get("/", async(req,res) => {
    res.render('app');
})
router.post("/", (req, res) => {
    var to_do = new To_do(req.body);
    to_do.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });
module.exports = router;