import express from "express"
import bcript from "bcryptjs"
import jwt from "jsonwebtoken"
import db from "../db.js"



 const router = express.Router();


//  Register new user end posing /auth/register

 router.post('/register', (req,res) => {
    const {username,password} = req.body

    // save the username and an irreversibly encrypted password
    // save stoic.com | wtryrcjirookcc.crccok

    // Encrypt the password
    const hashpassword = bcript.hashSync(password,8)

    try{
        const insertUser = db.prepare(`INSERT INTO users (username, password)
            VALUES(?,?)
            `)

            const result = insertUser.run(username,hashpassword)

            // NoTE that we have a user i want to add a todo for them

            const defaultTodo = "hello :) Add your first todo"
            const insertTodo = db.prepare(`INSERT INTO todos(user_id, task) VALUES(?, ?)`)
            insertTodo.run(result.lastInsertRowid, defaultTodo )

            // create a token 
            const token = jwt.sign({id: result.lastInsertRowid}, process.env.JWT_SECRET,{expiresIn : '24h'});

            res.json({  token  })

    } catch (err){
        console.log(err.message)
        res.sendStatus(501)

    }


    console.log(hashpassword)

 })


 router.post('/login', (req,res) =>{

    // we get their emil and we look up the password associated with that email in the database
    // but we getback and see it"s encrypted , which means that we cannot compare it to the one user just used trying to login 
    //  so what we can do is again onw way encrypt the password the user just  entered 

    const {username,password} = req.body
    

    try {
        const getUser = db.prepare(`SELECT * FROM users WHERE username = ?`)
        const user = getUser.get(username)

        // if we cannt find a user asoociated with the username , return out from the function
        if(!user){
            return res.status(404).send ({message: "User Not found"})
        }
        
        // if the passord does nt match ,return out of the function
        const isvalidPassword = bcript.compareSync(password, user.password)

        if(!isvalidPassword){
            return res.status(401).send({message:"Invalid password"})
        }

        console.log(user)

        // then we hae a successful authentication
        const token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn: '24h'} )
        res.json({token})

    } catch(err){
        coonsole.log(err.message)
        res.sendStatus(503)
    }

 })

 export default router