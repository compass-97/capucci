const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/api/test',(req,res)=>{
    console.log(req.body)
    res.send('test')
})

app.listen(PORT,()=>{
    console.log(`${PORT} CONNECTED`)
})