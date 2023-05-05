
const mongoose = require('mongoose')


const dbconnect = () => mongoose.connect(process.env.DB).then(() => {
    console.log('Connected to DB');
}).catch((error) => {
    console.log((error, 'connecting error'));
})
module.exports = dbconnect