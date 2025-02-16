let User = require('./models/UserModel')
let jwt = require('jsonwebtoken')
let config = require('./config.env')

exports.signup = function (req, res) {
    let newUser = new User(req.body);
    newUser.save().then(function (user) {
        let token = jwt.sign({ id: user._id }, config.secrets.jwt, { expiresIn: config.expireTime });
        res.status(201).json({
            success: true,
            data: {token: token, user: user.toJson()}
        });
    }).catch(err => {
        res.status(404).json({
            success: false,
            data: "error:😱" + err
        })
    })
}

exports.login = async function (req, res, next) {
    try {
        const { name, password } = req.body;

        if (!name || !password) {
            return res.status(400).send('You need email and password');
        }

        const user = await User.findOne({ name: name });

        if (!user) {
            return res.status(401).send('No user with the given username');
        }

        const isPasswordValid = user.authenticate(password);

        if (!isPasswordValid) {
            return res.status(401).send('Wrong password');
        }

        const token = signToken(user._id);

        return res.status(200).json({
            success: true,
            data: {token: token}
        });

    } catch (error) {
        return next(error);
    }
};

let signToken = id => {
    return jwt.sign({
        id: id
    },
        config.secrets.jwt, {
        expiresIn: config.expireTime
    })
}
