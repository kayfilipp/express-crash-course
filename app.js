const express = require('express')
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express();

//body parser
app.use(express.json())
//url encoded data
app.use(express.urlencoded({extended:false}))

app.use('/api/members',require('./routes/api/members'))

//express built in static folder functionality
//everything in the /public folder has routes sorted for it.
app.use(express.static(path.join(__dirname,'public')));


app.listen(PORT,function(){
    console.log(`running on port ${PORT}`);
})