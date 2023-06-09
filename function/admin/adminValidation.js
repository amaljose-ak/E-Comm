const joi = require('joi')


const adminValidation = (data) => {
    const value = joi.object({
        name: joi.string().required().min(4).max(15),
        email: joi.string().required().email().min(5).max(25),
        password: joi.string().required().min(4).max(10)
    })
    return value.validate(data)
}

const loginValidation = (data) => {
    const value = joi.object({
        email: joi.string().required().email().min(5).max(25),
        password: joi.string().required().min(4).max(10)
    })
    return value.validate(data)
}
module.exports.adminValidation = adminValidation 
module.exports.loginValidation =loginValidation 