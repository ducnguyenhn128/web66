const express = require('express');
const cookieParser = require('cookie-parser')
const PORT = 3003;

const app = express();
app.use(cookieParser())


app.get('/setCookie', (req, res)=> {
    res.cookie('sites', 'anonystick.com');
    res.json({ok: 1})
})

app.get('/getCookie', (req, res)=> {
    // console.log('a')
    console.log('[ANONY] getCookie::::', req.cookies); 
    res.json({ok: req.cookies})
})






app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})