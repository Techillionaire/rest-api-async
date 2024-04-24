require("dotenv").config()
const express = require("express")
const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT 
const studentRoute = require("./routes/studentRoute")
const connectDB = require("./db/db")
connectDB()


app.get("/", (req, res) => {
    res.send("welcome to home")
})


app.use(bodyParser.json()); // Add this line before registering routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(studentRoute);

app.listen(port, () => {
    console.log(`server started at  http://localhost:${port}`)
})