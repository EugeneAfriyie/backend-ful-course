import express from 'express';
import path,{dirname} from 'path'
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'



const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON request bodies
app.use(express.json());



// Get the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url)
// get the directory name from the file-path
const __dirname = dirname(__filename)


// serve the html from the public directory
// Tells express to serve  all file from the public folder as static files
app.use(express.static(path.join(__dirname, '../public')))

// Serving up the uel fie fro the public directory
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})


// Routes
app.use('/auth', authRoutes)
app.use('/todos', todoRoutes)






app.listen(PORT, () =>{
    console.log(`Server is running on port : ${PORT}`)
})