const express = require('express');
const app = express();
const PORT = 2002;

app.listen(PORT,() => console.log(`SERVER IS RUNNING ON ${PORT}` ));