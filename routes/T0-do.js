const express = require('express')
const router = express.Router()
const To_do = require('../module/To-do')

router.get("/", async(req,res) => {
    res.render('app');
})
router.post('/', async(req, res) => {
    /*const to_do = new To_do({
        task: req.body.task,
        time: req.body.time
    })*/
    try{
          // const a1 = await to_do.save()
           console.log("Sucessfully added the data")
    }catch(err)
    {
        res.send("error" + err)
    }

})
module.exports = router;