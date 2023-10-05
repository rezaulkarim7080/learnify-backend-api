require("dotenv").config();
const connectDb = require("./db/connect");

const Course = require("./models/courseModel")

const CourseJson = require("./course.json");

const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URI);
        await Course.deleteMany();
        await Course.create(CourseJson);
        console.log("Data inserted");
    } catch (error) {
        console.log(error);
    }
}



start();