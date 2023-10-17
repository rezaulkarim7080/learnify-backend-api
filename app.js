require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const connectDb = require("./db/connect");



app.get("/", (req, res) => {
    res.send("i am live");
});

/// middleware or set router

const course_routes = require("./routes/courses")

app.use("/api", course_routes);
// app.use("/api/courses", course_routes);


const start = async () => {

    try {
        await connectDb();
        app.listen(process.env.PORT || 5000, () => {
            console.log(`server is running port `);
        });
    } catch (error) {

        console.log(error);
    }

}

start();


