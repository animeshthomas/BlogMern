const blogSchema = require('../models/blogSchema');

exports.createBlog = async (req, res) => {
    try {
        const newBlog = await blogSchema.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                blog: newBlog
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
}

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogSchema.find();
        res.status(200).json({
            status: 'success',
            results: blogs.length,
            data: {
                blogs
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
}   

