
// The address of this server will be http://localhost:3000
// url: http://localhost:3000
// ip:
// 
const express = require('express');
const app = express();
const PORT = 3000;

let data = ["Eugene "]


// Create a route for the root URL ("/")

app.get('/', (req,res) =>{
   res.send(`<body>
    <h1>Data:/h1>
    <p>${JSON.stringify(data)}</p>
    
    </body>`)

})

app.get("/dashboard", (req,res) =>{
    console.log('User requested the dashboard page', res.method);
    res.send("<h1>Dashboard Page</h1>")
})


// Middleware

app.use(express.json())


// API endpoint


app.get('/api/inf', (req,res) =>{

    const newdata = req.body

    console.log(newdata);
    data.push(newdata.name)
    res.send(data)
    res.sendStatus(200)

}
)



app.post('/api/data',(req,res)=>{
    // someone wants create a user
 const newdata = req.body
    console.log(newdata)
    data.push(newdata.name)
    //    res.send(data)/
    res.sendStatus(201);


})

app.delete('/api/data', (req,res) => {
    data.pop();
    console.log('we delect the last data in the data aeray')
    res.sendStatus(201)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});