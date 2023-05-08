const router=require('express').Router()
const adminModel=require('../../model/adminModel')

router.get('/',async(req,res)=>{
    const viewall= await adminModel.find()
    res.json({viewall})
  })
  
module.exports=router