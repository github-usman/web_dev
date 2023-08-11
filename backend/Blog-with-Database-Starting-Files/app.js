//jshint esversion:6

import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import _  from 'lodash';
import mongoose from "mongoose";

const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. elis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


// let posts = [];
// connect to mongoDB
mongoose.connect('mongodb://127.0.0.1:27017/test');
// schema
const post = new mongoose.Schema({
  title: String,
  message: String

});

const Blog = mongoose.model('Blog',post);

const Day_one = new Blog({
  title:'One Day',
  message:"honcus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui."
})

// Day_one.save();

console.log(Day_one.title);



const year = new Date().getFullYear();
let userTitle = "";
let userMessage = ""
app.get("/", (req, res) => {
  res.render("./home", { homeContent: aboutContent,year:year,posts:Day_one});
 
});


app.get("/about", (req, res) => {
  res.render("./about", { aboutContent: aboutContent,year:year });
});

app.get("/contact", (req, res) => {
  res.render("./contact", { contactContent: contactContent,year:year });
});

app.get("/compose", (req, res) => {
  res.render("./compose", { homeContent: contactContent,year:year});  
});

app.post('/compose', (req, res) => {

  //  const post = {
  //     title : req.body.titleInput,
  //     message : req.body.postInput

  //  } 
    if(req.body.titleInput !== ""){
      const Day_one = new Blog({
        title:req.body.titleInput,
        message:req.body.postInput
      })

      Day_one.save();
    }
  
   
  
      // posts.push(post);
     
  res.redirect('/');
});


// dynamic URL

app.get("/posts/:topic",(req,res)=>{
  console.log("not Matched");

  // posts.forEach((post)=>{
     
    if(_.lowerCase(req.params.topic) === _.lowerCase(Day_one.title)){
      // console.log("matched");
      res.render("./partials/post", {
         title:Day_one.title,
         content:Day_one.message,
         year:year
        });  
    }else{
      console.log("not Matched");
    }
  // });
 
  res.redirect("/posts");
});





























app.listen(port, function () {
  console.log(`Server started on port http://localhost:${port}/`);
});

// app.listen(port, '192.168.43.81', ()=>{
//   console.log(`Listening port on ${port}`)
// });
