const router =require('express').Router()
const adminModel=require('../../model/adminModel')
const { adminValidation } = require('../../function/admin/adminValidation')

router.put('/:id',async(req,res)=>{

    try {
        const {error}=adminValidation(req.body)
        if(error){
            return res.json({error:error.details[0].message})
        }
            const adminExist= await adminModel.findById({_id:req.params.id})
    if(adminExist){
        const updateAdmin= await adminModel.updateOne({_id:req.params.id},{$set:{name:req.body.name,email:req.body.email,password:req.body.password}})
        return res.json({updateAdmin, message:"item updated succesfully"})
    }else{
        return res.json({message:"not exist"})
    }
    } catch (error) {
        console.log(error);
    }


})



module.exports=router