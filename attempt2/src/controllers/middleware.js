const jwt = require("jsonwebtoken");
const secretkey = 'ab240f90aba431402985eddc45f4d413a33ebc925575c558168a98b2c38033a6';

// const authentication = (req, res, next) => {
//     try {
//         const token = req.header("Authorization");
//         if (!token) return res.status(401).send("Access denied.");
//         const decoded = jwt.verify(token, secretkey);
//         req.user = decoded;
//         console.log(req.user)
//         next();
//     } catch(err) {
//         res.status(403).send('Invalid Token')
//     }
// }

const authentication = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    // res.status(200).send()
    next();
    // if (authHeader) {
    //   const token = authHeader.split(' ')[1];
  
    //   jwt.verify(token, 'your_secret_key', (err, user) => {
    //     if (err) {
    //       return res.sendStatus(403); // Forbidden
    //     }
  
    //     req.user = user;
    //     next();
    //   });
    // } else {
    //   res.sendStatus(401); // Unauthorized
    }

  

module.exports = authentication