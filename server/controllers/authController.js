const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../models/userSchema');
const JWT_SECRET = '8814051fbb43d5677140a882aad6f96ebfc6e9a8c8335ea5bfce0ded26cafd136f15f57c8196374088f33c9386a2e1b0237b4b0ef9fddb422c163e84a8c9b0fb';
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await Users.create({ name, email, password: hashedPassword });
        const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: '90d' });
        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
}


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                status: 'fail',
                message: 'Please provide email and password'
            });
        }
        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({
                status: 'fail',
                message: 'Incorrect email or password'
            });
        }
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '90d' });
        res.status(200).json({
            status: 'success',
            token
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
}


exports.getAllUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
}