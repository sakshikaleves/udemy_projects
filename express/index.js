import express from "express"
const app=express()

app.get("/", (req, res) => {
    // Callback function to handle the request and send a response
    res.send("<h1>hello</h1>");
  });



app.listen(3000 , ()=> 
{
    console.log("SERVER IS RUNNING ON PORT 3000");
}
)