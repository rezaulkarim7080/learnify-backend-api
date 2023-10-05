const mongoose = require("mongoose");

/// create product schema

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    title_image: {
        type: String
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,

    },
    duration: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    num_reviews: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    seller_image: {
        type: String
    },
    seller_name: {
        type: String,

    },
    learn_from_course: [String],
    course_image: { String },
    requirements: [String],

    upcoming: {
        type: Boolean,
        default: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});


const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
