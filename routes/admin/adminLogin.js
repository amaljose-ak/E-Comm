const router = require('express').Router()
const adminModel = require('../../model/adminModel')
const bcrypt = require('bcrypt')
const {loginValidation}=require('../../function/admin/adminValidation')




// login router
router.post('/',async(req,res)=>{
    const {error}=loginValidation(req.body)
    if (error){
        return res.status(500).json({message:error.details[0].message})
    }
    const adminExst= await adminModel.findOne({email:req.body.email})
    if(!adminExst){
        return res.status(500).json({message:"email is not matching"})
    }
    const validPasswrd= await bcrypt.compare(req.body.password,adminExst.password)
    if(!validPasswrd){
        return res.status(500).json({message:"password is mismatching"})
    }
    res.json({msg:'login succesfull'})
})
module.exports=router 