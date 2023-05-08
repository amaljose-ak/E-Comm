const express = require('express')
const dotenv = require('dotenv/config')
const app = express()
const bodyParser = require('body-parser')
// requiring db
const dbconn = require('./db/config')
const adminRouter = require('./routes/admin/adminRegstr')
const adminLoginRouter=require('./routes/admin/adminLogin')
app.use(bodyParser.json())
dbconn()


// routers configureation
app.use('/api/admin/register', adminRouter)
app.use('/api/admin/login',adminLoginRouter)


// port configuration
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})