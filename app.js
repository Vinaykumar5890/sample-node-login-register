const express = require('express')
const mongoose = require('mongoose')
const BrandName = require("./model")
const app = express()
app.use(express.json())
mongoose
  .connect(
    'mongodb+srv://vinay:vinay@cluster0.fv2hjsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => console.log('DB connected'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get("/getallbrands", async (req,res)=>{
  try{
   const allData = await BrandName.find();
   return res.json(allData)
  }
  catch(err){
    console.log(err)
  }
})
app.get("/getallbrands:id", async (req,res)=>{
  try{
   const allData = await BrandName.findById(req.params.id);
   return res.json(allData)
  }
  catch(err){
    console.log(err)
  }
})
app.delete("/getallbrands:id", async (req,res)=>{
  try{
   const allData = await BrandName.findByIdAndDelete(req.params.id);
   return res.json(await BrandName.find())
  }
  catch(err){
    console.log(err)
  }
})
app.post("/addbrands", async (req,res)=>{
  const {brandname} = req.body;
  try {
     const newData = new BrandName({brandname});
     await newData.save();
     return res.json(await BrandName.find())
  }
  catch(err){
    consolelog(err);
  }
})
app.listen(3000, () => console.log('Server running ..'))
