const router = require('express').Router()
const adminModel=require('../../model/adminModel')

router.delete('/:id',async(req,res)=>{
    try {
        const deleteadmin= await adminModel.deleteOne({_id:req.params.id})
        return res.json({deleteadmin,message:"admin deleted succesfully"})
    } catch (error) {
        
    }
})

module.exports=router