const router = require('express').Router();

router.get("userTest", (req, res)=>{
    const username = req.body.username;
    console.log(username)
})

router.post("", (req, res)=>{
    const username = req.body.username
    console.log(username)
})



module.exports = router