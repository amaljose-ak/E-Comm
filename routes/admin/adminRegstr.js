const router=require('express').Router()
const adminModel=require('../../model/adminModel')


router.get('/',(req,res)=>{
    res.send('Welcome to admin page')
})
router.post('/register',async(req,res)=>{
    const admins= new adminModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    try {
        const saves=await admins.save()
        res.json({saves})
    } catch (error) {
        
    }
})


module.exports=router