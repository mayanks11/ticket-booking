const router = require('express').Router();
const user = require('../models/user');
const jwt = require('jsonwebtoken');
const expire = 24 * 60 * 60;
const bcrypt = require('bcrypt');
const createToken = (id) => {
    return jwt.sign({id}, "mayank key", {
        expiresIn: expire
    });
}

const handleErrors = (err) => {
    let errors = {email: "", password: ""};
    if(err.code === 11000){
        errors.email = "Email is already registered";
        return errors;
    }
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        })
        return errors;
    }
    return errors;
}
// Insert 
router.post('/api/user', async(req, res) => {
    try {
        const plainPassword = req.body.password;
        const hashPassword = bcrypt.hashSync(plainPassword, 7);
        const newItem = new user({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            age: req.body.age,
            password: hashPassword
        })
        const save = await newItem.save()
        
        const token = createToken(newItem._id);
        res.cookie("jwt", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: expire * 1000
        });
        res.status(200).json(newItem);
    } catch (error) {
        const errors = handleErrors(error);
        res.json(errors)
    }
})
router.post("/api/login", async (req, res) => {
    try {
       
        const reqEmail = req.body.email;
        const reqPassword = req.body.password;
        console.log(reqPassword)
        const item = await user.findOne({email: reqEmail});
        if(item){
            const save = item.password;
            if(bcrypt.compareSync(reqPassword, save)){
                
                
                res.json(item);
                // res.status(200).json(item)
            }else{
                res.json('false')
            }
        }else{
            res.json('no');
        }
        // const token = createToken(item._id);
        // res.cookie("jwt", token, {
        //     withCredentials: true,
        //     httpOnly: false,
        //     maxAge: expire * 1000
        // });
    } catch (error) {
        const errors = handleErrors(error);
        res.json(errors);
    }
})
router.get("/api/users", async(req, res) => {
    try {
        const entries = await user.find({})
        res.status(200).json(entries);
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;