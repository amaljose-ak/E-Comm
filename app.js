const express = require('express')
const dotenv = require('dotenv/config')
const app = express()
const bodyParser = require('body-parser')
// requiring db
const dbconn = require('./db/config')


// requiring routes
const adminRouter = require('./routes/admin/adminRegstr')
const adminLoginRouter=require('./routes/admin/adminLogin')
const adminUpdate=require('./routes/admin/update')
const viewall=require('./routes/admin/view')
const deleteadmin=require('./routes/admin/delete')
app.use(bodyParser.json())
dbconn()


// admin routers configureation
app.use('/api/admin/register', adminRouter)
app.use('/api/admin/view',viewall)
app.use('/api/admin/login',adminLoginRouter)
app.use('/api/admin/update',adminUpdate)
app.use('/api/admin/delete',deleteadmin)


// port configuration
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})