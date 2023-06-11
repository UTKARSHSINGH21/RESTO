const express = require("express");
const _ = require("lodash");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app  = express();


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let foods = []; 

app.get("/", function(req,  res)
{
    res.render("home");
})


app.get("/menu", function(req,  res)
{
    res.render("menu", {foodItems: foods});
})

app.get("/:test", function(req, res)
{

    res.render(req.params.test);
})


app.get("/admin/:test", function(req, res)
{

    res.redirect("/error404");
})




app.post("/add_food", function(req, res)
{

    let food = {
         foodName : req.body.name,
         desc : req.body.description,
         img : req.body.img,
         price : req.body.price,
    }
    foods.push(food);

    res.redirect("/menu");
});














app.listen(3000, function(){
    console.log("Server started on 3000");
});