
const Course = require("../models/courseModel");


const getAllProducts = async (req, res) => {
    const courses = await Course.find({});

    // total product
    // const totalCourses = await Course.countDocuments({});

    res.status(200).json({ totalCourses, courses });
    // res.status(200).json({ products });
};



const getAllTestingProducts = async (req, res) => {
    const { seller_name, upcoming, title, featured, sort, select } = req.query;


    const qureyObject = {};

    // if (seller_name) {
    //     qureyObject.company = seller_name;
    // }

    if (seller_name) {
        qureyObject.seller_name = { $regex: seller_name, $options: 'i' };
    }

    if (title) {
        qureyObject.title = { $regex: title, $options: 'i' };
    }
    if (upcoming) {
        qureyObject.upcoming = upcoming;
    }

    let apiData = Course.find(qureyObject);


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
    let limit = Number(req.query.limit) || 10; /// page product ->10
    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);

    // total product
    // const totalCourses = await Course.countDocuments({});


    const courses = await apiData.sort(sort);
    res.status(200).json({ courses });

};



module.exports = { getAllProducts, getAllTestingProducts, }





// const totalProduct = await Product.countDocuments({});
// const products = await Product.find({}).select("name company");
// const products = await Product.find({}).sort("name -price");
// const products = await Product.find({}).sort("name -price").select("name company");
// const products = await Product.find({}).sort("name -price").select("name company").limit(10);
// const products = await Product.find({}).sort("name -price").select("name company").skip(10);
// const products = await Product.find({}).sort("name -price").select("name company").limit(10).skip(10);
// const products = await Product.find({}).sort("name -price").select("name company").limit(10).skip(10).lean();
// const products = await Product.find({}).sort("name -price").select("name company").limit(10).skip(10).lean().exec();