import express from "express";
const app = express();
const port = 3000 ;


app.get("/hello",(req,res)=>{
    // res.send( "<h1>Usman Ali Ansari</h1>" );
    res.send("<strong>usman</strong>");
    // console.log(req.rawHeaders);
})

app.listen(port, ()=>{
    console.log("hello Usman expressj is working")
    console.log("for this link to see the app info http://localhost:3000/")
}) 

