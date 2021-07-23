const Post = require("../models/post");
const User = require("../models/user");

exports.getUser = (req, res, next) => {
	User.findAll()
		.then((products) => {4;
			res.send({});
		})
		.catch((err) => console.log(err));
};

exports.getPost = (req, res, next) => {
	User.findAll()
		.then((products) => {
			res.send({});
		})
		.catch((err) => console.log(err));
};
