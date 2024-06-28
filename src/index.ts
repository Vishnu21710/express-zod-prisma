import express from "express"
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(express.json())


app.get('/', (req, res)=>res.send("Basic Express App With Zod And Prisma"))


app.listen(PORT || 8000, ()=>{
    console.log(`Listening to port ${PORT || 8000}`);
    
})