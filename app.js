const express = require('express')
const dotenv = require('dotenv/config')
const app = express()
const bodyParser = require('body-parser')
// requiring db
const dbconn = require('./db/config')
const adminRouter = require('./routes/admin/adminRegstr')
app.use(bodyParser.json())
dbconn()


// routers configureation
app.use('/api/admin', adminRouter)


// port configuration
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})