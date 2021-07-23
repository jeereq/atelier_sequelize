const Sequelize = require("sequelize");

const sequelize = require("../util/datBase");

const Post = sequelize.define("post", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	title: Sequelize.STRING,
	content: Sequelize.STRING,
	updated_at: Sequelize.DATE,
	created_at: Sequelize.DATE
});

module.exports = Post;
