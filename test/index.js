const express = require('express')

const PORT  = 3001;

const app = express();
const pm = new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 100);

    if (random %2 === 0 ) {
        resolve(random)
    }
    reject (random)
})

pm.then((random) => {
    console.log(`${random}`)
})
    .catch((random) => {
        console.log(`error ${random} do not divided by 2`)
    })

console.log(pm)

app.listen(PORT , () => {
    console.log(`App is listening at ${PORT}`);
})