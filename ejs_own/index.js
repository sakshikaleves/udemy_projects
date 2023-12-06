import Express  from "express";
const app= Express()

const port = 3000

app.get('/', (req,res) =>{
    res.send("hello");
});

 app.listen(port , ()=>{
    console.log("server running at "+port)
 })