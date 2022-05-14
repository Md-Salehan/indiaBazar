const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs");
const { use } = require("express/lib/application");
                                                                   
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    fname = "";
    res.render("index",{user: fname})
})

app.get('/:name', (req, res) => {
    let name = req.params.name;
    res.render("productPage",{imgName: name})
})

app.get('/user/newuser/:fname', (req, res) => {
    let fname = req.params.fname;
    if(fname === null) fname = "";
    res.render("index",{user: fname})
})

app.get("/detail/:productName", (req, res) => {
    let productName = req.params.productName 
    res.render("productDetail", { product: productName });
})

app.get("/user/register", (req, res) => {
    res.render("register");
})
app.get("/user/login", (req, res) => {
    res.render("login");
})
app.get("/user/update-password", (req, res) => {
    res.render("updatePassword")
})
app.post("/register", (req, res)=>{
    let fname = req.body.fname;
    let lname = req.body.lname;
    let phoneNum = req.body.phoneNum;
    let email = req.body.email;
    let password = req.body.password;
    let address1 = req.body.address1;
    let address2 = req.body.address2;
    let state = req.body.state;
    let city = req.body.city;
    let district = req.body.district;
    let pinCode = req.body.pinCode;

    res.redirect("/user/newuser/"+fname);
})
app.post("/update-password", (req, res)=>{
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;
    let confirmPassword = req.body.confirmPassword;

    res.redirect("/");
})
app.listen(process.env.PORT || 3000, () => {
  console.log("server started");
});