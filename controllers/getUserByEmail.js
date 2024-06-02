const users = require("../users.js")
const { request, response } = require("express")

const getUserByEmail = (req = request, res = response) => {
    let email = req.params.email

    let user = users.find( (user) => {
        return user.email === email
    })

    if(user){
        return res.json({
            ok:true,
            statusCode:200,
            user
        })
    }else{
        return res.json({
            ok:false,
            statusCode:404,
            msg:"User not found"
        })
    }
}

module.exports = {
    getUserByEmail
}