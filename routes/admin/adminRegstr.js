const router = require('express').Router()
const adminModel = require('../../model/adminModel')
const { adminValidation } = require('../../function/admin/adminValidation')
const bcrypt = require('bcrypt')

router.get('/', async (req, res) => {
    const viewall = await adminModel.find()
    res.json({
        details: viewall
    })
})

// register new admin 
router.post('/register', async (req, res) => {






    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.password, salt)

    const { error } = adminValidation(req.body)
    if (error) {
        res.json({
            err: error.details[0].message
        })
    }

    const admins = new adminModel({
        name: req.body.name,
        email: req.body.email,
        password: hashpassword

    })
    try {
        const saves = await admins.save()
        res.json({ saves })
    } catch (error) {

    }
})


module.exports = router 