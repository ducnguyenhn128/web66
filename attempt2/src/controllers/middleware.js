const jwt = require("jsonwebtoken");
const secretkey = 'ab240f90aba431402985eddc45f4d413a33ebc925575c558168a98b2c38033a6';

const authentication = (req, res, next) => {
    try {
        // const token = req.header("Authorization");
        const token = req.headers.cookie.slice(9);
        console.log(token);
        if (!token) return res.status(401).send("Access denied.");
        const decoded = jwt.verify(token, secretkey);
        req.user = decoded;
        next();
    } catch(err) {
        res.status(403).send('Invalid Token')
    }
}

  

module.exports = authentication