import express, { type Application, type Request, type Response } from 'express'
const app :Application = express()
const port = 5000

app.use(express.json())


app.post("/",async(req:Request, res:Response)=>{
    console.log(req.body);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})