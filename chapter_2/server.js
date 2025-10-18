
// The address of this server will be http://localhost:3000
// url: http://localhost:3000
// ip:
// 
const express = require('express');
const app = express();
const PORT = 3000;

let data = {
    name: "Alice",
    age: 25,
    city: "Wonderland"
}


// Create a route for the root URL ("/")

app.get('/', (req,res) =>{
   res.send("<h1>Home Page</h1> <img src='https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif'/> <input type='text' placeholder='Enter something'/>")

})

app.get("/dashboard", (req,res) =>{
    console.log('User requested the dashboard page', res.method);
    res.send("<h1>Dashboard Page</h1>")
})


// API endpoint


app.get('/api/info', (req,res) =>{

    console.log('This one was for info');
    res.send(data)

}
)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});