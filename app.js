const express = require('express')
const mongoose = require('mongoose')
const config = require('dotenv')
config.config({path:"./config/config.env"})
const app = express();
const PORT = process.env.PORT || 6000

mongoose.connect(process.env.URI,{ useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('connected',()=>{
    console.log("connected to database successfully");
})


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/quiz',require('./router/quizRouter'))
app.use('/api/user',require('./router/MyUser'))








app.listen(process.env.PORT , ()=>{
    console.log(`Server is connected ${process.env.PORT}`)
})




