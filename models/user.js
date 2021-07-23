const Sequelize = require("sequelize");

const sequelize = require("../util/datBase");

const User = sequelize.define("user", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	name: Sequelize.STRING,
	email: Sequelize.STRING,
	passWord: Sequelize.STRING,
	updated_at: Sequelize.DATE,
	created_at: Sequelize.DATE
});

module.exports = User;
