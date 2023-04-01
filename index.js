import express from 'express'
import dotenv from 'dotenv'
import route from './router/route.js'

dotenv.config()
const app = express()

//middleware
app.use('/', route)

// Crreate server
const host = 'localhost'
const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Server Running on http://${host}:${port}`))