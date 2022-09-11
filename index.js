let express = require('express');
let cookieParser = require('cookie-parser');
const res = require('express/lib/response');
let app = express()

app.use(cookieParser());

app.get('/',(req,res)=>{
    
    res.send('Welcome to express app');
});

app.get('/setuser', (req,res)=>{
    res.cookie("userData", users);
    res.send('user data added to cookies');
});

app.get('/getuser', (req,res)=>{
    res.send(req.cookies);
});

app.get('/dashboard', (req,res)=>{
    if(req.cookies){
        res.send("Congrats! Yo logged in.")
    }else{
        res.send("Login failed")
    }
})

app.listen(3000)
