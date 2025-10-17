
// The address of this server will be http://localhost:3000
// url: http://localhost:3000
// 
const express = require('express');
const app = express();
const PORT = 3000;


console.log('Hello World');


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});