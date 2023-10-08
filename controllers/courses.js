const Course = require("../models/courseModel");

const getAllProducts = async (req, res) => {
    const courses = await Course.find({});
    res.status(200).json(courses);
};

const getAllTestingProducts = async (req, res) => {
    const { seller_name, upcoming, title, sort, select } = req.query;
    const queryObject = {};

    if (seller_name) {
        queryObject.seller_name = { $regex: seller_name, $options: 'i' };
    }

    if (title) {
        queryObject.title = { $regex: title, $options: 'i' };
    }
    if (upcoming) {
        queryObject.upcoming = upcoming;
    }

    let apiData = Course.find(queryObject);

    // sort
    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    // select
    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // pagination
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10; // page product -> 10
    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);

    const courses = await apiData.sort(sort);
    res.status(200).json(courses);
};

module.exports = { getAllProducts, getAllTestingProducts };
